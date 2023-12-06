// const {useEffect, useState} = require('react');
import { useEffect } from "react";




const useHoverEffect = ((linkId: string) => {
  const _links = document.querySelector("#nav-container");

  const toggleOn = (array: any[]) => {
    console.log("updated array: ", array);
  };


  const toggleOff = (array: any[]) => {
    console.log('testing mouse leave', array)
  };


  
  const eventTrigger = () => {
    let arry: Element[] = [];

      
      
      for (let i = 0; document.querySelector("#nav-container")!.children.length > i; i++) {
        let child = null;
        child = document.querySelector("#nav-container")!.children[i];

        if (arry.length >= 4 ) {
          arry.slice(0,3);
          console.log("array condition met: ", arry.slice(0,3));
        };
        
        if (child.id !== linkId) {
          if (arry.includes(child) || child.id === "divider" ) {
            console.log("continue statement triggered by conditional element");
            continue;
          } else {
            arry.push(child);
            console.log(`child element #${i} pushed: `, child.id);
          };
        };

        if (child.id === linkId) {
          child.addEventListener("mouseenter", () => {
            toggleOn(arry);
          });
          child.addEventListener("onmouseleave", () => {
            toggleOff(arry);
          });
        };

      // let updatedArray = arry.filter(()=>{
      //   arry.forEach((el)=> {
      //     let filteredArray = []; 
      //     el.id !== linkId ? filteredArray.push(el) : console.log('event trigger error');
      //     return filteredArray;
      //   });
      // });

      // if (child.id === linkId) {
      //   child.addEventListener("mouseenter", () => {
      //     toggleOn(updatedArray);
      //   });
      //   child.addEventListener("mouseleave", () => {
      //     toggleOff(updatedArray);
      //   });
      // };

    };
  };
    

  return eventTrigger();

});

export default useHoverEffect;