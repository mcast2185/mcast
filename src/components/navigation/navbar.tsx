'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LOGO from '/public/static/images/devlogo.svg'
import useHoverEffect from '../hooks/useHoverEffect';


const Navbar = () => {

  return (
    <div className="absolute z-10">
      <div className="w-[100vw] flex " >
        <div className="flex flex-start mt-[-15px] h-[140px]" >
          <Image src={LOGO} alt="" className="h-[100%] w-[17.5vw] "/>
        </div>
        <div className="w-[100%] h-[80px] pt-6 items-center absolute flex justify-center">
          <div className="w-[45vw] h-[100%] bg-[#ffffff] bg-opacity-95 drop-shadow shadow-[#5a5a5a] shadow-inner 
            rounded-[50px] flex flex-row px-[10px] gap-[3.5rem] items-centers justify-center" id="nav-container">

            <Link onMouseEnter={() => useHoverEffect("home")} href="/" id="home" 
            className="font-inter font-extralight text-[18px] text-baseCharcoal mt-[.8rem] overflow-hidden ">
                Home 
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("about")} href="/about" id="about" 
              className="font-inter font-extralight text-[18px] text-baseCharcoal mt-[.8rem] overflow-hidden">
                About
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("portfolio")} href="/portfolio" id="portfolio" 
              className="font-inter font-extralight text-[18px] text-baseCharcoal mt-[.8rem] overflow-hidden">
                Portfolio
            </Link>
            <p id="divider" className="flex items-center text-xs py-5"> | </p> 
            <Link onMouseEnter={() => useHoverEffect("contact")} href="/contact" id="contact" 
              className="font-inter font-extralight text-[18px] text-baseCharcoal mt-[.8rem] overflow-hidden">
                Contact
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;