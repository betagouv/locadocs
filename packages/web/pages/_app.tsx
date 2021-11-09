/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@locadocs/design-system/components/GlobalStyles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { track } from '@utils/tracker';

declare const window: any;

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    track({ actionName: 'pageView' });

    const handleRouteChange = (): void => {
      if (window) {
        track({ actionName: 'pageView' });
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
