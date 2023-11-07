import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;