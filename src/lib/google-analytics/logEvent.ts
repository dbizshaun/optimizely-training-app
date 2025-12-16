'use client';

import { sendGTMEvent } from '@next/third-parties/google';

const logEvent = (eventParams: Record<string, string | number>) => {
  const page = window.location.href;
  sendGTMEvent({ ...eventParams, page });
};
export default logEvent;
