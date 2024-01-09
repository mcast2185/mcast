import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';


import Navbar from '@/components/navigation/navbar';
import StoreProvider from '@/app/storeProvider';

import "../styles/styles.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider >
      <AnimatePresence mode="wait">
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </StoreProvider>
  );
};

export default MyApp;