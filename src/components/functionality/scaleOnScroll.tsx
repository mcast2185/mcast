'use client'
import React, { useRef } from 'react';
import { useScroll, motion, useAnimation, useTransform} from 'framer-motion';

type Props = {
  children: React.JSX.Element | React.ReactNode
}

// evaluate what other properties need to be added to make a smoother transition for the stagger effect
// look into the easing function that we read on framers documentation, 

const ScaleOnScroll = ({children}: Props) => {
  const {scrollYProgress} = useScroll();
  const ref = useRef(null);
  const staggerAnimation = useAnimation();
  const scale = useTransform(scrollYProgress, [0, 1], [.5, 1]);
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
    <div ref={ref} className="flex 
      justify-center items-center w-[100vw] h-[100%]"
    >
      <motion.div
        style={{scale}}
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