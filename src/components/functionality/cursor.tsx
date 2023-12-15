"use client";
const {useEffect, useState} = require('react');
const {useOnHover} = require("../hooks/onHover");
const {motion, useAnimation} = require('framer-motion');


interface Props {
  children: JSX.Element;
};
// we need to read more on "const moveEvent = new PointerEvent("pointermove");"
// to see how and where we should place there pointer events so that the page  
// itself can trigger warnings for me to interact with, no longer the othger way around.
//
export const StyledCursor = ({children}: Props) => {
  const cursorEventAnimation = useAnimation();
  const [cursorVariant, isCursorVariant] = useState("default");
  const [cursorTracker, isCursorTracker] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const cursorCoordinates = (ev: MouseEvent) => {
      isCursorTracker({
        x: ev.clientX,
        y: ev.clientY
      });
    };

    window.addEventListener("load", useOnHover);
    window.addEventListener("mousemove", cursorCoordinates);

    // return window.removeEventListener("mousemove", cursorCoordinates);
  }, [useOnHover]);

  const variants = {
    default: {
      x: cursorTracker.x - 18,
      y: cursorTracker.y -18
    },
    animate: {
      height: 150,
      width: 150,
      x: cursorTracker.x -75,
      y: cursorTracker.y -75,
      backgroundColor: "transparent"
    }
  };


  const variantEnter = () => cursorEventAnimation.start("animate");
  const variantLeave = () => cursorEventAnimation.start("default");


  return (
    // <div onMouseOver={variantEnter} onMouseOut={variantLeave} >
      <motion.div 
        initial="default"
        variants={variants}
        animate={cursorEventAnimation}  
      >
     {children}
    </motion.div>
    // </div>
  );
};