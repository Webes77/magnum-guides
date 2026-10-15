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
    { k: 'write',  label: 'Writing: emails, quotes, proposals',            title: 'Your main AI' },
    { k: 'email',  label: 'Getting on top of your inbox',                   title: 'Your inbox' },
    { k: 'phone',  label: 'Answering the phone when you can\'t',            title: 'The phone' },
    { k: 'slides', label: 'Presentations and proposal decks',               title: 'Decks and proposals' },
    { k: 'talk',   label: 'Talking instead of typing',                      title: 'Talking, not typing' },
    { k: 'meet',   label: 'Notes from meetings and calls',                  title: 'Meeting notes' },
    { k: 'docs',   label: 'Making sense of a pile of documents',            title: 'Your own documents' },
    { k: 'img',    label: 'Pictures for posts and promos',                  title: 'Pictures' },
    { k: 'vid',    label: 'Short videos',                                   title: 'Short videos' },
    { k: 'social', label: 'Scheduling social posts',                        title: 'Social posts' },
    { k: 'web',    label: 'Building or updating your website',              title: 'Your website' },
    { k: 'auto',   label: 'Jobs that run on their own between your apps',   title: 'Automation' },
    { k: 'whole',  label: 'Handing off a whole job, start to finish',       title: 'A whole job' }
  ];

  var PAYS = [
    { k: 'gws',     label: 'Google Workspace (Gmail on your own domain)' },
    { k: 'm365',    label: 'Microsoft 365 (Outlook, Teams)' },
    { k: 'claude',  label: 'Claude' },
    { k: 'chatgpt', label: 'ChatGPT' },
    { k: 'canva',   label: 'Canva Pro' },
    { k: 'zoom',    label: 'A paid Zoom plan' },
    { k: 'servicem8', label: 'ServiceM8' },
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

    /* Claude and ChatGPT are equals here. Neither is the default: a reader
       who pays for neither gets both named, unless they also want pictures,
       where ChatGPT does both jobs from one bill and wins on that alone. */
    write: function (P, B, J) {
      if (P.claude && P.chatgpt) {
        return pick('Claude or ChatGPT', 'have',
          'You pay for both. Keep the one you open most, and cancel the other until you need it again.',
          'Already in your plan', '#t-claude');
      }
      if (P.claude) {
        return pick('Claude', 'have',
          'You already pay for it. Learn it properly before adding another.',
          'Already in your plan', '#t-claude');
      }
      if (P.chatgpt) {
        return pick('ChatGPT', 'have',
          'You already pay for it. Learn it properly before adding another.',
          'Already in your plan', '#t-chatgpt');
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
        return pick('Claude or ChatGPT, free plans', 'free',
          "Both are good enough for light work. ChatGPT's free plan runs on GPT-6 now, with ads.",
          'Free', '#t-chatgpt');
      }
      var also = null;
      if (P.gws) { also = 'Switch on the Gemini already in your Workspace first. On Business Standard and higher it may be enough.'; }
      else if (P.m365) { also = 'Try the free Copilot Chat in your Microsoft 365 first. It may be enough for quick questions.'; }
      if (J.img) {
        return pick('ChatGPT Plus', 'paid',
          'You want pictures as well as words, and ChatGPT does both from one app.',
          'US$20 a month', '#t-chatgpt',
          { also: also, sub: 'ChatGPT Plus' });
      }
      return pick('Claude or ChatGPT', 'paid',
        'Pick one and learn it properly. Claude if your week is writing and long documents. ChatGPT if you want words, pictures and voice in one app.',
        'A$34 or US$20 a month', '#t-claude',
        { also: also, sub: 'Claude or ChatGPT' });
    },

    /* The AI already inside the inbox comes first. A Claude subscription
       reaches the inbox through its connectors. Fyxer only on "best". */
    email: function (P, B) {
      var fy = 'If email eats an hour a day, Fyxer leaves drafted replies waiting each morning, from US$22.50 a month.';
      var p;
      if (P.gws) {
        p = pick('Gemini in Gmail', 'have',
          'It drafts replies from a few bullet points and summarises long threads. Thin on Business Starter.',
          'Already in your plan', '#t-inbox-ai');
      } else if (P.m365) {
        p = pick('Copilot Chat in Outlook', 'have',
          'Free with Microsoft 365 business plans. Ask it about your inbox and have it summarise a thread.',
          'Already in your plan', '#t-inbox-ai');
      } else if (P.claude) {
        p = pick('Claude, with your email connected', 'have',
          'Connect Gmail or Outlook and ask it to sort the morning and draft the replies. You press send.',
          'Already in your plan', '#t-inbox-ai');
      } else if (B === 'best') {
        return pick('Fyxer', 'paid',
          'It sits inside Gmail or Outlook, sorts the mail and leaves replies drafted in your voice. It never sends.',
          'From US$22.50 a month on annual billing', '#t-fyxer', { sub: 'Fyxer' });
      } else {
        return pick('Your main AI, with the thread pasted in', 'free',
          'Paste the email in, say what you want to say back, and ask for the reply. Works with any inbox.',
          'Free', '#t-inbox-ai');
      }
      if (B === 'best') { p.also = fy; }
      return p;
    },

    /* No free tool answers a phone well. ServiceM8 users get the one built
       into the software they already run. */
    phone: function (P, B) {
      var p;
      if (B === 'free') {
        p = pick('Your voicemail, for now', 'free',
          'Nothing free does this well. When one missed job a month costs more than A$99, trial Hey Jodie for a week.',
          'Free', '#t-heyjodie');
      } else if (P.servicem8) {
        p = pick('ServiceM8 Phone Agent', 'paid',
          'You already run ServiceM8, so every call lands on the job card. Switch it on before buying anything else.',
          'A$49 a month on Connect Plus', '#t-servicem8', { sub: 'ServiceM8 Connect Plus' });
      } else {
        p = pick('Hey Jodie', 'paid',
          'Divert missed calls to it for a week on the free trial. Ring it five times yourself before a customer does.',
          'About A$99 a month, no setup fee', '#t-heyjodie', { sub: 'Hey Jodie' });
      }
      p.note = 'Have it say the call is recorded in its first sentence.';
      return p;
    },

    docs: function (P) {
      return pick('Gemini Notebook', 'free',
        'Upload the documents and it answers only from them, with the page each answer came from.',
        'Free with a Google account', '#t-notebook',
        (P.claude || P.chatgpt) ? { also: 'For research across the web, use the deep research mode in the plan you already pay for.' } : null);
    },

    web: function (P, B) {
      if (B === 'free') {
        return pick('Wix, free plan', 'free',
          'Claude and ChatGPT can both build and edit a Wix site directly. Move to a paid plan when you want your own domain.',
          'Free on a Wix address, with Wix ads', '#t-wix');
      }
      return pick('Wix', 'paid',
        'The one builder Claude and ChatGPT can both work on directly. Bookings and a shop are built in.',
        'From about A$16 a month on annual billing', '#t-wix', { sub: 'Wix' });
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
      var fal = 'For every other model, Fal.ai charges per picture with no subscription.';
      if (J.write && B !== 'free' && !P.claude && !P.chatgpt) {
        return pick('ChatGPT Images', 'paid',
          'Comes with the ChatGPT Plus picked for your writing. The best of the lot at words on a picture.',
          'Included in ChatGPT Plus', '#t-chatgpt-images',
          B === 'best' ? { also: fal, sub: 'ChatGPT Plus' } : { sub: 'ChatGPT Plus' });
      }
      if (P.chatgpt) {
        return pick('ChatGPT Images', 'have',
          'It is in your ChatGPT plan, and it is the best of these at words on a picture.',
          'Already in your plan', '#t-chatgpt-images',
          B === 'best' ? { also: fal } : null);
      }
      if (P.canva && B !== 'best') {
        return pick("Canva's AI images", 'have',
          'Already in your Canva Pro plan, and good enough for the occasional picture.',
          'Already in your plan', '#t-canva');
      }
      if (B === 'free') {
        return pick('ChatGPT, free plan', 'free',
          'A few pictures a day, and the best of these at words on a picture.',
          'Free', '#t-chatgpt-images',
          { also: "Fal.ai's Sandbox gives a few free goes a day on other models, with no account." });
      }
      if (B === 'best') {
        return pick('Fal.ai', 'paid',
          'Every major picture model in one place, paid per picture. You pick the right model for each job.',
          'Pay as you go, about US$0.04 a picture', '#t-fal',
          { also: 'If you would rather one simple app, Gemini on Google AI Plus is A$7.99 a month.', sub: 'Fal.ai credit' });
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
      var sora = 'ChatGPT makes no video now. OpenAI closed Sora in April.';
      if (B === 'free') {
        return pick('Your phone', 'free',
          "Gemini's video needs a paid Google plan. Film it yourself, and experiment with AI video for free on the side.",
          'Free', '#t-gemini-video',
          { also: 'Fal.ai gives a few free AI clips a day on one model, if you want to see what it can do.' });
      }
      if (P.canva && B === 'lean') {
        return pick("Canva's AI video", 'have',
          'Already in your Canva Pro plan, for the odd short clip. It shares one monthly AI allowance with everything else in Canva.',
          'Already in your plan', '#t-canva',
          P.chatgpt ? { also: sora } : null);
      }
      if (B === 'best') {
        return pick('Fal.ai', 'paid',
          "Every top video model, Google's Omni, Seedance and Kling among them, paid per clip.",
          'About US$0.80 to US$3 for an eight-second clip', '#t-fal',
          { also: 'Higgsfield is the friendlier front door if video or ads are a weekly job. Pay it monthly.', sub: 'Fal.ai credit' });
      }
      return pick('Gemini video, on ' + GAI_PRO, 'paid',
        'Clips with sound, about eight to ten seconds each. Enough for a Reel or a story.',
        'About A$33 a month', '#t-gemini-video',
        { also: P.chatgpt ? sora : null, sub: GAI_PRO });
    },

    social: function (P, B) {
      return pick('Buffer', 'free',
        'One queue for every account. Your AI drafts into it and you check each post on your phone.',
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
