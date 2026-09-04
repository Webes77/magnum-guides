# Prompt and skill review standards

Magnum AI reference. Current as of September 2026, checked by James against
Anthropic's live documentation (platform.claude.com prompting best practices
and skill authoring guides). Menus and model behaviour move; re-verify this
file every quarter. Pasted into the repo on 4 Sep 2026, verbatim.

Every prompt card on the Prompt Shelf, and every card the Sunday Brief
routine drafts, is reviewed against this file. A deck prompt that fails it is
fixed in the deck and on the shelf together.

## What this file is for

Load this into a project where prompts or skills get reviewed, improved, or
built. When asked to review a prompt, judge it against everything below, name
the specific faults, and produce the improved version. Do not review on
vibes. Every criticism must map to a principle in this file.

## Part one: what makes a prompt good now

1. **Clear, direct, explicit.** Current Claude models follow instructions
   more literally than older generations. They no longer over-deliver on
   vague asks. If the prompt wants "above and beyond" output, it has to say
   so. Treat the model like a brilliant new employee with zero context on
   your norms: the more precisely the prompt explains what's wanted, the
   better the result. Anthropic's golden rule: show the prompt to a colleague
   with minimal context, and if they'd be confused, the model will be too.
2. **Explain the why, not just the what.** Giving the motivation behind an
   instruction measurably improves compliance and lets the model generalise.
   "Never use ellipses because this will be read aloud by text-to-speech"
   beats "NEVER use ellipses." When reviewing: any bare rule that could carry
   a one-line reason should carry it.
3. **Positive framing beats prohibition.** Tell the model what to do instead
   of what not to do. "Write in flowing prose paragraphs" outperforms "Do not
   use markdown." Prohibitions still work, but a prompt built mostly from
   "don't" lists is a fault. Rewrite the don'ts as do's wherever possible.
4. **Dial back the shouting.** ALL-CAPS MUST/ALWAYS/NEVER language was
   needed to make older models comply. Current models overtrigger on it:
   aggressive emphasis now causes over-application of rules and rigid
   behaviour at edge cases. "Use this tool when..." now works where
   "CRITICAL: You MUST use this tool" used to be necessary. When reviewing a
   prompt full of capitalised imperatives, that's a dated prompt. Replace
   with a plainly stated rule plus its reason.
5. **Examples are the strongest steering tool.** Three to five well-chosen
   examples (few-shot) beat paragraphs of description for controlling
   format, tone, and structure. Examples must be relevant to the real use
   case, diverse enough to avoid teaching accidental patterns, and wrapped in
   example tags so they can't be confused with instructions. A prompt
   struggling to control output format usually needs an example, not more
   rules.
6. **Structure with tags when the prompt mixes content types.** When a
   prompt contains instructions plus context plus pasted material plus
   examples, wrap each type in its own XML-style tag (instructions, context,
   input, examples). This stops the model treating pasted content as
   commands and vice versa. Simple single-purpose prompts don't need tags;
   complex ones do.
7. **Role sharpens everything.** One sentence of role ("You are a senior
   contracts administrator reviewing quotes for an electrical business")
   focuses tone, vocabulary, and judgement. Every serious prompt should set
   one. This is Lever one of the Magnum 6 Lever Framework, and Anthropic's
   guidance agrees.
8. **Long inputs go on top, the ask goes at the end.** For prompts carrying
   big documents or lots of pasted material: documents first, instructions
   and the question after. Putting the query at the end improves response
   quality by up to 30 percent on long inputs. For document work, asking the
   model to quote the relevant parts before doing the task grounds the answer
   and cuts hallucination.
9. **Guard against invention.** The single most dangerous failure is
   confident fabrication. Every prompt that relies on knowledge the model
   might not have must carry a guard: "If you don't know, say so and ask" or
   "Mark anything uncertain as [NEEDS CONFIRMING], do not guess." Prompts
   that say "do not ask me questions" while also demanding facts the model
   may lack are a critical fault: they force fabrication. When reviewing,
   hunt this combination specifically.
10. **Specify the output exactly.** State the format, length, and structure
    of the answer, and give a "stop after" boundary so the model doesn't pad.
    The format of the prompt itself also steers the output: a prompt written
    in tidy prose gets tidier prose back, a prompt full of bullets gets
    bullets back. Match the prompt's own style to the output wanted.
11. **Smallest effective prompt wins.** The best prompt is the shortest one
    that achieves the goal reliably. Redundant rules, repeated instructions,
    and reassurance sentences aimed at the human reader (not the model) all
    bloat prompts and create contamination risk, where the model echoes them
    into its output. When reviewing: cut anything the model doesn't need, and
    move reader-facing reassurance into the surrounding document.
12. **Number the steps when order matters.** Sequential instructions go in
    numbered lists in the order they happen. Contradictory rules ("don't ask
    questions" then "ask three questions") get resolved arbitrarily by the
    model, so find and kill contradictions on every review.
13. **Explicit action beats implied action.** "Can you suggest improvements"
    gets suggestions. "Make these changes" gets changes. If the prompt wants
    the model to act, it must say act.

## Part two: what makes a skill good now

A skill is loaded on demand, so it lives or dies on two things: whether it
triggers at the right moments, and whether its instructions hold up once
loaded.

1. **The description is the trigger.** Only the skill's name and description
   are always visible to the model; the body loads only after the description
   convinces it to. So the description must state both what the skill does
   and when to use it, in third person, with the trigger phrases a real user
   would say. Skills currently undertrigger, so descriptions should be
   slightly pushy and concrete about their moments. A skill that fires at the
   wrong times or not at all has a description problem before it has anything
   else. This is the first thing to review on any skill.
2. **One skill, one job.** Overlapping skills fire together and produce
   unpredictable results. Every skill should be able to answer in one line:
   when do I fire, and when do I stay out of the way. If two skills overlap,
   the fix is a merge or a sharper boundary in both descriptions, not more
   rules inside either.
3. **Keep the core under 500 lines, push detail into reference files.** The
   skill's main file should be a lean overview that points to deeper
   reference files loaded only when needed (progressive disclosure).
   References one level deep, with a table of contents on long ones. Every
   token in a loaded skill competes with the conversation itself, so only
   include what the model doesn't already know. Challenge every paragraph:
   would a capable model genuinely need this told to it?
4. **State the rule, then the reason.** Same principle as prompts:
   capitalised MUST/NEVER walls make skills rigid and edge-case blind. "Use
   constructor injection, because field injection breaks testability" beats
   "MUST use constructor injection." The reason becomes the rubric for cases
   the skill never anticipated.
5. **Match strictness to fragility.** Fragile procedures (exact sequences
   where one wrong step breaks everything) get tight, scripted steps.
   Judgement work gets principles and freedom. A skill that scripts every
   move strangles the model on tasks needing judgement; a skill that's all
   vibes fails on procedures. Review each section for which kind it is.
6. **No time bombs.** Avoid dates, version numbers, UI paths, and "current"
   claims inside skills unless they carry a stamp and a fallback, because
   they rot silently. If time-sensitive content is unavoidable, date it and
   say what to do when it's stale.
7. **Show the output.** Skills that produce documents or formatted work
   should carry a template or a worked example of the finished thing. One
   good example outperforms a page of format description.
8. **Test against real usage, then iterate.** A skill is not done when
   written; it's done when it has survived real tasks. The working pattern:
   run real jobs, note where the model ignored, misread, or overapplied the
   skill, fix that specific line, repeat. Reviews should ask: what evidence
   is there this skill works, and what job would break it?

## Part three: the review procedure

When handed a prompt or skill to improve, run this in order:

1. **Purpose check.** Can you state in one line what this prompt is supposed
   to produce and for whom? If not, that's fault one.
2. **Six Levers pass.** Role, Context, Constraints, Tone, Format, Output. Name
   which levers are missing, weak, or fighting each other. Most weak prompts
   are missing two or more.
3. **Fault hunt.** Specifically check for: invention risk without a guard,
   contradictory instructions, prohibition-heavy framing, capitalised
   shouting, reader-facing text inside the model's instructions, missing
   output format or stop boundary, buried ask under a wall of context, and
   (for skills) a description that doesn't say when to fire.
4. **Rewrite.** Produce the improved version in full, not notes about it.
   Keep everything that was working. Smallest effective prompt.
5. **Report.** State what changed and why, each change tied to a principle
   above, maximum five points, plainest language.

## Standing rules for anything produced under this file

Australian English. No em dashes. Never the word "solid". Draft-for-approval
pattern on anything that would overwrite a person's existing setup: output
the replacement, the human pastes it themselves.
