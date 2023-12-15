import type { AppProps } from 'next/app';

import "../styles/styles.scss";
import { StyledCursor } from '@/components/functionality/cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Component {...pageProps} />
      <StyledCursor>
        <div className="styled_cursor"/>
      </StyledCursor>
    </div>
  );
}

export default MyApp;