'use client';

import { createContext, useContext } from 'react';
import type { Variant } from './page';

// Base Typeform URL por variant.
// sofia-prova e sofia-rapida usam o mesmo formulário da variant sofia
// até que URLs específicas sejam definidas.
const FORM_URLS: Record<Variant, string> = {
  default:       'https://hawki.pro.typeform.com/to/fPcFisqB',
  sofia:         'https://hawki.typeform.com/to/MBlCDQQC',
  'sofia-pain':  'https://hawki.typeform.com/to/OGJNEnn5',
  'sofia-prova': 'https://hawki.typeform.com/to/MBlCDQQC',
  'sofia-rapida':'https://hawki.typeform.com/to/MBlCDQQC',
};

interface FormContextValue {
  formBaseUrl: string;
}

export const FormContext = createContext<FormContextValue>({
  formBaseUrl: FORM_URLS.default,
});

export function useFormContext() {
  return useContext(FormContext);
}

export function getFormUrl(variant: Variant): string {
  return FORM_URLS[variant];
}
