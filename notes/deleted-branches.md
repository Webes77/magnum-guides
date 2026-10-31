# Branches safe to delete

On 1 Nov 2026 all 34 branches other than `main` were checked against the full
history: every change on them is already on `main` (two Sunday Brief branches
landed with edits, row 119 reordered and the 20 Sep card's where line). No pull
request was open. A session cannot delete branches here: the git proxy refuses
the push with a 403 and the GitHub tools have no delete. James deletes them on
GitHub's Branches page. To restore one afterwards:
`git push origin <sha>:refs/heads/<name>`.

| Branch | Last commit |
|---|---|
| `claude/client-guide-magnum-access-iqtblw` | `7c4fb76c496fe474dd11e2bb168932521acc6d68` |
| `claude/compassionate-turing-ojlp4y` | `64f0a01b21473c8f05b836fad5d2394c93684b44` |
| `claude/confident-davinci-ht1ufd` | `6275d51132f0cfb36bfd891d770311a177e19df0` |
| `claude/cowork-setup-guide-w0000v` | `b11db48738f3c9d7c296808cd0436db465b1014d` |
| `claude/dazzling-knuth-x0r8lq` | `b503f1b01ed63bf549395616916fb32d221ccd45` |
| `claude/github-repository-setup-550x3u` | `fe3bc41b50f8b62bae179714e601f2ff8946c020` |
| `claude/lucid-fermi-qcndxd` | `d0fe3de760ae3881a77c033b0222a5573d446a00` |
| `claude/members-area-continue-hzn03y` | `d0798a1b69084044c96c3abd3878b23ca6a7fced` |
| `claude/members-area-continue-of2sic` | `db54005e56e12c06c1d18134839a51f625146a14` |
| `claude/modest-albattani-bds0l0` | `83b9e875008809323cfb643ecf36c3ede38ba082` |
| `claude/modest-albattani-fuqj1k` | `2b156942444ac528d7e2f96c9de98221eaa74592` |
| `claude/modest-albattani-jd48fy` | `ec294674b62e8ffa485df319573781bf525f6458` |
| `claude/newsletter-brief-members-area-hxwcby` | `3df064f13f13bcbc77e18738afbb7a65f1024286` |
| `claude/newsletter-repo-sharing-nl75xh` | `7a9a13dae91b989d517f130abaa4c1139df9184b` |
| `claude/newsletter-video-generation-cckrya` | `dfa8e3975216716bb298c57b0533da6b8df5be59` |
| `claude/nifty-volta-dq714z` | `3f3b47f46f89dbb557f83e5e509cadce02c00096` |
| `claude/nifty-wozniak-gcfzb0` | `a4492f9bf1998a1a6dd9fb40683036f253b4a012` |
| `claude/publish-field-note-02-5mqlha` | `85222ad09bf2df179598f5afe8b82477165ba0ff` |
| `fact-check/2026-10-01` | `01b521a248a8033cb09d4d5d74306dc663aa748d` |
| `field-note/2026-09-16` | `0b1d70c12aa6f0aeb469d60bd499c1bcfde6c9e3` |
| `field-note/2026-09-23` | `b8bc7ec64e58bc59d1fdf3da147e353dd0abfe87` |
| `field-note/2026-09-30` | `4277a6038b005656f1629789d197ac8d0cbd3168` |
| `field-note/2026-10-07` | `95134c83e25ed010268d531b6f72f1dc19d27d10` |
| `field-note/2026-10-14` | `54b988317b5884b86905dc6f974da25b8a8d5f16` |
| `field-note/2026-10-21` | `10047619c6eaa8b997a77661b9b1aa805b8e24a9` |
| `field-note/2026-10-28` | `fc6c4f66643e683a6987ad873f1c232bedfdd2d3` |
| `field-note/2026-10-28-voice` | `46eed6952be1f80e1769b654fac71aaf8dfc867a` |
| `fn05` | `f1e36a7e661e5847721352006693ba49de0cb4e9` |
| `module/brand-dna` | `4423050bbd0b0d5197dae7000540553a05f010eb` |
| `sunday-brief/2026-09-20` | `d0434db2af8a71946be0e05bc6138b7df8891f82` |
| `sunday-brief/2026-09-27` | `4ebf8d905f8b3377b51fca6be3e960b5232da2c2` |
| `sunday-brief/2026-10-04` | `f32647da72d369be0fabe64eef96fd505d8b37f6` |
| `sunday-brief/2026-10-11` | `ee7ee9dd4a9ddeb98f22a5ff69090a8787574816` |
| `technique-repositioning` | `fd130baa95008ca26f986e711f58a9defb7bd60f` |
