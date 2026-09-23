---
name: client-facing-voice
description: >
  Enforces the register for anything a client will read or see: slides, proposals, rollout
  docs, session summaries, follow-up emails, service menus, SOPs, or any deliverable Magnum AI
  is producing as a paid consultant for a client's business. Prevents narrated/storytelling
  voice, manufactured rapport, misattributed authorship, and collective "we" language from
  leaking into client-facing material. Trigger this automatically whenever writing content that
  a client will read, regardless of which other skill is also active. This is a register check
  that applies on top of magnum-client-rollout-doc, post-session-workflow,
  discovery-session-debrief, proposal-writer, and any other client-deliverable skill. It is the
  last gate before a client reads something, so it also enforces the house hard rules the skill
  underneath may not carry. Also trigger if a deliverable is described as "sounds chatty",
  "sounds like a story", "wouldn't fly in a boardroom", or similar.
---

# Client-Facing Voice

## Who is writing

This skill runs on more than one person's account, so establish the author before applying
rule 5. Everything else in this file is the same either way.

**Owner mode.** The account holder is James Wheable, who owns Magnum AI and does the work.
This is the default when nothing indicates otherwise.

**Team mode.** The account holder works for Magnum AI and is not James. Joelinda, from
23 September 2026, is the first. In this mode the writer is a real person doing a real job,
not a voice standing in for the founder.

If you cannot tell which mode you are in, ask. Getting it wrong means a client reads a claim
about who did their work, which is worse than a blunt question.

## The failure this catches

When asked to make client material "less complicated" or "simpler," the instinct is to reach
for warmth: narrated moments, first-person storytelling, collective "we". That is not the
same thing as plain. It reads as unprofessional and presumptuous in front of a client, because
it invents shared rapport and blurs the line between "Magnum AI is delivering a service to your
business" and "we're all building this together as mates."

**Example of the failure**, from a real session slide:
> "This is the one that made Ross ring Amanda."

Reads fine in internal conversation. Unacceptable on a slide in front of the client whose
business it is. It's a narrated anecdote standing in for a factual statement, and it presumes
an inside joke the client hasn't agreed to be part of.

**Example of the fix:**
> "This layout is the reference point for every product page in the catalogue."

Same information. No narration, no manufactured moment, states the fact.

## The rule

For anything a client will read or see, under Magnum AI's name or the writer's own:

1. **No narrated storytelling voice.** Never invent or recount a moment as a hook
   ("this is the one that...", "picture this...", "here's what happened when..."). State the
   fact plainly instead.
2. **No collective "we" for the client's business or process.** Magnum AI is a consultant
   delivering a service. It is the client's catalogue, their process, their business. Say
   "you" or "the business" or name the actual party doing the thing (e.g. "Ross adds the
   pricing," not "we add the pricing"). "We" is only correct in the rare case where a sentence
   describes something Magnum and the client did together in that literal moment (e.g. a
   session recap: "we reviewed the French door sample on the call").
3. **No manufactured rapport or chatty warmth.** No jokes, no cute asides, no exclamation
   points doing emotional work, no rhetorical "sound familiar?" hooks. Warmth in client
   material comes from clarity and respect for their time, not personality performance.
4. **Direct address, stating facts and recommendations.** Write the way a consultant writes
   to a client's board: here is the situation, here is the recommendation, here is what happens
   next. Confident, not cold. Never corporate padding either. Plain and short is not the same
   as stiff and jargon-heavy. See voice notes below.
5. **Attribute the work to whoever actually did it.** This is the one rule that branches.

   **Owner mode.** First person for anything James does. "I set that up", never "James sets
   that up" and never "Magnum AI sets that up". Third person about James is never correct.
   First person throughout, always "I", never "James".

   **Team mode.** First person for what the writer did. Third person, named, for what James
   did: "James set that up", "James will confirm the date". Never write "I" about work James
   performed, and never write as though the writer made a decision that was his. A client who
   is told the wrong person did the work will take the next question to the wrong person.

   In both modes, third person about the work itself is correct and expected: "the plan sets
   out", "this stage covers", "the build delivers".
6. **Reserve personality and narrative voice for internal conversation.** That register is
   fine, even good, in chat about the work. It should never appear in what the client reads.
7. **The house hard rules apply to every client deliverable, no exceptions.** This skill fires
   on top of every other client-facing skill, so it is the last gate before a client reads
   something. Enforce all of these even when the skill underneath is silent on them:
   - No em dashes anywhere. Use commas, full stops, colons, or restructure the sentence.
   - Never the word "solid".
   - **Owner mode:** every price is written as `$X + GST`. Never "inc GST", never "including
     GST", never a bare number. If a price appears with no GST notation, add it.
     **Team mode:** do not write a price at all, formatted or otherwise. Pricing is James's to
     quote. Leave `[PRICE FROM JAMES]` and say so in the handover.
   - Australian English, never American.
   - Never propose anything that needs hiring, agency scale, or permanent operational
     complexity. Magnum AI is James plus occasional part-time help.

## What "plain" actually means here

This rule was triggered by an instruction to make things "less highbrow, less complicated."
That instruction is still valid. The fix is not to make things stiff or jargon-heavy. Plain
means:
- Short sentences.
- Concrete nouns and verbs, not abstractions.
- One idea per sentence.
- No hedging, no throat-clearing ("It's worth noting that...").
- No storytelling flourish standing in for a direct statement.

Plain and professional are the same target. Chatty and professional are not.

## Self-check before finalizing any client deliverable

Before treating client-facing copy as done, scan for:
- [ ] Any sentence that recounts a moment, reaction, or anecdote rather than stating a fact
- [ ] Any use of "we" describing the client's business, process, or decisions. Replace with
      "you", the business name, or the specific person doing the thing
- [ ] Any line that would sound like an inside joke or forced warmth if read aloud at a board
      table
- [ ] Any exclamation point, rhetorical question, or "picture this" style hook doing work a
      plain statement should do instead
- [ ] **Owner mode:** any reference to James in third person, or to Magnum AI as the actor.
      Change to "I"
- [ ] **Team mode:** any "I" claiming work James did, or any decision written as the writer's
      that was his. Name him
- [ ] Any em dash. Any use of the word "solid"
- [ ] **Owner mode:** any price without `+ GST`. **Team mode:** any price at all
- [ ] Any American spelling
- [ ] Any recommendation that would need hiring or agency scale

Fix every register fault above without asking. That is what this skill is for and it is not
optional.

Two things are never fixed silently in team mode, because they are not register questions.
A price, a scope commitment or a date that is not already in writing goes back to James before
the deliverable leaves. Write `[PRICE FROM JAMES]` or `[DATE FROM JAMES]` and flag it rather
than choosing a plausible value.

## Where this applies vs. where it doesn't

**Applies:** slide decks, proposals, rollout docs, SOPs, service menus, session summaries sent
to the client, follow-up emails to the client, any document with the client's name on it or
that the client will open.

**Does not apply:** internal conversation in chat, internal notes, and the `james-writes`
skill, which is James's own voice for his own outward content (LinkedIn, newsletters, personal
emails), a deliberately warmer register that he owns and controls. `james-writes` is an
owner-mode skill and never runs in team mode: a team member writes as themselves, so
impersonating the founder is the fault, not the goal. If unsure whether something is
client-facing or internal, ask.

## Precedence when more than one voice skill fires

A client email can trigger several skills at once. They give different instructions on warmth,
so the order is fixed.

**Owner mode:**
1. **james-writes** sets the voice. Lexicon, sentence shape, sign-offs, what James sounds like.
2. **client-facing-voice** constrains the register. Where the two disagree on warmth, this
   skill wins for anything the client reads. James's warm opener survives in a personal note;
   it does not survive on a slide, in a proposal, or in a rollout doc.
3. **horseman** supplies the move. The read, the frame, the lever, the sequencing of the ask.
   It never overrides the register rules above.

**Team mode:** this skill sets the register on its own. There is no voice skill above it,
because the writer's own plain voice inside these rules is the target.
