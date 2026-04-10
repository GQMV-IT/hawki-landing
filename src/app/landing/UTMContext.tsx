'use client';

import { createContext, useContext } from 'react';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export const UTMContext = createContext<UTMParams>({});

export function useUTMContext(): UTMParams {
  return useContext(UTMContext);
}
