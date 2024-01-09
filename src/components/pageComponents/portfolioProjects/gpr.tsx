"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import GIT from '/public/static/images/Git.png';
import GPR from '/public/static/images/gpr.png';

const Gpr = () => {
  const gprAnimation = useAnimation();
  const detailsAnimation = useAnimation();
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
  <div className='p-[.5rem]' >
      <div className='h-[30.5vh] w-[33vw] overflow-hidden bg-baseCharcoal bg-opacity-[.85] border border-baseCharcoal shadow-sm shadow-[#111]' >
        <div className='h-[100%] flex ' >
          <div className='h-[100%] w-[50%] ease-in-out' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} >
            <div className='flex justify-center h-[100%] w-[100%] items-center' >

              <Image id="gprconst" src={GPR} alt="project img" className="h-[100%] w-[18.5vw] p-[2.5px] rounded-[10px] ease-in-out " />
              <div className="absolute flex justify-center items-center">
                <Link href="gmrseat.com" >
                  <h1 id="gprconst_title" className='text-[22px] font-extrabold font-syne ease-in-out flex content-center items-center text-baseBeige  opacity-0' >
                    GPR<br/>
                    construction
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <div className='flex justify-center items-center ' >
              <motion.div 
                style={{
                  position: "absolute",
                  left: "17.3vw",
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
                <div className='h-[40%] mt-[28.5%] flex flex-col justify-start px-[20px] pb-[15px]' >
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
  )
}

export default Gpr;