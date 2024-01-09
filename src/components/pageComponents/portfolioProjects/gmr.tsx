"use client";
import Image from 'next/image';
import React, {  useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import GMR from '/public/static/images/gmr.png';
import GIT from '/public/static/images/Git.png';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import Modal from '../modal';



const Gmr = () => {
  const [modalOpen, isModalOpen] = useState(false);
  const gmrAnimation = useAnimation();
  const infoAnimation = useAnimation();
  const variantInfo = { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } };


  const close = () => {
    isModalOpen(false);
    useAppDispatch({ type: 'MODAL_IS_NOT_ACTIVE', state: modalOpen}, []);
  };
  
  const open = () => {
    isModalOpen(true);
    useAppDispatch({ type: 'MODAL_IS_ACTIVE', state: modalOpen}, []);
    let storeState = useAppSelector(current => current.state);

    console.log("onclick open, store should be true: ", storeState)
  };

  const mouseOverEvent = () => {
    (document.querySelector("#gmrseat") as HTMLElement).style.filter = "brightness(35%)";
    (document.querySelector("#gmrseat_title") as HTMLElement).style.opacity = "1";
    gmrAnimation.start("visible");
    infoAnimation.start("visible");
  };

  const mouseOutEvent = () => {
    (document.querySelector("#gmrseat") as HTMLElement).style.filter = "brightness(100%)";
    (document.querySelector("#gmrseat_title") as HTMLElement).style.opacity = "0";
    gmrAnimation.start("hidden");
    infoAnimation.start("hidden");
  };
  
  return (
    <div className=' p-[1rem]' >
      <div id="gmr_wrapper" className='h-[30.5vh] w-[33vw] overflow-hidden bg-baseCharcoal bg-opacity-[.65] border border-baseCharcoal shadow-sm shadow-[#111]' >
        <div className='h-[100%] flex' >
          <div className='img_wrapper_gmr h-[100%] w-[50%]  ease-in-out' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} >
            <motion.div
              className="h-[100%] w-[100%]"
              whileHover={{scale: 1.05}}
              whileTap={{scale: .9}}
              onClick={()=> (modalOpen ? close() : open())}
              >
              <div className='flex justify-center h-[100%] w-[100%] items-center' >
                <Image id="gmrseat" src={GMR} alt="project img" className="h-[100%] w-[18.5vw] p-[2.5px] overflow-hidden rounded-[10px] ease-in-out " />
                <div className="absolute flex justify-center items-center ">
                  <Link href="gmrseat.com" >
                    <h1 id="gmrseat_title" className='text-2xl font-extrabold font-syne ease-in-out text-baseBeige h-[100%] w-[100%] opacity-0' >
                      GMRseat
                    </h1>
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
          <div className="w-[50%] h-[100%]">
            <div className='flex justify-center items-center ' >
              <motion.div 
                style={{
                  position: "absolute",
                  left: "18vw",
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                variants={variantInfo}
                initial="hidden"
                animate={infoAnimation}
                transition={{
                  duration: ".25",
                  delay: .25,
                  type: "spring"
                }}
              >
                <div className='h-[40%] pt-[16%] flex flex-col justify-start px-[20px] pb-[15px]' >
                  <div className='flex flex-row gap-2 items-center ' >
                    <h1 className="text-lg font-light font-inter text-[#ffff]">
                      Website: 
                    </h1>
                    <h2 className="text-base font-light font-inter text-[#ffff]">
                      GMRseat.com
                    </h2>
                  </div>
                  <div className='flex flex-row gap-2 items-center ' >
                    <h1 className="text-lg font-light font-inter text-[#ffff]">
                      Type: 
                    </h1>
                    <h2 className="text-base font-light font-inter text-[#ffff]">
                      Blog
                    </h2>
                  </div>
                  <div className='flex flex-row gap-2 items-center ' >
                    <h1 className="text-lg font-light font-inter text-[#ffff]">
                      Framework: 
                    </h1>
                    <h2 className="text-base font-light font-inter text-[#ffff]">
                      NextJS
                    </h2>
                  </div>
                </div>
              </motion.div>
              <Image src={GIT} alt="github image" className="h-[10vh] w-[5vw] mt-[20%]" />
            </div>
          </div>
        </div>
      </div>
      {/* <AnimatePresence
        initial={false}
        mode="wait"
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence> */}
    </div>
  );
};

export default Gmr;