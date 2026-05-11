import { App } from '@capacitor/app';

App.addListener('backButton', ({ canGoBack }) => {
  if (window.location.pathname !== '/') {
    window.history.back();
    return;
  }
  if (canGoBack) {
    window.history.back();
    return;
  }
  App.exitApp();
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (!form.matches('form[action^="/a/email_forms"]')) return;
  event.preventDefault();
  let message = document.querySelector('.local-form-message');
  if (!message) {
    message = document.createElement('div');
    message.className = 'local-form-message';
    message.style.cssText = 'margin:16px auto 0;padding:14px 18px;max-width:520px;background:#fff;color:#333;text-align:center;font-weight:700;';
    form.append(message);
  }
  message.textContent = 'Thanks for contacting FastRides. This local clone captured the form submission in the browser.';
  form.reset();
});
