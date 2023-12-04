'use client';
import BG from "/public/static/images/devbg.svg";
import React from 'react'
import Image from 'next/image';
import HomeTitle from '@/components/pageComponents/hometitle';

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
      </div>
    </div>
  )
}

export default Home;