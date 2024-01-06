import { customData } from '@/types/customData';
import React from 'react';


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