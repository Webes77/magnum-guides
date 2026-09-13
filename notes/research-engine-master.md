# Research engine: master text

This file holds the shared blocks used in all seven Research prompts. When a rule changes, change it here first, then paste the updated block over the same block in every prompt that uses it.

## Constraints block (all seven prompts)

Paste at the top of the Constraints lever. Prompt-specific constraints sit underneath it.

```
- Search before you answer, using today's date. If you do not have web search, finish any stage that needs no searching, then stop and tell me to switch it on. Never write the research from memory, because products, prices and rules change often.
- For every important claim, search for the strongest evidence against it before the evidence for it.
- Trace every important claim to its original source. A page that repeats a claim is not evidence for it.
- Grade every source with the evidence grades.
- Cite sources with this tool's built-in citations and name the publisher in the text. Never type out a web address, because typed addresses are often wrong.
- If a result is close but not a match, for example a different year, country, pricing tier, product version or parent company, state the mismatch before you use it.
- If you cannot verify something, write "Not verified" and state what you searched for.
- Flag any source about AI tools, software features or pricing that is older than 6 months.
- The default location is Australia. Use another country only if the input names one.
- Give prices in the currency the seller charges. If that is not AUD, add the approximate AUD amount. State whether tax is included.
- Keep names, contact details and confidential figures out of search queries. Describe the situation in general terms instead.
- If the answer touches law, tax, privacy, finance or health, flag it and name the type of professional who must confirm it before I act.
```

## Evidence grades block (all seven prompts)

```
Evidence grades:
- A. Primary: official documentation, pricing pages, changelogs, published research, and government or regulator sources. Official sources count as A for what a product does and costs, not for results it promises.
- B. Independent: a practitioner, reviewer or expert with no stake in the outcome, showing their own results or method.
- C. Secondary: journalism, industry reports and roundups that summarise other sources.
- D. Interested: marketing, sales material, affiliate content, testimonials, social posts and forums.
```

## Verdict labels

Decision verdicts, used in Trust Test, Shortlist, Idea Test, Business Check, Post-Call Intel and Build Path: GO, GO WITH CONDITIONS, WAIT, NO. The one-line definitions are worded per prompt. The labels never change.

Claim verdicts, used in Trust Test, Idea Test and Post-Call Intel: HOLDS, HOLDS WITH CONDITIONS, UNPROVEN, FALSE.

Briefing has no verdict.

## Complexity tiers (Post-Call Intel and Build Path)

- Set up: configure an existing product. No code and no connections between tools.
- Connect: link two or more tools with an automation platform or a built-in integration.
- Build: custom code, a custom AI agent, or an API integration.

## Why each engine rule exists

- Built-in citations, no typed addresses: Perplexity's documentation says models mistype or paraphrase URLs, and asking for them fights the tool's citation format.
- Near-miss rule: recommended in Perplexity's documentation for results from a different year, parent company or similar product.
- Not verified: an explicit permission to find nothing makes the model less likely to fill gaps from memory.
- Input at the top: Anthropic's testing found long inputs placed above the instructions improve response quality. It also stops Perplexity running a search on the prompt text alone.
- Role as stance only: Wharton's Generative AI Labs found expert personas do not reliably improve factual accuracy.
- No examples: Perplexity reports that example answers can pull its search onto the example's topic.
