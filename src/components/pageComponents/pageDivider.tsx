'use client';
import "../../styles/pageDivider.scss";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

import React from 'react';
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
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: true
  });


  // This is a magic wrapping for the length of the text - you
  // have to replace for wrapping that works for you or dynamically
  // calculate

  const x = useTransform(baseX, (v) => `${wrap(-29, -59, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    
    // This is what changes the direction of the scroll once we
    // switch scrolling directions.

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    };

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  
  // The number of times to repeat the child text should be dynamically calculated
  // based on the size of the text and viewport. Likewise, the x motion value is
  // currently wrapped between -20 and -45% - this 25% is derived from the fact
  // we have four children (100% / 4). This would also want deriving from the
  // dynamically generated number of children.
  
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children} 
        {children} 
        <span id="span">{children} </span>
        <span id="span">{children} </span>
        {/* <span id="span">{children} </span> */}
        {/* <span id="span">{children} </span> */}
      </motion.div>
    </div>
  );
};

export default function PageDivider() {
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    if (ArrangedImg && ArrangedImgTwo) {
      isLoaded(true);
    };
  }, [ArrangedImg, ArrangedImgTwo]);
  
  return (
    <section id="section">
      <ParallaxText baseVelocity={-2}>
        <div className="flex flex-row ">
          {loaded === true && 
          ArrangedImg.map((img, index) =>
            <div className="mx-[45px]">
              {ArrangedImg[index]}
            </div>
          )}
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={3}>
        <div className="flex flex-row">
          {loaded === true && 
          ArrangedImgTwo.map((img, index) =>
            <div className="mx-[45px] ">
              {img}
            </div>
          )}
        </div>
      </ParallaxText>
    </section>
  );
};
