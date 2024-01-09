'use client'
import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useAnimation, useTransform} from 'framer-motion';
import Lenis from '@studio-freight/lenis';

type Props = {
  children: React.JSX.Element | React.ReactNode
}

const ScaleOnScroll = ({children}: Props) => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  
  const {scrollYProgress} = useScroll();
  const ref = useRef(null);
  const staggerAnimation = useAnimation();
  const scale = useTransform(scrollYProgress, [0, .25], [.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, .25], [.25, 1]);
  const staggerControl = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div ref={ref} className=""
    >
      <motion.div
        style={{scale, opacity}}
        animate={staggerAnimation}
        variants={staggerControl}
        initial="hidden"
        whileInView="visible"
        >
        <motion.div style={{
          scaleY: scrollYProgress}}
        />
        {children}
      </motion.div>
    </div>
  )
}

export default ScaleOnScroll