/**
 * Type declarations for Google Tag Manager dataLayer
 */

interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

interface Window {
  dataLayer: DataLayerEvent[];
  gtag?: (...args: unknown[]) => void;
}

