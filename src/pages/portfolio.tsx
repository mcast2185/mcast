"use client";
import Image from 'next/image';
import React from 'react';

import GMR from '/public/static/images/gmr.png';
import { Reveal } from '@/components/functionality/reveal';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const Portfolio = () => {
  const gmrAnimation = useAnimation();


  const variants = {
    hidden: {
      x: 150,
      opacity: 0,
      // left: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      // left: "100%"
    }
  };

  const mouseOverEvent = () => {
    (document.querySelector("#gmrseat") as HTMLElement).style.filter = "brightness(35%)";
    (document.querySelector("#gmrseat") as HTMLElement).style.transform = "scale(1.05)";
    (document.querySelector("#gmrseat_title") as HTMLElement).style.opacity = "1";
    gmrAnimation.start("visible");
  };

  const mouseOutEvent = () => {
    (document.querySelector("#gmrseat") as HTMLElement).style.filter = "brightness(100%)";
    (document.querySelector("#gmrseat") as HTMLElement).style.transform = "scale(1)";
    (document.querySelector("#gmrseat_title") as HTMLElement).style.opacity = "0";
    gmrAnimation.start("hidden");
  };


  return (
    <div className="w-[100vw] h-[100vh] my-[2vh]">
      <div className="border-t-[2px] border-[#ffff] border-l-0 border-r-0 border-b-0 w-[100%] h-[100%] flex flex-col px-[11vw]">
        <div className='flex justify-end' >
          <Reveal transition={{duration: .75, delay: .5, ease: 'easeInOut'}}>
            <h1 className="text-baseBeige text-7xl font-syne font-extrabold" >
              Portfolio
            </h1>
          </Reveal>
        </div>
        <div className="w-[100%] h-[100%] flex flex-row">
          <div className=" h-[75%] w-[35vw] shadow-lg mr-[2vw] mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex justify-start" >
            <div className='flex flex-col' >
              <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal shadow-sm shadow-[#111]' >
                  <div className='h-[100%] flex flex-start' >
                    <div className='img_wrapper_gmr h-[100%] object-contain flex justify-center items-center ease-in-out' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} >
                      <Image id="gmrseat" src={GMR} alt="project img" className="h-[100%] w-[18vw] object-contain rounded-[5px] ease-in-out" />
                      <div className="absolute flex justify-center items-center">
                        <Link href="gmrseat.com" >
                          <h1 id="gmrseat_title" className='text-2xl font-extrabold font-syne ease-in-out text-baseBeige hover:decoration-solid hover:decoration-baseRed hover:decoration-[1px] opacity-0' >
                            GMRseat
                          </h1>
                        </Link>
                      </div>
                    </div>
                    <motion.div 
                      variants={variants}
                      initial="hidden"
                      animate={gmrAnimation}
                      transition={{
                        duration: ".8",
                        type: "spring",
                      }}
                      style={{
                        background: "#2E3840",
                        left: 0,
                        right: 0,
                        top: 1,
                        bottom: 1,
                        position: "absolute"
                      }}
                    >
                    
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[75%] w-[35vw] shadow-lg ml-[2vw] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseBeige bg-opacity-[.15] mt-[23vh] flex justify-end" >
            <div className='flex flex-col' >
              <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div>
              <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
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