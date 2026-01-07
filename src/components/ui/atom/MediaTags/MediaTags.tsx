'use client';

import { useIsDesktop, useIsMobile } from '@/hooks/mediaQuery';

type Props = { children: React.ReactNode };

export function Desktop(props: Props) {
  if (useIsDesktop()) return props.children;
  return null;
}

export function Mobile(props: Props) {
  if (useIsMobile()) return props.children;
  return null;
}
