import { easeInOut } from "framer-motion";

const {useEffect, useState, useRef} = require('react');

const imageSection = document.querySelector("#section");

imageSection?.addEventListener("mouseenter", ( event )=> {
  let eventTracker = event?.currentTarget!
  eventTracker.dispatchEvent(event);

  let counterXaxis = document.querySelector("#imgWrapper")?.scroll({X}}, 
    easeInOut);
    x = window.scroll();

   eventTracker?.addEventListener("mouseenter", event => {

     event.currentTarget!
  })

})

export const useAxisTracker = () => {
  const axisX = () => {

  }
}