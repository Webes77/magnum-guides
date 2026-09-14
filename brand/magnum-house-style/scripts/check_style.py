#!/usr/bin/env python3
"""Magnum AI house style checker.

Usage: python check_style.py <file-or-dir> [more ...] [--strict]

Reads .html .htm .css .svg .md .txt .js .pptx .docx (directories recurse).
Reports, per file:
  - retired or off-palette colours (hex values not in the token table)
  - off-system fonts (Inter, Playfair, Bebas, Roboto, Calibri, ...)
  - rounded corners, box shadows, gradients, background textures
  - em dashes anywhere in the text
  - the word "solid" in prose (CSS `border: 2px solid` is ignored)
  - more than one navy element per slide (pptx only, heuristic)

Exit code 1 when anything is reported, 0 when clean. --strict also flags
near-palette greys that are probably fine (rarely needed).
"""
import re
import sys
import zipfile
from pathlib import Path

PALETTE = {
    "FBFBF9", "FFFFFF", "1F2A37", "1E1B17", "2B2823", "3A3630", "63615C",
    "EF4029", "C63A2A", "F7BAB0", "A1524E", "FF6F5E", "FBE1D8", "5B6B7A", "F4F1EA", "C8CDD3", "DADAD5",
    "000000",  # allowed for print-only rules and SVG strokes that read as ink
}
RETIRED = {
    "D4AF37": "gold (black and gold system, retired)",
    "0E0D0B": "near-black (black and gold system, retired)",
    "EEE6D3": "beige paper (Aug/Sep 2026 system, retired)",
    "B8452A": "old rust (Aug/Sep 2026 system, retired)",
    "6C7A3F": "old olive (Aug/Sep 2026 system, retired)",
    "DE4A3C": "old single-value coral (retired 14 Sep 2026: EF4029 for display/fills/figures, C63A2A for anything under 18px)",
    "7A7A7A": "old mute grey (retired 14 Sep 2026, was 4.14:1 and failed; use 63615C)",
}
BAD_FONTS = [
    "Inter", "Playfair", "Bebas", "Archivo Narrow", "Roboto", "Calibri",
    "Montserrat", "Poppins", "Lato", "Open Sans", "Georgia", "Times New Roman",
    "Helvetica Neue", "Segoe UI",
]
SYSTEM_FONTS = {"oswald", "ibm plex sans", "ibm plex mono", "arial", "arial narrow",
                "liberation sans narrow", "courier new", "system-ui", "sans-serif",
                "monospace", "ui-monospace", "serif", "inherit"}

HEX_RE = re.compile(r"#([0-9a-fA-F]{6})\b|#([0-9a-fA-F]{3})\b(?![0-9a-fA-F])")
EM_DASH = "—"


def expand3(h):
    return "".join(c * 2 for c in h)


def find_hexes(text):
    out = []
    for m in HEX_RE.finditer(text):
        h = (m.group(1) or expand3(m.group(2))).upper()
        out.append((h, m.start()))
    return out


def line_of(text, pos):
    return text.count("\n", 0, pos) + 1


def strip_css_and_tags(html):
    """Return prose-ish text for the em dash / 'solid' checks."""
    mask = lambda m: " " * len(m.group(0))
    t = re.sub(r"<style.*?</style>", mask, html, flags=re.S | re.I)
    t = re.sub(r"<script.*?</script>", mask, t, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", mask, t)
    return t


def check_text_like(path, text, kind):
    issues = []
    # colours
    for h, pos in find_hexes(text):
        if h in RETIRED:
            issues.append((line_of(text, pos), f"retired colour #{h}: {RETIRED[h]}"))
        elif h not in PALETTE:
            issues.append((line_of(text, pos), f"off-palette colour #{h}"))
    # fonts
    for f in BAD_FONTS:
        for m in re.finditer(r"\b" + re.escape(f) + r"\b", text):
            issues.append((line_of(text, m.start()), f"off-system font '{f}'"))
    # css shapes
    for pat, msg in [
        (r"border-radius\s*:\s*(?!0(px|%)?\s*[;}!])[^;}]+", "rounded corners (border-radius)"),
        (r"box-shadow\s*:\s*(?!none)[^;}]+", "drop shadow (box-shadow)"),
        (r"text-shadow\s*:\s*(?!none)[^;}]+", "text shadow"),
        (r"(linear|radial|conic)-gradient\(", "gradient"),
        (r"background(-image)?\s*:\s*url\([^)]*(grid|dots?|texture|noise)[^)]*\)", "background texture"),
        (r"filter\s*:\s*[^;}]*blur\(", "blur filter"),
    ]:
        for m in re.finditer(pat, text, flags=re.I):
            issues.append((line_of(text, m.start()), msg))
    # prose checks
    prose = strip_css_and_tags(text) if kind in ("html", "svg") else text
    if kind == "css":
        prose = ""
    mask = lambda m: " " * len(m.group(0))  # keep positions so line numbers stay right
    if kind == "text":  # markdown: code is not prose
        prose = re.sub(r"```.*?```", mask, prose, flags=re.S)
        prose = re.sub(r"`[^`\n]*`", mask, prose)
    if kind == "js":  # dashType:"solid" and friends are API values
        prose = re.sub(r"[\"'][^\"'\n]*solid[^\"'\n]*[\"']", mask, prose, flags=re.I)
    for m in re.finditer(EM_DASH, prose):
        issues.append((line_of(text, text.find(EM_DASH)), "em dash in text"))
        break  # one report per file is enough; count it
    n_em = prose.count(EM_DASH)
    if n_em > 1:
        issues[-1] = (issues[-1][0], f"em dash in text ({n_em} occurrences)")
    for m in re.finditer(r"\bsolid\b", prose, flags=re.I):
        issues.append((line_of(text, m.start()), "the word 'solid' in prose"))
    return issues


def check_ooxml(path):
    """pptx and docx: read the XML parts and apply the same checks."""
    issues = []
    with zipfile.ZipFile(path) as z:
        names = [n for n in z.namelist() if n.endswith(".xml")]
        # exclude theme part from palette checks: pptxgenjs theme carries defaults
        for n in names:
            xml = z.read(n).decode("utf8", "replace")
            is_theme = "theme" in n
            label = n.split("/")[-1]
            if not is_theme:
                for m in re.finditer(r'srgbClr val="([0-9A-Fa-f]{6})"', xml):
                    h = m.group(1).upper()
                    if h in RETIRED:
                        issues.append((label, f"retired colour #{h}: {RETIRED[h]}"))
                    elif h not in PALETTE:
                        issues.append((label, f"off-palette colour #{h}"))
                for m in re.finditer(r'(typeface|ascii|hAnsi|cs)="([^"]+)"', xml):
                    face = m.group(2)
                    if face.startswith("+"):
                        continue
                    if face.lower() not in SYSTEM_FONTS:
                        issues.append((label, f"off-system font '{face}'"))
                if "<a:effectLst><a:outerShdw" in xml or "<a:outerShdw" in xml:
                    issues.append((label, "drop shadow (outerShdw)"))
                if 'prst="roundRect"' in xml or 'prst="round' in xml:
                    issues.append((label, "rounded corners (roundRect)"))
                if "<a:gradFill" in xml:
                    issues.append((label, "gradient fill"))
                text = " ".join(re.findall(r"<(?:a|w):t[^>]*>([^<]*)</(?:a|w):t>", xml))
                if EM_DASH in text:
                    issues.append((label, f"em dash in text ({text.count(EM_DASH)} occurrences)"))
                for m in re.finditer(r"\bsolid\b", text, flags=re.I):
                    issues.append((label, "the word 'solid' in prose"))
                # navy count per slide (pptx)
                if "/slides/slide" in n:
                    navy = len(re.findall(r'srgbClr val="1F2A37"', xml))
                    if navy > 2:
                        issues.append((label, f"{navy} navy fills on one slide; the system wants one navy block per screen (check by eye)"))
    return issues


KINDS = {".html": "html", ".htm": "html", ".css": "css", ".svg": "svg",
         ".md": "text", ".txt": "text", ".js": "js", ".jsx": "js"}


def check_path(p, strict=False):
    p = Path(p)
    if p.is_dir():
        results = {}
        for f in sorted(p.rglob("*")):
            if f.is_file() and (f.suffix.lower() in KINDS or f.suffix.lower() in (".pptx", ".docx")):
                results.update(check_path(f, strict))
        return results
    suf = p.suffix.lower()
    if suf in (".pptx", ".docx"):
        return {str(p): check_ooxml(p)}
    if suf in KINDS:
        text = p.read_text("utf8", errors="replace")
        return {str(p): check_text_like(p, text, KINDS[suf])}
    return {}


def main(argv):
    strict = "--strict" in argv
    paths = [a for a in argv if not a.startswith("--")]
    if not paths:
        print(__doc__)
        return 2
    total = 0
    for a in paths:
        for f, issues in check_path(a, strict).items():
            # dedupe repeated identical issues, keep a count
            seen = {}
            for where, msg in issues:
                seen.setdefault(msg, []).append(where)
            if not seen:
                print(f"OK    {f}")
                continue
            print(f"CHECK {f}")
            for msg, wheres in seen.items():
                total += 1
                locs = ", ".join(str(w) for w in wheres[:6])
                more = f" (+{len(wheres)-6} more)" if len(wheres) > 6 else ""
                print(f"  - {msg}  [{locs}{more}]")
    if total:
        print(f"\n{total} issue type(s) found. Fix, or state in the delivery why each one stays.")
        return 1
    print("\nClean.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
