/* What's new in the members area. One list, newest first, read by the
   What's new page and the strip on the front page. Add a new entry at the
   top whenever a course, guide or batch of prompts goes live.

   date  YYYY-MM-DD, the day it went live
   kind  short tag: New course, New guide, New prompts, Updated, News
   title what it is, in plain words
   url   path from the site root, no leading slash
   what  one line: what changed
   why   one or two lines: why it matters to a small business owner.
         Lead with the business result, not the feature. No em dashes. */
window.MAGNUM_UPDATES = [
  {
    date: '2026-11-22',
    kind: 'New guide',
    title: 'The new Projects (beta)',
    url: 'new-projects/',
    what: 'Anthropic has rebuilt Projects as one conversation that starts a separate thread for each job. This guide covers what changed, who has it and how to set one up.',
    why: 'On Pro or Max you can now hand a project several jobs at once and let them run while you get on with your day. On any other plan, the projects you already have work exactly as before.'
  },
  {
    date: '2026-11-21',
    kind: 'New guide',
    title: 'Set Claude up to handle your business admin',
    url: 'small-business/',
    what: 'A step-by-step guide to Anthropic\'s free Small Business add-on for Claude: install it, tell it about your business, then run your Monday numbers, chase overdue invoices and turn a call into a quote.',
    why: 'The weekly admin that eats your Monday gets drafted for you, and nothing that touches money or a customer goes out until you approve it. About 20 minutes to set up.'
  },
  {
    date: '2026-11-17',
    kind: 'Updated',
    title: 'Every prompt on the shelf, reviewed',
    url: 'prompts/',
    what: 'All 109 prompts were checked against current best practice and 47 were rewritten.',
    why: 'They now stop the AI inventing prices, dates and results, and they treat a pasted email or contract as something to read, not instructions to follow. That means fewer answers you have to fix before they reach a customer.'
  },
  {
    date: '2026-11-15',
    kind: 'New prompts',
    title: 'Get coached on a call, and build a tracker you can trust',
    url: 'prompts/#coach-my-calls',
    what: 'Two new prompts: one reviews a call you have already had, the other builds a working spreadsheet from a description, with every total checked.',
    why: 'Find the moment a sales call slipped without paying a coach, and get a job or quote tracker built in minutes instead of an afternoon.'
  },
  {
    date: '2026-11-15',
    kind: 'Updated',
    title: 'Effort guide: which model to use',
    url: 'effort/',
    what: 'A new section on which Claude model suits which job.',
    why: 'Use the lighter model for simple, repeat jobs and keep your plan limits for the work that needs the strongest one.'
  },
  {
    date: '2026-11-11',
    kind: 'News',
    title: 'Brisbane AI Summit: the businesses using AI properly are pulling ahead',
    url: 'news/brisbane-ai-summit-2026/',
    what: 'What I saw and heard at the Brisbane AI Summit.',
    why: 'What the businesses getting real results from AI are doing differently, and which of those things a small team can copy.'
  },
  {
    date: '2026-11-01',
    kind: 'New guide',
    title: 'Same Job, Other Tool',
    url: 'same-job/',
    what: 'Everything the courses teach in Claude, mapped to what ChatGPT, Gemini and Copilot call it.',
    why: 'If your business runs on ChatGPT, Gemini or Copilot, you can still follow every course without switching tools.'
  }
];
