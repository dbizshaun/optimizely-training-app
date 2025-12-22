'use client';

import React from 'react';
import { GoogleTagManager as NxtGoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/google-analytics';
import env from '@/config/environment';

const GTM_ID = env.analytics.google.tagManagerId;

function GoogleTagManager() {
  const pathname = usePathname();

  React.useEffect(() => {
    trackPageView();
  }, [pathname]);

  if (!GTM_ID) return null;
  return <NxtGoogleTagManager gtmId={GTM_ID} />;
}

export default GoogleTagManager;
