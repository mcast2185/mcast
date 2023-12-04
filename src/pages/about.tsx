import React, { Suspense } from 'react'
import Image from 'next/image';
import WORKING from '/public/static/images/working.png';
import WORKING2 from '/public/static/images/working2.png';
import OPEN from '/public/static/images/opentag.png';
import CLOSE from '/public/static/images/closedtag.png';
import ScaleOnScroll from '@/components/functionality/scaleOnScroll';


// fix the positioning issue we are facing with the staggering images
// apply water ripple effects to both images
const About = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#ffff] bg-opacity-90'>
      <div className="py-[5vh]">
        <ScaleOnScroll>
          <div className='w-[100vw] h-[100%] flex flex-row ' >
            {/* <div className="flex flex-col"> */}
              <div className='w-[30vw] h-[100%] ml-[10%] relative flex flex-row gap-5 items-center'>
                <Suspense fallback="Loading...">
                  <Image src={OPEN} alt='about image' className="h-[5rem] w-[4.5rem] "/>
                  <Image src={WORKING} alt='about image' className="h-[65vh] w-[20vw] rounded-sm shadow-md shadow-baseCharcoal "/>
                </Suspense>
              </div>
              <div className='w-[30vw] h-[100%] pt-[40vh] flex flex-row gap-5 items-center'>
                <Suspense fallback="Loading...">
                  <Image src={WORKING2} alt='about image' className="h-[50vh] w-[22vw] z-10 rounded-sm shadow-md shadow-baseCharcoal "/>
                  <Image src={CLOSE} alt='about image' className="h-[3rem] w-[2.5rem] z-10 border-2 border-[black] rounded-lg"/>
                </Suspense>
              </div>
            {/* </div> */}
            <div className="flex flex-col  pl-[10%] mt-[10%]" >
              <h1 className="text-baseGrey text-7xl font-syne font-extrabold" >
                About
              </h1>
              <div className="w-[45vw] flex pl-[5%]">
                <p className="text-baseCharcoal text-xl font-inter font-light " >
                  I am a Front-end developer from San Diego CA who enjoys placing an artistic emphasis in my approach to creating websites.
                  My strength as a <i>Web Dev,</i> lies in producing fully functional web pages from out of conceptual designs, leveraging new, industry leading 
                  solutions that help build on the users experience. I aim to create equitable and aesthetically pleasing websites 
                  that ensures a smooth browsing experience to enjoy.
                </p>
              </div>
              <div className="flex flex-row gap-[5vw] py-[5vh]">
                {/* we need to rework the flex into row not column */}
                <div className="flex flex-col" >
                  <div className="flex justify-start py-[30px] flex-col text-baseCharcoal font-inter">   
                    <h3 className="font-extrabold">
                    Name:
                    </h3> 
                    <p className="p-2">
                    Mario A. Castro
                    </p>
                  </div>
                  <div className="flex justify-start py-[30px] flex-col text-baseCharcoal font-inter">   
                    <h3 className="font-extrabold">
                    Email:
                    </h3> 
                    <p className="p-2">
                    Mcast2185@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col" >
                  <div className="flex justify-start py-[30px] flex-col text-baseCharcoal font-inter">   
                    <h3 className="font-extrabold">
                    Education:
                    </h3> 
                    <p className="p-2">
                    Bottega University: Full-Stack Developer Certification 
                    <br/>
                    Google UX Certification (In progress)
                    </p>
                  </div>
                  <div className="flex justify-start py-[30px] flex-col text-baseCharcoal font-inter">   
                    <h3 className="font-extrabold">
                    Employment:
                    </h3> 
                    <p className="p-2">
                    Open
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