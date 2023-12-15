"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import GMR from '/public/static/images/gmr.png';
import GIT from '/public/static/images/Git.png';

const Gmr = () => {
  const gmrAnimation = useAnimation();
  const infoAnimation = useAnimation();


  const variants = {hidden: {opacity: 0, left: 0 }, visible: {opacity: 1, left: "16vw"}};
  const variantInfo = {hidden: {x: -50, opacity: 0}, visible: {x: 0, opacity: 1}};

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
    <div className='flex flex-row justify-start p-[1rem]' >
      <div className='h-[30.5vh] w-[33vw] overflow-hidden bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal shadow-sm shadow-[#111]' >
        <div className='h-[100%] flex flex-start' >
          <div className='img_wrapper_gmr h-[100%] flex justify-center object-contain items-center ease-in-out' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} >
            <Image id="gmrseat" src={GMR} alt="project img" className="h-[100%] w-[18.5vw] p-1 rounded-[10px] ease-in-out " />
            <div className="absolute flex justify-center items-center">
              <Link href="gmrseat.com" >
                <h1 id="gmrseat_title" className='text-2xl font-extrabold font-syne ease-in-out text-baseBeige hover:decoration-solid hover:decoration-baseRed hover:decoration-[1px] opacity-0' >
                  GMRseat
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <motion.div 
              variants={variants}
              initial="hidden"
              animate={gmrAnimation}
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
                variants={variantInfo}
                initial="hidden"
                animate={infoAnimation}
                transition={{
                  duration: ".25",
                  delay: .25,
                  type: "spring"
                }}
              >
                <div className='h-[40%] mt-[65%] flex flex-col justify-start px-[20px] pb-[15px]' >
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
    </div>
  );
};

export default Gmr;