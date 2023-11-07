import { customData } from '@/types/customData';
import React from 'react';
import ScrollFunction from './scrollFunction';


// import { useScroll, useTransform, motion} from 'framer-motion';
// import Image from 'next/image';
// import Home from '../../pages/home';
// import Lenis from '@studio-freight/lenis';
// import useDimension from '@/components/hooks/useDimension';



export const Projects = () => {

 return (
  <section>
   <header>My Projects</header>
   <div >
    {customData.map((data, index) => (
      <React.Fragment key={index}>
        {/* <ScrollFunction {... data}/> */}
      </React.Fragment>
    ))}
   </div>
  </section>
 )
};