'use client';
import Image from 'next/image';
import React, { Suspense, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';



import WORKING from '/public/static/images/working.png';
import WORKING2 from '/public/static/images/working2.png';
import OPEN from '/public/static/images/opentag.png';
import CLOSE from '/public/static/images/closedtag.png';
import ScaleOnScroll from '@/components/functionality/scaleOnScroll';
import { Reveal } from '@/components/functionality/reveal';


const About = () => {
  

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

  }, []);



  return (
    
      <div className='object-contain'>
        <div className="bg-[#ffff] bg-opacity-50 h-[100vh] w-[100vw] pb-[4vh]">
          <ScaleOnScroll>
            <div className='w-[100vw] flex flex-row ' >
              <div className="flex flex-col relative object-contain h-[100vh] w-[40vw]">
                <div className='w-[30vw] h-[40vh] ml-[10%] object-contain flex flex-row gap-5 items-center mt-[10%]'>
                  {/* <Suspense fallback="Loading..."> */}
                    <Image src={WORKING} alt='about image' id="ripple-image"
                      className="bg-image h-[32rem] w-[20vw] rounded-sm shadow-md shadow-baseCharcoal bg-no-repeat bg-cover "/>
                    {/* <div id="ripple-image" className="ripple-image h-[55vh] w-[20vw] rounded-sm shadow-md shadow-baseCharcoal bg-no-repeat bg-cover "/> */}
                    <div className="pt-[2.5rem]">
                      <Image src={OPEN} alt='about image' className="h-[3.5rem] w-[3rem] "/>
                    </div>
                  {/* </Suspense> */}
                </div>
                <div className='w-[30vw] h-[40vh] ml-[20%] absolute pt-[85%] flex flex-row gap-5 items-center justify-end pb-[20%]'>
                  {/* <Suspense fallback="Loading..."> */}
                    <div className="pt-[2.5rem]">
                      <Image src={CLOSE} alt='about image' className="h-[5rem] w-[4.5rem] z-10 border-2 border-[black] rounded-lg"/>
                    </div>
                    <Image src={WORKING2} alt='about image' id="ripple-image-2"
                      className="bg-image h-[24rem] w-[19vw] z-10 rounded-sm shadow-md shadow-baseCharcoal "/>
                  {/* </Suspense> */}
                </div>
              </div>
              <div className="flex flex-col  pl-[10%] mt-[10%]" >
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
                <div className="flex flex-col gap-[1vw] py-[5vh]">
                  <div className="flex flex-row gap-[4vw]" >
                    <div className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                      <h3 className="font-extrabold text-baseGrey">
                      Name:
                      </h3> 
                      <p className="p-2 font-inter ">
                      Mario A. Castro
                      </p>
                    </div>
                    <div className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                      <h3 className="font-extrabold text-baseGrey">
                      Employment:
                      </h3> 
                      <p className="p-2 font-inter ">
                      Open
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[4vw]" >
                    <div className="flex justify-start py-[30px] h-[10vh] w-[20vw] flex-col text-baseCharcoal font-inter">   
                      <h3 className="font-extrabold text-baseGrey">
                      Email:
                      </h3> 
                      <p className="p-2 font-inter ">
                      Mcast2185@gmail.com
                      </p>
                    </div>
                    <div className="flex justify-start py-[30px] h-[10vh] w-[25vw] flex-col text-baseCharcoal font-inter">   
                      <h3 className="font-extrabold text-baseGrey">
                      Education:
                      </h3> 
                      <p className="p-2 font-inter ">
                      Bottega University: Full-Stack Developer Certification 
                      <br/>
                      Google UX Certification (In progress)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScaleOnScroll>
        </div>
      </div>

  )
}

export default About