import Image from 'next/image';
import React from 'react';
import BG from '/public/static/images/devbg.svg';

const Background = () => {
  return (
    <div className="m-0 p-0
      h-[100%] w-[100%] z-[-10] inset-0">
      <Image 
        src={BG} 
        role="img"  
        alt="testing" 
        priority
        loading='eager' 
        style={{
          opacity: "1",
          objectFit: 'cover',
          position: "fixed",
          zIndex: "-10",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }} 
      />
      </div>
  )
}

export default Background;