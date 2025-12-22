/**
 * Analytics utility for Google Tag Manager dataLayer integration
 *
 * This module provides type-safe functions for pushing events to the dataLayer.
 * Events pushed here will be consumed by GTM and forwarded to GA4, Meta Pixel, etc.
 */

// Event types for better type safety
type BaseEvent = {
  event: string;
  [key: string]: unknown;
};

type FormStartEvent = {
  event: 'form_start';
  form_name: string;
};

type FormSubmitEvent = {
  event: 'form_submit';
  form_name: string;
  phone_region?: string;
  has_location?: boolean;
};

type InstagramSearchEvent = {
  event: 'instagram_search';
  username: string;
};

type InstagramProfileFoundEvent = {
  event: 'instagram_profile_found';
  username: string;
  followers: number;
  following: number;
  posts: number;
  is_verified: boolean;
};

type InstagramProfileErrorEvent = {
  event: 'instagram_profile_error';
  username: string;
};

type ProfileConfirmEvent = {
  event: 'profile_confirm';
  username: string;
  followers: number;
  posts: number;
};

type CTAClickEvent = {
  event: 'cta_click';
  utm_content: string;
  has_user_data: boolean;
};

type PageViewEvent = {
  event: 'page_view';
  page_path: string;
  page_title: string;
};

type DataLayerEvent =
  | BaseEvent
  | FormStartEvent
  | FormSubmitEvent
  | InstagramSearchEvent
  | InstagramProfileFoundEvent
  | InstagramProfileErrorEvent
  | ProfileConfirmEvent
  | CTAClickEvent
  | PageViewEvent;

/**
 * Push an event to the dataLayer
 * @param event - The event object to push
 */
export function pushEvent(event: DataLayerEvent): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event);
  }
}

/**
 * Track page view event
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
  pushEvent({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Track when user starts filling a form
 */
export function trackFormStart(formName: string): void {
  pushEvent({
    event: 'form_start',
    form_name: formName,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(
  formName: string,
  options?: { phoneRegion?: string; hasLocation?: boolean }
): void {
  pushEvent({
    event: 'form_submit',
    form_name: formName,
    phone_region: options?.phoneRegion,
    has_location: options?.hasLocation,
  });
}

/**
 * Track Instagram profile search
 */
export function trackInstagramSearch(username: string): void {
  pushEvent({
    event: 'instagram_search',
    username: username.replace('@', ''),
  });
}

/**
 * Track when Instagram profile is found successfully
 */
export function trackInstagramProfileFound(data: {
  username: string;
  followers: number;
  following: number;
  posts: number;
  isVerified: boolean;
}): void {
  pushEvent({
    event: 'instagram_profile_found',
    username: data.username,
    followers: data.followers,
    following: data.following,
    posts: data.posts,
    is_verified: data.isVerified,
  });
}

/**
 * Track when Instagram profile search fails
 */
export function trackInstagramProfileError(username: string): void {
  pushEvent({
    event: 'instagram_profile_error',
    username: username.replace('@', ''),
  });
}

/**
 * Track when user confirms their Instagram profile
 */
export function trackProfileConfirm(data: {
  username: string;
  followers: number;
  posts: number;
}): void {
  pushEvent({
    event: 'profile_confirm',
    username: data.username,
    followers: data.followers,
    posts: data.posts,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(
  utmContent: string,
  hasUserData: boolean
): void {
  pushEvent({
    event: 'cta_click',
    utm_content: utmContent,
    has_user_data: hasUserData,
  });
}
