// const {React, useEffect} = require("react");
// const {ReactDOM} = require("react-dom/client");
// const {Router, Routes, Route} = require("react-router-dom");
// const App = require("../../app")
// // import ReactDOM from "react-dom/client";
// // const {ReactDOM} = DOM;

// export function useReactDom() {
//   function ReactDom() {
//     // const [loaded, isLoaded] = useState(false);
//     const elementState: any[] = [];
  
//     const domRootElement = (reactRoot: DocumentFragment | HTMLElement) => {
//       reactRoot = document.createDocumentFragment().getElementById("root") as DocumentFragment | HTMLElement;
//       let root = ReactDOM.createRoot(reactRoot);
  
//       return { root };
//     };
  
//     let reactRoot: DocumentFragment | HTMLElement;
  
//     useEffect(() => document.addEventListener("DOMContentLoaded", (ev) => {
//       console.log("domEl event: ", ev);
//       // if (ev) return isLoaded(true);

//       domRootElement(reactRoot);
//       let { root } = domRootElement(reactRoot);
//       elementState.push(root)
//     }));

//     console.log(elementState);
//     let finalRootEl = elementState[0];

//     return finalRootEl;
//   };
//   console.log(ReactDom());
// }