/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@locadocs/design-system/components/GlobalStyles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare const window: any;

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window && window._paq) {
        window._paq.push(['setCustomUrl', url]);
        window._paq.push(['setDocumentTitle', document.title]);
        window._paq.push(['trackPageView']);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
