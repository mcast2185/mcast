import React, {useEffect, useRef} from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import Image from 'next/image';
import Home from '../../pages/home';
import Lenis from '@studio-freight/lenis';
import useDimension from '@/components/hooks/useDimension';



export const scrollContent = () => {
  const columnRef = useRef(null);
  const images: any[] = ['../']
  const {height} = useDimension();
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
      <ColumnComponent images={[images[0], images[1], images[2]]} y={y}/>
      <ColumnComponent images={[images[3], images[4], images[5]]} y={y2}/>
      <ColumnComponent images={[images[6], images[7], images[8]]} y={y3}/>
      <ColumnComponent images={[images[9], images[10], images[11]]} y={y4}/>
    </div>
    <div className="spacer"></div>
  </div>)
};




const ColumnComponent = ({images, y=0}: any[any]) => {
  return (
    <motion.div style={{y}} className="column">
      {
        images.map((src: Element, index: number) =>{
          return <div key={index} className="imageContainer">
            <Image 
              src={`/images${src}`}
              fill
              alt=""
              />
          </div>
        })
      }
    </motion.div>
  );
};