'use client';
import { useEffect } from 'react';
import dataDogInitialisation from '@/config/datadogClient';

export function DatadogInit() {
  useEffect(() => {
    dataDogInitialisation();
  }, []);
  return null;
}
