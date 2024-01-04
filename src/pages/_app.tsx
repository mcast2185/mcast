import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
// import { ThemeProvider } from 'next-themes';
import "../styles/styles.scss";


// function MyApp({ Component, pageProps }: AppProps) {
  //   return (
    //     <>
    //       <ThemeProvider enableSystem={true} attribute="class">
    //         <Component {...pageProps} />
    //       </ThemeProvider>
    //     </>
    //   );
    // }
    
    // export default MyApp;
    import { useRouter } from "next/router";
import Navbar from '@/components/navigation/navbar';
    
const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  
      
    return (
      // <AnimatePresence mode="wait">
      //   <motion.div key={router.pathname} >
      //     <Navbar/>
      //     <Component {...pageProps}/>

      //     <motion.div
      //       className='slide-in'
      //       initial={{ scaleY: 0 }}
      //       animate={{ scaleY: 0 }}
      //       exit={{ scaleY: 1 }}
      //       transition={{
      //         duration: 1,
      //         ease: [.22, 1, .36, 1]
      //       }}
      //     />

      //     <motion.div
      //       className='slide-out'
      //       initial={{ scaleY: 1 }}
      //       animate={{ scaleY: 0 }}
      //       exit={{ scaleY: 0 }}
      //       transition={{
      //         duration: 1,
      //         ease: [.22, 1, .36, 1]
      //       }}
      //     />
      //   </motion.div>
      // </AnimatePresence>
        <div >
          <Navbar/>
          <AnimatePresence mode="wait">
          <Component key={router.pathname} {...pageProps}/>

          <motion.div
            className='slide-in'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 1,
              ease: [.22, 1, .36, 1]
            }}
          />

          <motion.div
            className='slide-out'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1,
              ease: [.22, 1, .36, 1]
            }}
          />
      </AnimatePresence>
        </div>
  )
}
export default MyApp;