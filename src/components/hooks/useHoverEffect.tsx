"use client";

import { useEffect } from "react";

const useHoverEffect = ((linkId: string) => {

  const toggleOn = (array: any[]) => {
    array.forEach((child: Element) => {
      child.className = "toggleAnimationOn ";
      document.querySelectorAll("#divider").forEach(child => child.className ="toggleAnimationOn");
    })
  };

  const toggleOff = (array: any[]) => {
    array.forEach((child: Element) => {
      child.className = "toggleAnimationOff";
      document.querySelectorAll("#divider").forEach(child => child.className ="toggleAnimationOff");
    })
  };

  useEffect(() => {
  const eventTrigger = () => {
    let arry: Element[] = [];
   
    for (let i = 0; document.querySelector("#nav-container")!.children.length > i; i++) {
      let child;
      child = document.querySelector("#nav-container")!.children[i];

      if (arry.length >= 4 ) {
        arry.slice(0,3);
      };
      
      if (child.id !== linkId) {
        if (arry.includes(child) || child.id === "divider" ) {
          continue;
        } else {
          arry.push(child);
        };
      };

      if (child.id === linkId) {
        child.addEventListener("mouseenter", () => {
          child!.className = `font-inter font-extralight text-[1.15rem] text-baseCharcoal hover:bg-[#cdcdcd] hover:bg-opacity-[.3] hover:rounded-[18px] 
            overflow-hidden hover:scale-[1.06] ease-in-out hover:font-normal transition-[500ms] hover:text-[22px] px-[8px] p-[6px] `;
          toggleOn(arry);
        });
        if (child) {
          child.addEventListener("mouseleave", () => {
            toggleOff(arry);
          });
        };
      };
    };
  };
    

  return eventTrigger();
  });

});

export default useHoverEffect;