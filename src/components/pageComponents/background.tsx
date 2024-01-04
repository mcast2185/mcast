import Image from 'next/image';
import React from 'react';
import BG from '/public/static/images/devbg.svg';

const Background = () => {
  return (
    <div className="m-0 p-0
       z-[-10] inset-0">
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
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw"
        }} 
      />
      </div>
  )
}

export default Background;