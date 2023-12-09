import type { AppProps } from 'next/app';
import Script from 'next/script';

import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;