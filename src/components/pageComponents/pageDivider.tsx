'use client';
import React from 'react';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  AnimatePresence,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import "../../styles/pageDivider.scss";
import { ArrangedImg, ArrangedImgTwo } from "../functionality/arrangedImg";

interface ParallaxProps {
  children: string | React.ReactNode;
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
  let x = useTransform(baseX, (v) => `${wrap(-5, -55, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    };

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <AnimatePresence>
        <motion.div
          className="scroller" style={{ x, transition: "ease-in-out" }}>
          {children}
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


export default function PageDivider() {

  return (
    <>
    <motion.section
      exit={{opacity: 0}}
      transition={{ease: "easeInOut"}}
      id="section" className=" border-b-[2px] border-[#ffff] border-l-0 border-r-0 border-t-0 relative ">
        {/* <div className="absolute top-[-5vh] w-[100%] flex justify-center" >
        <div className=" w-[20vw] h-[8vh]  bg-baseRed bg-opacity-[.35] shadow-[#3c3c3c] shadow-lg 
            rounded-[20px] z-[10] flex content-center px-[10px] items-center justify-center scale-95" >
          <h3 className="font-MajorMonoDisplay font-bold text-3xl text-baseBeige flex justify-center">
            Known Skills:
          </h3>
        </div>
      </div> */}
      <ParallaxText baseVelocity={-1.2}>
        <div id="xAxisLeft" className="flex flex-row">
          {ArrangedImg.map((img: any, index: number) =>
            <div id={`skillImg_${index}`} key={index} className=' mr-[40px] placeholder-opacity-90' >
              {img}
            </div>
          )}
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={1.5}>
        <div id="xAxisRight" className="flex flex-row">
          {ArrangedImgTwo.map((img: any, index: number) =>
            <div id={`skillImg_${index}`} key={index} >
              {img}
            </div>
          )}
        </div>
      </ParallaxText>
    </motion.section>
          </>
  );
};
