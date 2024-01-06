'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { 
  useScroll, 
  motion, 
  useTransform, 
  useAnimation, 
  AnimatePresence 
} from 'framer-motion';


import LOGO from '/public/static/images/devlogo.svg';
import useHoverEffect from '../hooks/useHoverEffect';


const Navbar = () => {
  const ref = useRef(null);
  const [hovering, isHovering] = useState(false);
  const [element, getElement] = useState({
    el: "",
  });
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


  const OverEffect = useHoverEffect;

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  // }, []);

  OverEffect(element.el !== "" ? element.el: "");
  
  useEffect(()=> {
    document.body.querySelector("#home-header")?.setAttribute('ref', `${ref}`);
    // () => initiate
  },[]);

  return (
    <div id="navbar_header" className="absolute z-10 mb-[10%] scroll-smooth">
      <div className="w-[100vw] flex" >
        <div className="flex flex-start mt-[-15px] h-[140px]" >
          <Image src={LOGO} alt="" className="h-[100%] w-[17.5vw] "/>
        </div>
        <AnimatePresence mode="wait">
        <motion.div className="w-[100%] h-[80px] pt-6 items-center fixed flex overflow-hidden justify-center"
          style={{ opacity, scale}}
          animate={opacityAnimation}
          variants={opacityControl}
          initial="visible"
        >

          <div className="w-[45vw] h-[100%] bg-[#ffffff] bg-opacity-95 drop-shadow shadow-[#5a5a5a] shadow-inner 
            rounded-[50px] flex flex-row content-center px-[10px] gap-[3.5rem] items-center justify-center" id="nav-container">
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="#home_page" id="home" 
            className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Home 
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="#about_page" id="about" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                About
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="#portfolio_page" id="portfolio" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Portfolio
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id})}} href="#contact_page" id="contact" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Contact
            </Link>
          </div>

        </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;