'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import LOGO from '/public/static/images/devlogo.svg';
import useHoverEffect from '../hooks/useHoverEffect';
import { useScroll, motion, useTransform, useAnimation, useInView } from 'framer-motion';


const Navbar = () => {
  const ref = useRef(null);
  const view = useInView(ref);
  const opacityAnimation = useAnimation();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 .33", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, .19], [3.8, 0]);
  const scale = useTransform(scrollYProgress, [0, .55], [1.12, 0]);
  const opacityControl = {
    hidden: {
      opacity: 0,
      scale: .8,
      zIndex: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
    }
  };
  useEffect(()=> {
    document.querySelector("#home-header")!.setAttribute('ref', `${ref}`);
  },[]);

  return (
    <div className="absolute z-10 mb-[10%]">
      <div className="w-[100vw] flex" >
        <div className="flex flex-start mt-[-15px] h-[140px]" >
          <Image src={LOGO} alt="" className="h-[100%] w-[17.5vw] "/>
        </div>
        <motion.div className="w-[100%] h-[80px] pt-6 items-center fixed flex overflow-hidden justify-center"
          style={{ opacity, scale}}
          animate={opacityAnimation}
          variants={opacityControl}
          initial="visible"
        >

          <div className="w-[45vw] h-[100%] bg-[#ffffff] bg-opacity-95 drop-shadow shadow-[#5a5a5a] shadow-inner 
            rounded-[50px] flex flex-row content-center px-[10px] gap-[3.5rem] items-center justify-center" id="nav-container">
            <Link onMouseEnter={() => useHoverEffect("home")} href="/" id="home" 
            className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Home 
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("about")} href="/about" id="about" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                About
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("portfolio")} href="/portfolio" id="portfolio" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Portfolio
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("contact")} href="/contact" id="contact" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Contact
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;