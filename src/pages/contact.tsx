import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
// import Transition from '../transition';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>
          Mcast:Dev/Contact
        </title>
        <meta name='description' content='Software-Developer Online Portfolio' />
      </Head>
      <motion.main
        initial={{ y: "15%", opacity: .15 }}
        whileInView={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <div id="contact_page" className="w-[100vw] h-[100vh] flex justify-center py-[10vh]">
          <div className="border-t-[0px] border-baseRed border-l-[0px] border-r-[2px] border-b-[2px] w-[80%] bg-[#fff] rounded-xl shadow-lg shadow-baseCharcoal ">
            <div className=" border border-baseCharcoal" >
              
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

export default Contact;