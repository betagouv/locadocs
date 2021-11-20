/* eslint-disable @typescript-eslint/naming-convention */
import { GOOGLE_TAG } from '@constants/google';

declare global {
  interface Window {
    gtag: any;
  }
}

// log the pageview with their URL
export const googleTrackPageView = (url: string): void => {
  window.gtag('config', GOOGLE_TAG, {
    page_path: url,
  });
};

// log specific events happening.
export const googleTrackEvent = ({
  action,
  params,
}: {
  action: any;
  params: any;
}): void => {
  window.gtag('event', action, params);
};
