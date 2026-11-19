/*
 * The newsletter sign-up block. One file, used by every Field Note, the
 * Field Note archive and the template, so the wording and the look change
 * in one place.
 *
 * A page shows it with:
 *   <div data-subscribe></div>
 *   <script src="../assets/subscribe.js"></script>
 *
 * It posts to the MailerLite form "Field Note sign-up", which adds the
 * person to the group "Magnum AI newsletter" and sends MailerLite's own
 * "confirm your email" message (double opt-in). Nobody is on the list until
 * they click that link. No key or secret is needed for this, and none is in
 * this file.
 *
 * The form has MailerLite's "I'm not a robot" check switched on, so Google's
 * script is loaded, but only once someone clicks into the form.
 */
(function () {
  var ENDPOINT = 'https://assets.mailerlite.com/jsonp/2802484/forms/204433808549742055/subscribe';
  var SITEKEY = '6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD';

  var holder = document.querySelector('[data-subscribe]');
  if (!holder || holder.getAttribute('data-ready')) return;
  holder.setAttribute('data-ready', '1');
  holder.style.width = '100%';

  var css = ''
    + '.sub{width:100%;max-width:680px;margin:18px auto 0;background:#FBFBF9;border:2px solid #1E1B17;'
    + 'padding:24px 28px 22px;font-family:"IBM Plex Sans",Arial,system-ui,sans-serif;color:#1E1B17;text-align:left}'
    + '.sub *{box-sizing:border-box}'
    + '.sub-eyebrow{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11px;text-transform:uppercase;'
    + 'letter-spacing:.16em;color:#C63A2A;margin:0 0 8px}'
    + '.sub h2{font-family:"Oswald","Arial Narrow",sans-serif;font-weight:700;text-transform:uppercase;'
    + 'font-size:26px;line-height:1.05;color:#1E1B17;margin:0 0 10px;letter-spacing:0}'
    + '.sub p{font-size:15px;line-height:1.5;margin:0 0 16px;color:#1E1B17;max-width:none}'
    + '.sub-row{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end}'
    + '.sub-field{flex:1 1 180px;min-width:0}'
    + '.sub label{display:block;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11px;'
    + 'text-transform:uppercase;letter-spacing:.14em;color:#45433E;margin:0 0 6px}'
    + '.sub input[type=text],.sub input[type=email]{width:100%;font:inherit;font-size:16px;color:#1E1B17;'
    + 'background:#FFFFFF;border:2px solid #1E1B17;border-radius:0;padding:10px 12px;-webkit-appearance:none;appearance:none}'
    + '.sub input:focus{outline:3px solid #FBE1D8;outline-offset:0;border-color:#C63A2A}'
    + '.sub-btn{flex:0 0 auto;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;font-weight:500;'
    + 'text-transform:uppercase;letter-spacing:.14em;color:#FFFFFF;background:#C63A2A;border:2px solid #1E1B17;'
    + 'border-radius:0;padding:13px 20px;cursor:pointer}'
    + '.sub-btn:hover{background:#1E1B17}'
    + '.sub-btn[disabled]{opacity:.6;cursor:default}'
    + '.sub-robot{margin-top:14px;min-height:0}'
    + '.sub-fine{font-size:13px;line-height:1.45;color:#45433E;margin:14px 0 0}'
    + '.sub-msg{font-size:15px;line-height:1.5;margin:14px 0 0;padding:12px 14px;border:2px solid #1E1B17}'
    + '.sub-msg.ok{background:#FFFFFF}'
    + '.sub-msg.bad{background:#FBE1D8}'
    + '.sub-msg:empty{display:none}'
    + '@media(max-width:560px){.sub{padding:20px 18px 18px}.sub-btn{width:100%}}'
    + '@media print{.sub{display:none}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  holder.innerHTML = ''
    + '<section class="sub" aria-labelledby="sub-h">'
    + '<div class="sub-eyebrow">By email</div>'
    + '<h2 id="sub-h">Get these by email</h2>'
    + '<p>One Field Note midweek and This Week in AI on the weekend, sent to your inbox. Free.</p>'
    + '<form novalidate>'
    + '<div class="sub-row">'
    + '<div class="sub-field"><label for="sub-name">First name</label>'
    + '<input id="sub-name" name="fields[name]" type="text" autocomplete="given-name"></div>'
    + '<div class="sub-field"><label for="sub-email">Email address</label>'
    + '<input id="sub-email" name="fields[email]" type="email" autocomplete="email" required></div>'
    + '<button class="sub-btn" type="submit">Subscribe</button>'
    + '</div>'
    + '<div class="sub-robot" id="sub-robot"></div>'
    + '<div class="sub-msg" id="sub-msg" role="status" aria-live="polite"></div>'
    + '<div class="sub-fine">You will get one email asking you to confirm. Every issue has an unsubscribe link. Sent by Magnum AI.</div>'
    + '</form>'
    + '</section>';

  var form = holder.querySelector('form');
  var msg = holder.querySelector('#sub-msg');
  var btn = holder.querySelector('.sub-btn');
  var email = holder.querySelector('#sub-email');
  var robotBox = holder.querySelector('#sub-robot');
  var widgetId = null;
  var robotLoading = false;

  function say(text, kind) {
    msg.className = 'sub-msg ' + (kind || '');
    msg.textContent = text;
  }

  // Google's check is only fetched once the reader shows interest.
  function loadRobot() {
    if (robotLoading) return;
    robotLoading = true;
    window.__subRobotReady = function () {
      widgetId = window.grecaptcha.render(robotBox, { sitekey: SITEKEY });
    };
    var s = document.createElement('script');
    s.src = 'https://www.google.com/recaptcha/api.js?onload=__subRobotReady&render=explicit';
    s.async = true;
    document.head.appendChild(s);
  }
  form.addEventListener('focusin', loadRobot);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var address = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      say('That email address does not look right. Check it and try again.', 'bad');
      email.focus();
      return;
    }
    loadRobot();
    var token = (widgetId !== null && window.grecaptcha) ? window.grecaptcha.getResponse(widgetId) : '';
    if (!token) {
      say('Tick "I\'m not a robot" above, then press Subscribe again.', 'bad');
      return;
    }

    var data = new FormData(form);
    data.set('fields[email]', address);
    data.append('ml-submit', '1');
    data.append('anticsrf', 'true');
    data.set('g-recaptcha-response', token);

    btn.disabled = true;
    btn.textContent = 'Sending';
    fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (out) {
        if (out && out.success) {
          form.querySelector('.sub-row').style.display = 'none';
          robotBox.style.display = 'none';
          say('Nearly done. Check your inbox for an email from Magnum AI and click the link in it to confirm.', 'ok');
        } else {
          throw new Error('refused');
        }
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
        if (window.grecaptcha && widgetId !== null) window.grecaptcha.reset(widgetId);
        say('That did not go through. Try again, or email info@magnumai.com.au and we will add you.', 'bad');
      });
  });
})();
