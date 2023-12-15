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
  AnimatePresence
} from "framer-motion";
import { wrap } from "@motionone/utils";

import "../../styles/pageDivider.scss";
import { ArrangedImg, ArrangedImgTwo } from "../functionality/arrangedImg";


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

  let x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

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
  // 
  const hoverOver = () => {
    let scrollOne = document.querySelector("#xAxisLeft")!.firstElementChild as HTMLElement;
    scrollOne.style.contain = "inline-size";
    scrollOne.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    console.log(scrollOne);
  }

  const hoverOut = () => {
    let scrollOne = document.querySelector("#xAxisLeft")!.firstElementChild!.firstElementChild as HTMLElement;
    let css = " px-[20px]  hover_effect";

    scrollOne.style.contain = "inline-size";
    console.log(scrollOne);
  }


  return (
    <div className="parallax">
      <AnimatePresence>
      <motion.div 
        onHoverStart={() => hoverOver()}
        className="scroller" style={{ x, transition:"ease-in-out" }}>
        {children} 
        {children} 
        {children} 
        {children} 
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default function PageDivider() {
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {

    isLoaded(true);
  }, [isLoaded]);
    
  return (
    <section id="section" className="w-[100vw]">
      {loaded === true && (
        <ParallaxText baseVelocity={-1.2}>
          <div id="xAxisLeft" className="flex flex-row">
              {ArrangedImg.map((img, index) =>
                <div id={`skillImg_${index}`} key={index} className=' mr-[40px] placeholder-opacity-90' >
                  {img }
                </div>
              )}
          </div>
        </ParallaxText>
      )} 
      {loaded === true && (
        <ParallaxText baseVelocity={1.5}>
          <div id="xAxisRight" className="flex flex-row">
            {ArrangedImgTwo.map((img, index) => 
              <div id={`skillImg_${index}`} key={index} >
                {img}
              </div>
            )}
          </div>
        </ParallaxText>
        )} 
      </section>
  );
};
