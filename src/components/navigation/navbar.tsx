'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import LOGO from '/public/static/images/devlogo.svg';
import useHoverEffect from '../hooks/useHoverEffect';
import { json } from 'stream/consumers';

import { useScroll, motion, useTransform, useAnimation, useInView, addPointerEvent } from 'framer-motion';

const Navbar = () => {
  const ref = useRef(null);
  const view = useInView(ref);
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

  const initiate = async (req: Request, res: Response) => {
    let storedData = await fetch(req.cache).then(response => {
      return response.body
    });

    let response = JSON.stringify(storedData);
    res = JSON.parse(response);
    console.log("response: ",res)
    return res;
  };

  OverEffect(element.el !== "" ? element.el: "");
  
  useEffect(()=> {
    document.querySelector("#home-header")!.setAttribute('ref', `${ref}`);
    () => initiate

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
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="/" id="home" 
            className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Home 
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="/about" id="about" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                About
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id}) }} href="/portfolio" id="portfolio" 
              className="font-inter font-extralight text-[1.15rem] text-baseCharcoal rounded-[18px] overflow-hidden">
                Portfolio
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseLeave={(ev) => isHovering(false)} onMouseEnter={(ev) => { isHovering(true); getElement({el: ev.currentTarget.id})}} href="/contact" id="contact" 
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