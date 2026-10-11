/* The tools picker on ai-tools/, 11 Oct 2026.
   Three questions: the jobs you want help with, what the business already
   pays for, and how you feel about spending. One pick per job ticked.

   Kept apart from the page so tools/check-ai-tools.js can run every
   combination in node. The page loads it as a plain script.

   Two rules the test holds it to:
   - A pick never says "you already pay for it" unless that box was ticked.
   - On "free only", no pick is a paid plan.
   No price is ever added up here. Every figure is a hand-written string,
   so a price change is made in this file and on the page, nowhere else. */

(function (root) {
  'use strict';

  var JOBS = [
    { k: 'write',  label: 'Writing: emails, quotes, proposals',            title: 'Writing' },
    { k: 'slides', label: 'Presentations and proposal decks',               title: 'Presentations' },
    { k: 'talk',   label: 'Talking instead of typing',                      title: 'Talking instead of typing' },
    { k: 'meet',   label: 'Notes from meetings and calls',                  title: 'Meeting notes' },
    { k: 'img',    label: 'Pictures for posts and promos',                  title: 'Pictures' },
    { k: 'vid',    label: 'Short videos',                                   title: 'Short videos' },
    { k: 'social', label: 'Scheduling social posts',                        title: 'Social posts' },
    { k: 'auto',   label: 'Jobs that run on their own between your apps',   title: 'Automation' },
    { k: 'whole',  label: 'Handing off a whole job, like research or a website', title: 'A whole job' }
  ];

  var PAYS = [
    { k: 'gws',     label: 'Google Workspace (Gmail on your own domain)' },
    { k: 'm365',    label: 'Microsoft 365 (Outlook, Teams)' },
    { k: 'claude',  label: 'Claude' },
    { k: 'chatgpt', label: 'ChatGPT' },
    { k: 'canva',   label: 'Canva Pro' },
    { k: 'zoom',    label: 'A paid Zoom plan' },
    { k: 'none',    label: 'None of these', only: true }
  ];

  var BUDGETS = [
    { k: 'free', label: 'Free only, for now',                       recap: 'free tools only' },
    { k: 'lean', label: 'A few subscriptions, if they earn their keep', recap: 'room for a few subscriptions' },
    { k: 'best', label: 'Whatever does each job best',              recap: 'the best tool for each job' }
  ];

  /* tag: 'have' = already paying, 'free' = costs nothing, 'paid' = a new bill.
     sub names the subscription, so the summary can count new bills without
     counting the same plan twice. */
  function pick(tool, tag, why, price, link, extra) {
    var p = { tool: tool, tag: tag, why: why, price: price, link: link };
    if (extra) {
      if (extra.also) { p.also = extra.also; }
      if (extra.sub) { p.sub = extra.sub; }
    }
    return p;
  }

  var GAI_PRO = 'Google AI Pro';
  var GAI_PLUS = 'Google AI Plus';

  var RULES = {

    write: function (P, B) {
      if (P.claude) {
        return pick('Claude', 'have',
          'You already pay for it, and it is the strongest of the three at writing that sounds like a person.',
          'Already in your plan', '#t-claude');
      }
      if (P.chatgpt) {
        return pick('ChatGPT', 'have',
          'You already pay for it. Use it before adding another subscription.',
          'Already in your plan', '#t-chatgpt',
          B === 'best' ? { also: 'Claude Pro is the step up for long documents in your own voice, at A$34 a month.' } : null);
      }
      if (B === 'free') {
        if (P.gws) {
          return pick('Gemini in your Workspace', 'have',
            'It comes with Workspace Business Standard and higher. On Business Starter you get a thin version.',
            'Already in your plan', '#t-gemini');
        }
        if (P.m365) {
          return pick('Copilot Chat', 'have',
            'It comes free with Microsoft 365 business plans, with business-grade data protection.',
            'Already in your plan', '#t-copilot');
        }
        return pick('Claude, free plan', 'free',
          'Good enough for light work. On a real working day you will hit its limit.',
          'Free', '#t-claude',
          { also: "ChatGPT's free version runs on GPT-6 now, with ads, if you want a second opinion." });
      }
      var also = null;
      if (P.gws) { also = 'Switch on the Gemini already in your Workspace first. On Business Standard and higher it may be enough.'; }
      else if (P.m365) { also = 'Try the free Copilot Chat in your Microsoft 365 first. It may be enough for quick questions.'; }
      return pick('Claude Pro', 'paid',
        'The best of the three for writing in your own voice and for long documents.',
        'A$34 a month, including GST', '#t-claude',
        { also: also, sub: 'Claude Pro' });
    },

    slides: function (P, B) {
      if (P.canva && B !== 'best') {
        return pick('Canva', 'have',
          'You already pay for Canva Pro and your brand kit is in there. Use it before adding a deck tool.',
          'Already in your plan', '#t-canva',
          P.claude ? { also: 'Claude Slides is in your Claude plan too, for quick internal decks.' } : null);
      }
      if (B === 'best') {
        return pick('Gamma', 'paid',
          'The quickest route from rough notes to a deck that looks designed, and Claude can brief it.',
          'Plus is US$9 a month', '#t-gamma',
          { also: 'Start in Claude Slides for internal decks. It is free on every Claude plan.', sub: 'Gamma' });
      }
      return pick('Claude Slides', P.claude ? 'have' : 'free',
        P.claude
          ? 'It is in your Claude plan already. It builds an editable deck you can download as PowerPoint or PDF.'
          : 'Free on every Claude plan, including the free one, since 8 October.',
        P.claude ? 'Already in your plan' : 'Free', '#t-claude-slides',
        B === 'lean' ? { also: 'Gamma is the step up when the deck has to look designed, at US$9 a month.' } : null);
    },

    talk: function (P, B, J) {
      if (B === 'free') {
        return pick('Fireflies Talk', 'free',
          'Free, with no word limit, on Mac and Windows. New on 29 September.',
          'Free', '#t-fireflies-talk',
          { also: 'On your phone, the microphone on the keyboard does short messages well enough.' });
      }
      return pick('Wispr Flow', 'free',
        'Start on the free plan. If you hit the weekly limit, you are using it enough to pay for it.',
        'Free for 2,000 words a week, then US$12 a month', '#t-wispr',
        J.meet ? { also: 'If you end up on Fireflies for meetings, try its free dictation before paying for Wispr.' } : null);
    },

    meet: function (P, B) {
      var p;
      if (P.gws) {
        p = pick('Gemini in Google Meet', 'have',
          'It takes the notes for you on Workspace Business Standard and higher, not Starter. Switch it on in your admin settings.',
          'Already in your plan', '#t-meet-builtin');
      } else if (P.zoom) {
        p = pick('Zoom meeting summaries', 'have',
          'Included on paid Zoom plans. It covers Zoom calls only.',
          'Already in your plan', '#t-meet-builtin');
      } else if (B === 'free') {
        p = pick('Fireflies, free plan', 'free',
          'Fine for a trial month. Storage is capped and you cannot export.',
          'Free', '#t-fireflies');
      } else {
        p = pick('Fireflies Pro', 'paid',
          P.m365
            ? 'Teams recap needs Teams Premium or Copilot on top of Microsoft 365, which costs more than this. Fireflies works on every platform and its notes reach Claude.'
            : 'It works on Zoom, Meet and Teams, and its notes reach Claude through the official connector.',
          'US$10 a month on annual billing', '#t-fireflies',
          { sub: 'Fireflies Pro' });
      }
      if (p.tag === 'have' && B === 'best') {
        p.also = 'If your calls run across Zoom, Meet and Teams, Fireflies Pro covers all three for US$10 a month.';
      }
      p.note = 'Tell people the call is being recorded. Every time, whatever tool.';
      return p;
    },

    img: function (P, B, J) {
      if (P.chatgpt) {
        return pick('ChatGPT Images', 'have',
          'It is in your ChatGPT plan, and it is the best of these at words on a picture.',
          'Already in your plan', '#t-chatgpt-images');
      }
      if (P.canva && B !== 'best') {
        return pick("Canva's AI images", 'have',
          'Already in your Canva Pro plan, and good enough for the occasional picture.',
          'Already in your plan', '#t-canva');
      }
      if (B === 'free') {
        return pick('ChatGPT, free plan', 'free',
          'A few pictures a day, and the best of these at words on a picture.',
          'Free', '#t-chatgpt-images');
      }
      if (J.vid) {
        return pick('Gemini, on ' + GAI_PRO, 'paid',
          'Covers your pictures and your videos on one bill. Best for realistic photos.',
          'About A$33 a month', '#t-gemini-images',
          { sub: GAI_PRO });
      }
      return pick('Gemini, on ' + GAI_PLUS, 'paid',
        'The best value for realistic photos.',
        'A$7.99 a month', '#t-gemini-images',
        { also: 'If most of your pictures carry prices or dates, ChatGPT is better at text on a picture.', sub: GAI_PLUS });
    },

    vid: function (P, B) {
      if (B === 'free') {
        return pick('Your phone', 'free',
          "Gemini's video needs a paid Google plan, and free allowances elsewhere are too small to post from. Film it.",
          'Free', '#t-gemini-video',
          P.chatgpt ? { also: 'ChatGPT makes no video now. OpenAI closed Sora in April.' } : null);
      }
      if (P.canva && B === 'lean') {
        return pick("Canva's AI video", 'have',
          'Already in your Canva Pro plan, for the odd short clip. It shares one monthly AI allowance with everything else in Canva.',
          'Already in your plan', '#t-canva');
      }
      var also = B === 'best'
        ? 'Add Higgsfield only if video or ads are a weekly job, and pay monthly.'
        : (P.chatgpt ? 'ChatGPT makes no video now. OpenAI closed Sora in April.' : null);
      return pick('Gemini video, on ' + GAI_PRO, 'paid',
        'Clips with sound, about eight to ten seconds each. Enough for a Reel or a story.',
        'About A$33 a month', '#t-gemini-video',
        { also: also, sub: GAI_PRO });
    },

    social: function (P, B) {
      return pick('Buffer', 'free',
        'One queue for every account. Claude drafts into it and you check each post on your phone.',
        B === 'free' ? 'Free for three channels' : 'Free for three channels, then US$6 a channel a month',
        '#t-buffer',
        { also: 'If you only post to Facebook and Instagram, Meta Business Suite does it free.' });
    },

    auto: function (P, B) {
      var also = P.claude
        ? 'If the job runs on a timetable and ends in a draft you check, a Claude scheduled task may do it without Zapier.'
        : null;
      if (B === 'free') {
        return pick('Zapier, free plan', 'free',
          'Fine for one simple job, like a new form entry going into a spreadsheet. Two steps only.',
          'Free for 100 tasks a month', '#t-zapier', { also: also });
      }
      return pick('Zapier Professional', 'paid',
        'The easiest to learn on your own, and it builds the first automation from a sentence.',
        'From US$19.99 a month on annual billing', '#t-zapier',
        { also: also, sub: 'Zapier Professional' });
    },

    whole: function (P, B) {
      return pick('Manus', 'free',
        'Start on the free plan. Pay only once a job has proved itself, and keep copies of anything important outside it.',
        B === 'free' ? 'Free daily credits' : 'Free daily credits, then from US$20 a month',
        '#t-manus');
    }
  };

  /* jobs: array of job keys. pays: array of pay keys. budget: a budget key. */
  function recommend(jobs, pays, budget) {
    var P = {}, J = {}, i;
    for (i = 0; i < pays.length; i++) { if (pays[i] !== 'none') { P[pays[i]] = true; } }
    for (i = 0; i < jobs.length; i++) { J[jobs[i]] = true; }

    var rows = [], subs = [];
    for (i = 0; i < JOBS.length; i++) {
      var k = JOBS[i].k;
      if (!J[k]) { continue; }
      var p = RULES[k](P, budget, J);
      p.job = JOBS[i].title;
      p.key = k;
      rows.push(p);
      if (p.tag === 'paid' && p.sub && subs.indexOf(p.sub) === -1) { subs.push(p.sub); }
    }
    return { rows: rows, subs: subs };
  }

  var api = { JOBS: JOBS, PAYS: PAYS, BUDGETS: BUDGETS, recommend: recommend };
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  else { root.MagnumPicker = api; }
})(this);
