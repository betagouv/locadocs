/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@locadocs/design-system/components/GlobalStyles';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
