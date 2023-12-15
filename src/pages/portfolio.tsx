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
          <div className="ml-[11vw] h-[32%%] w-[90vw] shadow-lg absolute  mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex justify-start" >
          {/* <div className=" h-[75%] w-[35vw] shadow-lg mr-[2vw] mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex justify-start" > */}
            <div className='flex flex-col w-[35vw] h-[100%]' >
              <Gmr/>
              
              {/* <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div> */}
            </div>
          </div>
          <div className=" h-[32%] w-[53vw] absolute shadow-lg z-10 right-0 rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseBeige bg-opacity-[.85] mt-[23vh] flex justify-start" >
            <div className='flex flex-col' >
              <div className='flex flex-row items-center justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseGrey bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div>
              {/* <div className='flex flex-row justify-start p-[1rem]' >
                <div className='h-[30.5vh] w-[33vw] bg-baseCharcoal bg-opacity-[.5] border border-baseCharcoal' >
                  
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;