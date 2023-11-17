'use client'
import BG from "../static/images/devbg.svg";
import PRO from "../static/images/propic.svg";
import React from 'react'
import Image from 'next/image';
import HomeTitle from '@/components/pageComponents/hometitle';
import { ScrollContent } from "@/components/pageComponents/scrollContent";
import Stagger from "@/components/functionality/stagger";
import About from "./about";

//potentially having this component as position absolute

const Home = () => {

  return (
    <div className="h-[100vh] w-[100vw] relative">
      <Image src={BG} 
        role="img"  
        alt="testing" 
        loading='eager' 
        style={{
          opacity: ".57",
          position: "fixed",
          zIndex: "-10",
          width: "120vw",
          height: "100vh",
          backgroundSize: "cover"
        }} 
      />
      <div className="">
        <HomeTitle/>
        <About/>
        {/* <ScrollContent/> */}
      </div>
    </div>
  )
}

export default Home;