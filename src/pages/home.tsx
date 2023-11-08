'use client'
import { Reveal } from '../components/functionality/reveal';
import { motion } from 'framer-motion';
import BG from "../static/images/devbg.png";
import React from 'react'
import Image from 'next/image';
import { ScrollContent } from '@/components/pageComponents/scrollContent';

//potentially having this component as position absolute
const Home = () => {

  return (
    <section className="h-[100vh] w-[100vh] relative">
      <Image src={BG} role="img" loading='eager' sizes="100vh 100vw"  style={
        {
          opacity: "1",
          position: "fixed",
          zIndex: "-10",
          width: "100%",
          height: "100%",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat", 
          backgroundSize: "cover"}} 
          alt="testing" 
        />

       <div className="flex flex-row sm:flex-col items-center h-[100vh] gap-[50px] sm:py-[]" >
        {/* <div className="grid grid-cols-2  sm:flex sm:flex-col  gap-[4vw] sm:py-[]" > */}
        <div className="w-[40vw] h-[100%] flex items-center sm:w-full sm:flex sm:justify-center sm:items-center sm:ml-[2vw] sm:mt-[4vh]" >
          <motion.div 
            className="flex flex-col h-full w-[100%] sm:w-full pt-[47%] pl-[18%]" >
            <Reveal transition={{duration: 1, delay: .4, ease: 'easeInOut'}}>
              <h2 className="pl-[.5rem] font-Manrope text-[22px] sm:text-lg text-red font-extrabold  " >
              {/* <h2 className="pl-[.5rem] font-Manrope text-[22px] sm:text-lg text-[var(--base-charcoal)] font-extrabold  " > */}
                <span className="text-[var(--base-beige)]">H</span>ello, my name is
              </h2>
            </Reveal>
            <Reveal transition={{duration: .7, delay: .25, ease: 'easeInOut'}}>
              <h1 className="home-title pl-[1rem] font-Syne text-7xl sm:text-3xl text-[var(--base-beige)]">
                <span className="text-[var(--base-charcoal)]">M</span>ario C.
              </h1>
            </Reveal>
            <div className="home-desc">
              <p className="pl-[.5rem] text-lg font-Manrope font-light text-[var(--base-beige)] text-opacity-70 ">
                I am a Web Developer that focuses on front-end solutions to enhance user experience. 
                Architecting web pages under a creative perspective is where my enjoyment truly lies as a developer.
              </p>
            </div>
          </motion.div>
        </div>
        <section className="section-container w-[100vw] 
          h-[100]">
          {/* <ScrollContent/> */}
        </section>
       </div>

      {/* </div> */}
    </section>
  )
}

export default Home;