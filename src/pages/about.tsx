'use client';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';


import WORKING from '/public/static/images/working.png';
import WORKING2 from '/public/static/images/working2.png';
import OPEN from '/public/static/images/opentag.png';
import CLOSE from '/public/static/images/closedtag.png';
import ScaleOnScroll from '@/components/functionality/scaleOnScroll';
import { Reveal } from '@/components/functionality/reveal';
import { ListContainer, ListItem } from '@/components/functionality/framerVariants';


const About = () => {

  return (
    <div>
      <Head>
        <title>
          Mcast:Dev/About
        </title>
        <meta name='description' content='Software-Developer Online Portfolio' />
      </Head>
      <motion.main
        initial={{ y: "10%", opacity: 0.3, }}
        whileInView={{ y: "0%", opacity: 1 }}
        exit={{y: "0%", opacity: 0}}
        className='flex m-0 p-0 flex-col '
        >
        <div id="about_page" className="h-[100vh] w-[100vw] mt-[20%] pb-[15%]">
          <div className=" bg-[#ffff]  w-[100%] flex flex-col">
            <ScaleOnScroll>
              <div className='w-[100%] flex flex-row scale-[.95]' >
                <div className="flex flex-col relative object-contain w-[40vw] scale-[.95]">
                  <div className='w-[30vw] h-[40%] ml-[10%]  flex flex-row gap-5 items-center mt-[10%]'>
                    <Image priority src={WORKING} alt='about image' id="ripple-image"
                      className="bg-image h-[47.5vh] w-[20vw] rounded-sm shadow-md shadow-baseCharcoal bg-no-repeat bg-cover "/>
                    <div className="pt-[2.5rem]">
                      <Image priority src={OPEN} alt='about image' className="h-[3.5rem] w-[3rem] "/>
                    </div>
                  </div>
                  <div className='w-[30vw] h-[40%] ml-[20%] absolute bottom-[10%] flex flex-row gap-5 items-center justify-end '>
                    <div className="pt-[2.5rem]">
                      <Image priority src={CLOSE} alt='about image' className="h-[5rem] w-[4.5rem] z-10 border-2 border-[black] rounded-lg"/>
                    </div>
                    <Image priority src={WORKING2} alt='about image' id="ripple-image-2"
                      className="bg-image h-[45vh] w-[19vw] z-10 rounded-sm shadow-md shadow-baseCharcoal  bg-no-repeat bg-cover  "/>
                  </div>
                </div>
                <div className="flex flex-col  pl-[10%] mt-[5%] mb-[5%]" >
                  <Reveal transition={{duration: .75, delay: .5, ease: 'easeInOut'}}>
                    <h1 className="text-baseGrey text-7xl font-syne font-extrabold" >
                      About
                    </h1>
                  </Reveal>
                  <div className="w-[45vw] flex pl-[5%]">
                    <p className="text-baseCharcoal text-xl font-inter font-light " >
                      I am a Front-end developer from San Diego CA who enjoys placing an artistic emphasis in my approach to creating websites.
                      My strength as a <i>Web Dev,</i> lies in producing fully functional web pages from out of conceptual designs, leveraging new, industry leading 
                      solutions that help build on the users experience. I aim to create equitable and aesthetically pleasing websites 
                      that ensures a smooth browsing experience to enjoy.
                    </p>
                  </div>
                  <motion.ul nonce="once" variants={ListContainer} initial={"hidden"} whileInView={"visible"} className="flex flex-col gap-[1vw] py-[5vh]">

                  {/* check that we have the same wrappers containing the list items as well as having placed the div styles to overflow hidden */}
                    <div className="flex flex-row gap-[4vw]" >
                      <motion.li variants={ListItem} className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                        <h3 className="font-extrabold text-baseGrey text-xl">
                          Name:
                        </h3> 
                        <p className="p-2 font-inter  text-[14px]">
                          Mario A. Castro
                        </p>
                      </motion.li>
                      <motion.li variants={ListItem} className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                        <h3 className="font-extrabold text-baseGrey text-xl">
                          Employment:
                        </h3> 
                        <p className="p-2 font-inter  text-[14px]">
                          Open
                        </p>
                      </motion.li>
                    </div>
                    <div className="flex flex-row gap-[4vw]" >
                      <motion.li variants={ListItem} className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                        <h3 className="font-extrabold text-baseGrey text-xl">
                          Email:
                        </h3> 
                        <p className="p-2 font-inter  text-[14px]">
                          Mcast2185@gmail.com
                        </p>
                      </motion.li>
                      <motion.li variants={ListItem} className="flex justify-start py-[30px] h-[10vh] w-[25vw] flex-col text-baseCharcoal font-inter">   
                        <h3 className="font-extrabold text-baseGrey text-xl">
                          Education:
                        </h3> 
                        <p className="p-2 font-inter  text-[14px]">
                          Bottega University: Full-Stack Developer Certification 
                        <br/>
                          Google UX Certification (In progress)
                        </p>
                      </motion.li>
                    </div>
                  </motion.ul>
                </div>
              </div>
            </ScaleOnScroll>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default About;