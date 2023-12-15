const {useEffect, useState} = require('react');
const {motion, useAnimation, useScroll} = require('framer-motion');

export const useOnHover = () => {
  const [cursorVariant, isCursorVariant] = useState("default");
    document.querySelectorAll("h1").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    });

    document.querySelectorAll("h2").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    });

    document.querySelectorAll("h3").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    }); 
    
    document.querySelectorAll("img").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    });

    document.querySelectorAll("a").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    });

    document.querySelectorAll("button").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOut", `${isCursorVariant("default")}`);
    });

    document.querySelectorAll("ul").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOout", `${isCursorVariant("default")}`);
    });

      document.querySelectorAll("li").forEach((el: Element) => {
      el.setAttribute("onMouseOver", `${isCursorVariant("animate")}`);
      el.setAttribute("onMouseOout", `${isCursorVariant("default")}`);
    });

    console.log("onHoverHook: ", cursorVariant)
};

export const OffHover = () => {
  const [cursorVariant, isCursorVariant] = useState("default");
  document.addEventListener("mouseover", (ev: MouseEvent) => {
    ev.target?.addEventListener("mouseover", () => {
      isCursorVariant("default")
    })
  })
};