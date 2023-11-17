'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/functionality/reveal';
import {Typewriter, useTypewriter } from 'react-simple-typewriter';

import Image from 'next/image';
import PRO from "../../static/images/propic.svg";

type twriterProps = {
  words: string[]
} 

const TypeWriterWrapper = ({words}: twriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleTyping = (index: number) => {
    setCurrentWordIndex(index % words.length);
  };

  const fontStyles = [
    "font-syne font-medium",
    "font-PetitFormal font-medium",
    "font-BodoniModa font-normal",
    "font-MajorMonoDisplay font-light",
  ];
  // const fontStyles = [
  //   { fontFamily: 'Arial', fontWeight: 500 },
  //   { fontFamily: 'Times New Roman', fontWeight: 500 },
  // ];

  return (
    <div 
    className={"".concat(`${fontStyles[currentWordIndex]}`)}
    // style={fontStyles[currentWordIndex]} 
    >
      <Typewriter
        words={words}
        loop={ true}
        deleteSpeed={ 80}
        typeSpeed={ 110}
        delaySpeed={ 910}
        onLoopDone={() => handleTyping}
      />
    </div>
  );
};

const HomeTitle = () => {

  // const [typeEffect] = useTypewriter({
  //   words: ['Web Developer', 'Full-Stack Developer', "React Developer", 'NextJS Developer'],
  //   loop: true,
  //   deleteSpeed: 80,
  //   typeSpeed: 110,
  //   delaySpeed: 910
  // });

  return (
    <div>
       <div className="home-row flex-row sm:flex-col h-[100vh]" >
        <div className=" h-[100%] flex items-center sm:w-full sm:flex sm:justify-center sm:items-center sm:ml-[2vw] sm:mt-[4vh]" >
          <motion.div 
            className="absolute flex flex-col h-full w-[100%] sm:w-full pt-[17%] pl-[15%]" >
            <Reveal transition={{duration: .75, delay: .2, ease: 'easeIn'}}>
              <h2 style={{fontFamily: ""}} className="pl-[.5rem] font-syne text-[22px] sm:text-lg text-baseGrey font-extrabold " >
                <span className="text-baseBeige">H</span>ello, my name is
              </h2>
            </Reveal>
            <Reveal transition={{duration: 1.3, delay: .5, ease: 'easeIn'}}>
              <h1 className="pl-[1rem] font-inter text-7xl sm:text-3xl text-baseBeige font-extrabold">
                <span className="text-baseGrey">M</span>ario C.
              </h1>
            </Reveal>
            <div className="home-desc">
              <h2 className="typewriter pl-[.5rem] font-syne text-[28px] sm:text-lg text-baseGrey font-extrabold py-[5px]" >
                <span className="text-baseBeige">I</span> am a <TypeWriterWrapper words={['Web Developer', 'Full-Stack Developer', "React Developer", 'NextJS Developer']}/>
                {/* {typeEffect} */}
              </h2>
              <p className="pl-[.5rem] text-lg font-inter font-light text-opacity-70 text-baseBeige pb-[15px]">
                I <u className="decoration-baseRed">focus</u> on front-end solutions to uniquely enhance user experience. 
                Architecting web pages under a creative <span className="text-[20px] font-bold">eye</span> is where my passion truly lies as a developer.
              </p>
            </div>

            {/* projects and contact buttons */}
            <div className="flex flex-row gap-[1rem] pt-[.5rem]"> 
              <motion.div
                className="w-[140px] h-[72px] rounded-[20px] bg-transparent border-baseGrey border-[2px] cursor-pointer flex flex-row"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/projects" className='font-inter text-baseBeige flex justify-center py-[10px] text-2xl font-extrabold'>
                  My Works
                </Link>
                <Image src="" alt="forward icon" loading='eager' className=""/>
              </motion.div>

              
              <motion.div
                className="w-[140px] h-[72px] rounded-[20px] bg-transparent border-baseGrey border-[2px] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/projects" className='font-inter text-baseBeige flex justify-center py-[10px] text-2xl font-extrabold'>
                  Reach Out 
                </Link>
                <Image src="" alt="email icon" loading='eager' className=""/>
              </motion.div>
            </div>
            {/* end */}

            {/* social media section */}
            <div className="w-[30vw] flex flex-col justify-start pt-[1rem]">
              <h2 className="pl-[.5rem] font-syne text-[22px] sm:text-lg text-baseGrey font-extrabold ">
                Follow me:
              </h2>
              <div className=" flex flex-row pl-[1rem] gap-[1vw]">
               <Image src="" alt="linkedin image" loading='eager' className=""/>
               <Image src="" alt="twitter image" loading='eager' className=""/>
               <Image src="" alt="" loading='eager' className=""/>
              </div>
            </div>
          {/* end */}
          </motion.div>

        </div>
        <section className="flex justify-end w-[100vw] 
          h-[100%] pr-[8vw] pt-[15vh]">
          <Image src={PRO}
            role="img"
            alt="professional image"
            loading="eager"
            className="h-[68vh] w-[38vw] opacity-90"
          />
        </section>
       </div>
    </div>
  )
}

export default HomeTitle