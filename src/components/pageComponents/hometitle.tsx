'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/functionality/reveal';
import {Typewriter, useTypewriter } from 'react-simple-typewriter';

import Image from 'next/image';
import PRO from "/public/static/images/propic.svg";
import LINK from "/public/static/images/linkedin.png";
import MAIL from "/public/static/images/mail.png";
import INSTA from "/public/static/images/insta.png";
import TWITTER from "/public/static/images/twitter.png";
import REDIRECT from "/public/static/images/redirect.png";

type twriterProps = {
  words: string[]
}; 

const TypeWriterWrapper = ({words}: twriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleTyping = (index: number) => {
    setCurrentWordIndex(index % words.length);
  };



  const fontStyles = [
    { fontFamily: "'Syne', sans-serif", fontWeight: 900 },
    { fontFamily: "'Petit Formal Script', cursive", fontWeight: 500 },
    { fontFamily: "'Bodoni Moda', serif", fontWeight: 500 },
    { fontFamily: "'Major Mono Display', monospace", fontWeight: 500 }
  ];

  return (
    <div style={fontStyles[currentWordIndex]} 
    >
     <span className="text-baseBeige">I</span> am a <Typewriter
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

  const [typeEffect] = useTypewriter({
    words: ['Web Developer', 'Full-Stack Developer', "React Developer", 'NextJS Developer'],
    loop: true,
    deleteSpeed: 80,
    typeSpeed: 110,
    delaySpeed: 910
  });

  return (
    <div>
       <div className="home-row flex-row sm:flex-col h-[100vh]" >
        <div className=" h-[100%] flex items-center sm:w-full sm:flex sm:justify-center sm:items-center sm:ml-[2vw] sm:mt-[4vh]" >
          {/* rework the padding/margin measuring units */}
          <motion.div  id="home-header"
            className="absolute flex flex-col h-full w-[100%] sm:w-full pt-[17%] pl-[13%]" >
            <Reveal transition={{duration: .75, delay: .2, ease: 'easeIn'}}>
              <h2 className="pl-[.5rem] font-syne text-[22px] sm:text-lg text-baseGrey font-extrabold " >
                <span className="text-baseBeige">H</span>ello, my name is
              </h2>
            </Reveal>
            <Reveal transition={{duration: 1.5, delay: .4, ease: 'easeIn'}}>
              <h1 className="pl-[1rem] font-inter text-7xl sm:text-3xl text-baseBeige font-extrabold">
                <span className="text-baseGrey">M</span>ario C.
              </h1>
            </Reveal>
            <div className="home-desc">
              <h2 className="typewriter pl-[.5rem] font-syne text-[28px] sm:text-lg text-baseGrey font-extrabold py-[5px]" > 
                <TypeWriterWrapper words={ ['Web Developer', 'Full-Stack Developer', "React Developer", 'NextJS Developer']}/>
              </h2>
              <p className="pl-[.5rem] text-lg font-inter font-light text-opacity-70 text-baseBeige pb-[15px]">
                I <u className="decoration-baseRed">focus</u> on front-end solutions to uniquely enhance user experience. 
                Architecting web pages under a creative <span className="text-[20px] font-bold">eye</span> is where my passion truly lies as a developer.
              </p>
            </div>

            {/* projects and contact buttons */}
            <div className="flex flex-row gap-[1rem] pt-[.5rem]"> 
              <motion.div
                className="w-[175px] h-[80px] rounded-[20px] bg-transparent border-baseGrey border-[2px] cursor-pointer flex flex-row items-center justify-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/projects" className='font-inter text-baseBeige flex justify-center py-[10px] text-[19px] font-extrabold'>
                  My Works
                </Link>
                <Image src={REDIRECT} alt="forward icon" loading='eager' className="h-[35px] w-[25px] text-[white]" style={{filter: "brightness(10%)"}}/>
              </motion.div>

              
              <motion.div
                className="w-[175px] h-[80px] rounded-[20px] bg-transparent border-baseGrey border-[2px] cursor-pointer flex flex-row items-center justify-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/projects" className='font-inter text-baseBeige flex justify-center py-[10px] text-[19px] font-extrabold'>
                  Reach Out 
                </Link>
                <Image src={MAIL} alt="email icon" loading='eager' className="h-[30px] w-[20px]"/>
              </motion.div>
            </div>
            {/* end */}

            {/* social media section */}
            <div className="w-[30vw] flex flex-col justify-start pt-[1rem]">
              <h2 className="pl-[.5rem] font-syne text-[22px] sm:text-lg text-baseGrey font-extrabold ">
                Follow me:
              </h2>
              <div className=" flex flex-row items-center pl-[1rem] gap-[1vw]">
               <Image src={LINK} alt="linkedin image" loading='eager' className="h-[3.5rem] w-[3rem]  text-black "/>
               <Image src={TWITTER} alt="twitter image" loading='eager' className="h-[3.5rem] w-[3rem]  text-black "/>
               <Image src={INSTA} alt="" loading='eager' className="border-baseRed border-2 bg-cover rounded-md h-[3rem] w-[3rem]  text-black p-0 m-0 object-contain"/>
              </div>
            </div>
          {/* end */}
          </motion.div>

        </div>
        <section className="flex justify-end w-[100vw] 
          h-[100%] pr-[8vw] pt-[15vh]">
          <Image src={PRO}
            priority
            role="img"
            alt="professional image"
            loading="eager"
            className="h-[68vh] w-[38vw] opacity-90"
          />
        </section>
       </div>
    </div>
  );
};

export default HomeTitle;
