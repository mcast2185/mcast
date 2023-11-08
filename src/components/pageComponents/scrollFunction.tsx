'use client';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { customData } from '@/types/customData';

type customDataProps = (typeof customData)[number];

// for the offset property, the value should be an array containing two string values.
// the first string contains two numeric values, no comma. the first number is 0 which
// represents the bottom of the viewport, the second number 1 represents the top of the target
// and is activated once the viewport crosses into that target. 
// the second string value containse a similar set of numbers. the first number 1.33 
// triggers animation end 33% past the end point of our target

const ScrollFunction = (
  // {title, desc, tags, imageUrl}: customDataProps
  )=> {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  return (
    <motion.div ref={ref} style={{
      scale:  scrollYProgress,
      opacity: scrollYProgress,
    }} className="mb-3 sm:mb-8 last:mb:-0">
    <section
      className="group bg-gray-100 max-w-[42rem]
      border border-black/5 overflow-hidden
      sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8
      last:mb-0 even:pl-8 hover:bg-gray-200 transition"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2
      sm:pt-10 sm:max-w-[50%] flex flex-col h-full
      group-even:ml-[18rem]">
        ...
      </div>
      <Image
        src={''}
        alt="scroll"
        quality={95}
        className='absolute top-8 -right-40 
        w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial]
        group-even:-left-40'
      />
    </section>
    </motion.div>
  )
}

export default ScrollFunction;