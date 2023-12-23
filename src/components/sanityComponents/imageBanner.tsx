import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

// import { client } from '@/lib/sanity.client';
import {Images} from '../../../typings';

type Props = {
  images: Images[]
};

const ImageBanner = ({images}: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const primary: any[] = [];
  const secondary: any[] = [];
  const inView = useInView(ref);
  
  images.map(img => {
    if (img.categories[0].title === "Primary") primary.push(img);
    else if (img.categories[0].title === "Secondary") secondary.push(img);
  });

  const componentInView = () => {
    if (!inView) {
      controls.stop();
    }
    else if (inView) {
      controls.start(i => ({
      x: i < primary.length ? '100vw' : '-100vw',
      transition: { duration: 5, repeat: Infinity, repeatType: 'loop' }
    }))
    }
  }
  useEffect(() => {
    // Start the animation when the component mounts
    controls.start(i => ({
      x: i < primary.length ? '100vw' : '-100vw',
      transition: { duration: 5, repeat: Infinity, repeatType: 'loop' }
    }));

    document.querySelector("#imgBanner")!.addEventListener("visibilitychange", (ev) => {
      componentInView();
    })
  }, [controls]);

  return (
    <div id="imgBanner" ref={ref} className="h-15vh w-100vw overflow-hidden">
      {primary.concat(secondary).map((src, i) => (
        <motion.div
          custom={i}
          animate={controls}
          initial={{ x: i < primary.length ? '12%' : '8%' }}
          className={`absolute ${i < primary.length ? 'top-0' : 'bottom-0'}
            ${i < primary.length ? 'h-85% w-1/2' : 'h-85% w-2/5'}
            ${i < primary.length ? 'mr-20 ml-20' : 'mr-25 ml-25'}`}>
          <img src={src} alt={`banner${i}`} className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageBanner;