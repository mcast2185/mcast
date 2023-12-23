'use client';
import React from 'react';
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  AnimatePresence,
  useInView
} from "framer-motion";
// import Image from 'next/image';
import { wrap } from "@motionone/utils";

import "../../styles/pageDivider.scss";
import { ArrangedImg, ArrangedImgTwo } from "../functionality/arrangedImg";

import { Images } from '../../../typings';
// import urlFor from '@/lib/urlFor';



type Props = {
  images: Images[];
};

interface ParallaxProps {
  children: string | React.ReactNode ;
  baseVelocity: number;
};

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 5], {
    clamp: true
  });

  // let x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  let x = useTransform(baseX, (v) => `${wrap(-5, -15, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1300);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    };

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // correcting the logic to pause animation on hover
  
  // useEffect(() => {

  // })

  return (
    <div className="parallax">
      <AnimatePresence>
      <motion.div 
        className="scroller" style={{ x, transition:"ease-in-out" }}>
        {children} 
        {children} 
        {/* {children}  */}
        {/* {children}  */}
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default function PageDivider({images}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [visible, isVisible] = useState(false);
  // let ArrangedImg: any = [];
  // let ArrangedImgTwo: any = [];


  // images.map((img) => {
  //    if (img.categories[0].title === "Primary") ArrangedImg.push(img);
  //    if (img.categories[0].title === "Secondary") ArrangedImgTwo.push(img);

  // })
 
  useEffect(() => {





    if (document.querySelector("#section")?.checkVisibility() !== true){
      isVisible(false);
    }
    if (document.querySelector("#section")?.checkVisibility() === true) {
      isVisible(true);
    }

  }, [isVisible]);
    
  return (
    <section id="section" className="w-[100vw]">
      {visible === true && (
        <ParallaxText baseVelocity={-1.2}>
          <div id="xAxisLeft" className="flex flex-row">
              {ArrangedImg.map((img: any, index: number) =>
                <div id={`skillImg_${index}`} key={index} className=' mr-[40px] placeholder-opacity-90' >
                  {img }
                  {/* <Image ref={ref} priority src={img!.url} width={25} height={45} className="!h-[85%] !w-[50%] mx-[80px]" alt="" /> */}
                </div>
              )}
          </div>
        </ParallaxText>
      )} 
      {visible === true && (
        <ParallaxText baseVelocity={1.5}>
          <div id="xAxisRight" className="flex flex-row">
            {ArrangedImgTwo.map((img: any, index: number) => 
              <div id={`skillImg_${index}`} key={index} >
                {img}
                {/* <Image priority src={urlFor(img!.url).url()} width={25} height={45} className="!h-[85%] !w-[30%] mx-[100px]" alt="" /> */}
              </div>
            )}
          </div>
        </ParallaxText>
      )} 
      {/* {visible !== true && <section id="section" className="w-[100vw]"/>} */}
      {/* <FetchedImages images={images} /> */}
      </section>
  );
};
