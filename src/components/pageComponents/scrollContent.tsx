"use client"
import React, {useEffect, useRef} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import Lenis from '@studio-freight/lenis';
import useDimension from '@/components/hooks/useDimension';


import CODE from '../../static/images/code.png';
import CODE2 from '../../static/images/code2.png';
import WORK from '../../static/images/work.png';
import WORK2 from '../../static/images/work2.png';
import HOME from '../../static/images/homesetup.png';
import HOME2 from '../../static/images/homesetup2.png';
import MAC from '../../static/images/mac.png';
import MAC2 from '../../static/images/mac2.png';
import MATRIX from '../../static/images/matrix1.png';
import MATRIX2 from '../../static/images/matrix2.png';
import MATRIX3 from '../../static/images/matrix3.png';
import MATRIX4 from '../../static/images/matrix4.png';





export const ScrollContent = () => {
  const columnRef = useRef(null);
  console.log()

  const images: string[] = [
    'code.png', 
    'matrix1.png', 
    'mac.png',
    'homesetup.png',
    'work.png',
    'matrix2.png',
    'matrix3.png',
    'homesetup2.png',
    'code2.png',
    'work2.png',
    'matrix4.png',
    'mac2.png',
  ];

  const importedImages: StaticImageData[] = [
    CODE,
    MATRIX,
    MAC,
    HOME,
    WORK,
    MATRIX2,
    MATRIX3,
    WORK2,
    CODE2,
    HOME2,
    MATRIX4,
    MAC2,
  ];
  
  const {height} = useDimension();
  console.log(height)
  const {scrollYProgress} = useScroll({
    target: columnRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [0,height * 2]);
  const y2 = useTransform(scrollYProgress, [0,1], [0, height * 3.25]);
  const y3 = useTransform(scrollYProgress, [0,1], [0,height * 1.45]);
  const y4 = useTransform(scrollYProgress, [0,1], [0, height * 2.8]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);
  }, [])

  return (
  <div className="main" >
    <div className="spacer"></div>
    <div className="gallery">
      <ColumnComponent images={[importedImages[0], importedImages[1], importedImages[2]]} y={y}/>
      <ColumnComponent images={[importedImages[3], importedImages[4], importedImages[5]]} y={y2}/>
      <ColumnComponent images={[importedImages[6], importedImages[7], importedImages[8]]} y={y3}/>
      <ColumnComponent images={[importedImages[9], importedImages[10],importedImages[11]]} y={y4}/>
    </div>
    <div className="spacer"></div>
  </div>)
  // return (
  // <div className="main" >
  //   <div className="spacer"></div>
  //   <div className="gallery">
  //     <ColumnComponent images={[images[0], images[1], images[2]]} y={y}/>
  //     <ColumnComponent images={[images[3], images[4], images[5]]} y={y2}/>
  //     <ColumnComponent images={[images[6], images[7], images[8]]} y={y3}/>
  //     <ColumnComponent images={[images[9], images[10], images[11]]} y={y4}/>
  //   </div>
  //   <div className="spacer"></div>
  // </div>)
};




const ColumnComponent = ({images, y=0}: any[any]) => {
  return (
    <motion.div style={{y}} className="column">
      {
        images.map((src: HTMLImageElement, index: number) =>{
          return <div key={index} className="imageContainer">
            <Image 
              style={{
                width: "250px",
                height: "500px",
                objectFit: "cover"
              }}

              height={500}
              width={250}
              sizes="(min-width: 1200px) 250px, (max-width: 1600px) 250px"
              src={src}
              quality={80}
              alt="images"
              />
          </div>
        })
      }
    </motion.div>
  );
};