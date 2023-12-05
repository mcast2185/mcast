// 'use client'
// import React, { useEffect, useRef } from 'react';
// import * as PIXI from 'pixi.js';
// import { Filter } from '@pixi/core';


// const RippleImage = ({src, className, alt }: any ) => {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (typeof window !== 'undefined' && ref.current) {
//       const appOptions = {
//         width: ref.current?.offsetWidth,
//         height: ref.current?.offsetHeight,
//         transparent: true,
//       };

//       const app: any = new PIXI.Application(appOptions);
//       ref.current!.appendChild(app.view);
    
//       const texture = PIXI.Texture.from(src);  

//       texture.baseTexture.on('loaded', () => {
//         const sprite = new PIXI.Sprite(texture);
//         sprite.width = ref.current!.offsetWidth;
//         sprite.height = ref.current!.offsetHeight;
//         app.stage.addChild(sprite);
  
//         // Shader logic for ripple effect
//         const fragmentShader = `
//           precision mediump float;
//           varying vec2 vTextureCoord;
//           uniform sampler2D uSampler;
//           uniform float time;
//           void main() {
//               vec2 uv = vTextureCoord;
//               uv.y += (sin(uv.x * 10.0 + time) * 0.005);
//               gl_FragColor = texture2D(uSampler, uv);
//           }
//         `;
  
//         const rippleFilter = new Filter(undefined, fragmentShader, { time: 0 });
//         sprite.filters = [rippleFilter];
  
//         app.ticker.add((delta: number) => {
//           rippleFilter.uniforms.time += delta * 0.05;
//         });
//         sprite.eventMode = 'dynamic'
//         sprite.on('mouseover', () => {
//           app.ticker.start();
//         });
//         sprite.on('mouseout', () => {
//           app.ticker.stop();
//         });
//       })

//       return () => {
//         app.destroy(true, true);
//       };
//     }
//   }, [src]);

//   return <div ref={ref} className="ripple-container"></div>;
// };

// export default RippleImage;