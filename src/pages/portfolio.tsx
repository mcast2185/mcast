"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import GMR from '/public/static/images/gmr.png';
import GIT from '/public/static/images/Git.png';
import { Reveal } from '@/components/functionality/reveal';
import Gmr from '@/components/pageComponents/portfolioProjects/gmr';

const Portfolio = () => {
  const gprAnimation = useAnimation();
  const detailsAnimation = useAnimation();


  const variants = {hidden: {opacity: 0, left: 0 }, visible: {opacity: 1, left: "16vw"}};
  const variantDetails = {hidden: {x: -50, opacity: 0}, visible: {x: 0, opacity: 1}};

  const mouseOverEvent = () => {
    (document.querySelector("#gprconst") as HTMLElement).style.filter = "brightness(35%)";
    (document.querySelector("#gprconst_title") as HTMLElement).style.opacity = "1";
    gprAnimation.start("visible");
    detailsAnimation.start("visible");
  };

  const mouseOutEvent = () => {
    (document.querySelector("#gprconst") as HTMLElement).style.filter = "brightness(100%)";
    (document.querySelector("#gprconst_title") as HTMLElement).style.opacity = "0";
    gprAnimation.start("hidden");
    detailsAnimation.start("hidden");
  };

  return (
    <div className="w-[100vw] h-[100vh] my-[2vh]">
      <div className="border-t-[2px] border-[#ffff] border-l-0 border-r-0 border-b-0 w-[100%] h-[100%] flex flex-col">
      {/* <div className="border-t-[2px] border-[#ffff] border-l-0 border-r-0 border-b-0 w-[100%] h-[100%] flex flex-col px-[11vw]"> */}
        <div className='flex justify-end' >
          <Reveal transition={{duration: .75, delay: .5, ease: 'easeInOut'}}>
            <h1 className="text-baseBeige text-7xl font-syne font-extrabold" >
              Portfolio
            </h1>
          </Reveal>
        </div>
        <div className="w-[100%] h-[100%] flex flex-row">
          <div className="ml-[11vw] h-[34%] w-[90vw] shadow-lg absolute  mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex flex-col justify-start" >
            <hr className="border-baseBeige mt-[.5vh] w-[100vw] h-[1.5px]" />
          {/* <div className=" h-[75%] w-[35vw] shadow-lg mr-[2vw] mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex justify-start" > */}
            <div className='flex flex-col w-[35vw] h-[100%]' >
              <Gmr/>
              
              {/* <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div> */}
            </div>
          </div>
          <div className=" h-[34%] w-[53vw] absolute shadow-lg z-10 right-0 rounded-sm drop-shadow-xl shadow-[#272727] bg-baseBeige bg-opacity-[.85] mt-[23vh] flex flex-col justify-start" >
              <hr className="border-baseRed mt-[.5vh] w-[100vw] h-[1.5px]" />
            <div className='flex flex-row justify-start p-[.5rem]' >
              <div className='h-[30.5vh] w-[33vw] overflow-hidden bg-baseCharcoal bg-opacity-[.85] border border-baseCharcoal shadow-sm shadow-[#111]' >
                <div className='h-[100%] flex flex-start' >
                  <div className='img_wrapper_gmr h-[100%] flex justify-center object-contain items-center ease-in-out' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} >
                    <Image id="gprconst" src={GMR} alt="project img" className="h-[100%] w-[18.5vw] p-1 rounded-[10px] ease-in-out " />
                    <div className="absolute flex justify-center items-center">
                      <Link href="gmrseat.com" >
                        <h1 id="gprconst_title" className='text-2xl font-extrabold font-syne ease-in-out text-baseBeige hover:decoration-solid hover:decoration-baseRed hover:decoration-[1px] opacity-0' >
                          GMRseat
                        </h1>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[50%] h-[100%]">
                    <motion.div 
                      variants={variants}
                      initial="hidden"
                      animate={gprAnimation}
                      transition={{
                        duration: "1.2",
                        type: "spring",
                      }}
                      style={{
                        height: "29.3vh",
                        borderRadius: "10px",
                        objectFit: "contain",
                        zIndex: -10,
                        marginTop: "2.5vh",
                        width: "17.6vw",
                        background: "#272727",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        position: "absolute"
                      }}
                    />
                    <div className='flex justify-center items-center w-[100%]' >
                      <motion.div 
                        style={{
                          position: "absolute",
                          left: "18vw",
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        variants={variantDetails}
                        initial="hidden"
                        animate={detailsAnimation}
                        transition={{
                          duration: ".25",
                          delay: .25,
                          type: "spring"
                        }}
                      >
                        <div className='h-[40%] mt-[19%] flex flex-col justify-start px-[20px] pb-[15px]' >
                          <div className='flex flex-row gap-2 items-center ' >
                            <h1 className="text-lg font-light font-inter text-[#ffff]">
                              Website: 
                            </h1>
                            <h2 className="text-base font-light font-inter text-[#ffff]">
                              GPRconstruction.com
                            </h2>
                          </div>
                          <div className='flex flex-row gap-2 items-center ' >
                            <h1 className="text-lg font-light font-inter text-[#ffff]">
                              Type: 
                            </h1>
                            <h2 className="text-base font-light font-inter text-[#ffff]">
                              Business
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;