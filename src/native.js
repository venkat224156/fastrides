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
