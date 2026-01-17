export const loadMetaPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;

  // Prevent double init
  if (window.fbq) return;

  const w = window as any;
  const d = document;

  w.fbq = function (...args: any[]) {
    if (w.fbq.callMethod) {
      w.fbq.callMethod.apply(w.fbq, args);
    } else {
      w.fbq.queue.push(args);
    }
  };

  if (!w._fbq) w._fbq = w.fbq;

  w.fbq.push = w.fbq;
  w.fbq.loaded = true;
  w.fbq.version = '2.0';
  w.fbq.queue = [];

  const script = d.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';

  const firstScript = d.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  w.fbq('init', pixelId);
};
