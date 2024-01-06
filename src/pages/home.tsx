'use client';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import HomeTitle from '@/components/pageComponents/hometitle';
// import Page from '@/components/page';

const Home = () => {

  return (
    // <Page>
    <motion.div
      initial={{y: "15%", opacity: .1}}
      animate={{y: "0%", opacity: 1}}
      exit={{opacity: 1}}
      transition={{duration: .75, ease: "easeInOut"}}
    >
      <Head>
        <title>
          Mcast:Dev
        </title>
        <meta name='description' content='Software-Developer Online Portfolio'/>
      </Head>
      <main>
        <div id="home_page" className="home-component">
          <div>
            <HomeTitle/>
          </div>
        </div>
      </main>
    </motion.div>
    // </Page>
  );
};

export default Home;