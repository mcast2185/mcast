"use client"
import React, {useEffect, useRef} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Lenis from '@studio-freight/lenis';

import useDimension from '@/components/hooks/useDimension';
import styles from "../../styles/scrollContent.module.scss";


import CODE from '/public/static/images/code.png';
import CODE2 from '/public/static/images/code2.png';
import WORK from '/public/static/images/work.png';
import WORK2 from '/public/static/images/work2.png';
import HOME from '/public/static/images/homesetup.png';
import HOME2 from '/public/static/images/homesetup2.png';
import MAC from '/public/static/images/mac.png';
import MAC2 from '/public/static/images/mac2.png';
import MATRIX from '/public/static/images/matrix1.png';
import MATRIX2 from '/public/static/images/matrix2.png';
import MATRIX3 from '/public/static/images/matrix3.png';
import MATRIX4 from '/public/static/images/matrix4.png';


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
    CODE2,
    WORK2,
    HOME2,
    MATRIX4,
    MATRIX3,
    MAC2,
  ];
  
  const {height} = useDimension();
  console.log(height)
  const {scrollYProgress} = useScroll({
    target: columnRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [0,height * 2.21]);
  const y2 = useTransform(scrollYProgress, [0,1], [0, height * .5]);
  const y3 = useTransform(scrollYProgress, [0,1], [0,height * 1.2]);
  const y4 = useTransform(scrollYProgress, [0,1], [0, height * .39]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);
  }, [])

  return (
  <div className="flex justify-center" >
    <div className={styles.spacer}></div>
    <div className={styles.gallery}>
      <ColumnComponent images={[importedImages[0], importedImages[1], importedImages[2]]} y={y}/>
      <ColumnComponent images={[importedImages[3], importedImages[4], importedImages[5]]} y={y2}/>
      <ColumnComponent images={[importedImages[6], importedImages[7], importedImages[8]]} y={y3}/>
      <ColumnComponent images={[importedImages[9], importedImages[10],importedImages[11]]} y={y4}/>
    </div>
    <div className={styles.spacer}></div>
  </div>)
};


const ColumnComponent = ({images, y=0}:  any[any]) => {
  return (
    <motion.div
     style={{y}} 
     className={styles.column}>
      {
        images.map((src: HTMLImageElement, index: number) =>{
          return <div key={index} className={styles.imageContainer}>
            <Image
              fill
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