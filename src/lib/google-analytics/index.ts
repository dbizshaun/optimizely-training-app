import logEvent from './logEvent';

function trackPageView() {
  logEvent({ event: 'page_view' });
}

function trackCTA(config: { label: string }, additionalInfo?: Record<string, string>) {
  logEvent({ event: 'cta_clicked', ...config, ...additionalInfo });
}
function trackFormEvents(
  config: { status: 'started' | 'success' | 'failed'; type: string },
  additionalInfo?: Record<string, string>
) {
  logEvent({ event: 'form', ...config, ...additionalInfo });
}

export { trackPageView, trackCTA, trackFormEvents };
