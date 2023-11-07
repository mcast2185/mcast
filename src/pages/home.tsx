'use client'
import { Reveal } from '../components/functionality/reveal';
import { useAnimation, motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

const Home = () => {

  return (
    <div className='home-container'>
      <div className="flex sm:flex-col flex-row w-[100vw]" >
       <div className="grid grid-cols-2  sm:flex sm:flex-col  gap-[4vw] sm:py-[]" >
        <div className="w-[40vw] sm:w-full sm:flex sm:justify-center sm:items-center sm:ml-[2vw] ml-[15vw] sm:mt-[4vh]" >
          <motion.div 
            className="flex flex-col h-full w-[70%] sm:w-full pt-[5rem] " >
            <Reveal transition={{duration: 1, delay: .55, ease: 'easeInOut'}}>
              <h3 className="pl-[.5rem] font-Manrope text-2xl sm:text-lg text-[var(--base-charcoal)]  font-bold" >
                Hello, my name is
              </h3>
            </Reveal>
            <Reveal transition={{duration: .7, delay: .42, ease: 'easeInOut'}}>
              <h1 className="home-title pl-[1rem] font-Syne text-7xl sm:text-3xl text-[var(--base-beige)]">
                <span className="text-[var(--base-red)]">R</span>ick & Morty
              </h1>
            </Reveal>
            <Reveal transition={{duration: 1, delay: .55, ease: 'easeInOut'}}>
              <p className="home-section pl-[.5rem] text-lg font-Manrope font-light text-[var(--base-charcoal)] text-opacity-70 ">
                I am a Scientest that focuses on front-end solutions to enhance user experience. 
                Pairing chem, engineering, and architecting for morty is where my enjoyment truly lies.
              </p>
            </Reveal>
          </motion.div>
        </div>
        <section className="section-container w-[45vw] 
          h-[60%] mt-[20%] bg-[var(--base-blue)] rounded">
          
        </section>
       </div>

      </div>
    </div>
  )
}

export default Home;