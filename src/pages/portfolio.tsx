"use client";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';


import { Reveal } from '@/components/functionality/reveal';
import Gmr from '@/components/pageComponents/portfolioProjects/gmr';
import Gpr from '@/components/pageComponents/portfolioProjects/gpr';
import Modal from '@/components/pageComponents/modal';
import { useGlobalState } from '@/components/functionality/globalState';


const Portfolio = () => {
  const {state, dispatch} = useGlobalState();

  return (
    <div className="border border-[#ffff] border-r-0 border-l-0 border-t-0">
      <Head>
        <title>
          Mcast:Dev/Portfolio
        </title>
        <meta name='description' content='Software-Developer Online Portfolio' />
      </Head>
      <motion.main
        initial={{ y: "30%", opacity: .3 }}
        whileInView={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: .75, ease: "easeInOut" }}
        className=' h-[100vh] w-[100vw]'
      >
        <div id="portfolio_page" className="h-[100%] flex flex-col pb-[30%] mb-[30%]">
          <div className=" w-[100%] h-[100%] flex flex-col ">

            <div className='flex justify-end mr-[1.5%] mt-[10vh]' >
              <Reveal transition={{duration: .75, delay: .5, ease: 'easeInOut'}}>
                <h1 className="text-baseBeige text-7xl font-syne font-extrabold" >
                  Portfolio
                </h1>
              </Reveal>
            </div>
            <div className="w-[100%] h-[100%] flex flex-row">
              <div className="ml-[11vw] h-[36%] w-[89vw] shadow-lg absolute mt-[2vh] overflow-hidden 
                rounded-sm shadow-[#272727] bg-baseRed bg-opacity-[.15] flex flex-col justify-start">
                <hr className="border-baseBeige mt-[.5vh] w-[100vw] h-[1.5px]" />
                  <Gmr/>
              </div>
              <div className=" h-[34%] w-[54vw] absolute overflow-hidden shadow-lg z-10 right-0 
                rounded-sm shadow-[#272727] bg-baseBeige bg-opacity-[.85] mt-[23vh] flex flex-col justify-start">
                <hr className="border-baseRed mt-[.5vh] w-[100vw] h-[1.5px]" />
                <Gpr/>
              </div>
            </div>
          </div>
          <div className='flex justify-start w-[20%] h-[100%] mt-[35%] mb-[30%] ml-[2vw] pl-[1vw] border-baseBeige border border-r-0 border-l-0 border-t-0' >
            <Link href={"/"} onMouseOver={()=> console.log(state)}>
              <h3 className="font-Inter text-baseBeige text-2xl font-extrabold hover:decoration-baseRed decoration-baseRed
                transition hover:underline decoration-solid ease-in-out hover:scale-[1.05]">
                More...
              </h3>
            </Link>
          </div>
        </div>
      </motion.main>
      {(state.type === 'MODAL_IS_ACTIVE' && state.modalState === true) && 
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {state && <Modal modalOpen={state} handleClose={() => 
          dispatch({ type: 'MODAL_IS_NOT_ACTIVE', modalState: state})} 
        />}
      </AnimatePresence>}
    </div>
  );
};

export default Portfolio;