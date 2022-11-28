import React from 'react';
import { Hatching } from './Hatching';

export const Diamond = ({ color, shading }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    // width="1280.000000pt" height="640.000000pt"
    width="50"
    height="100"
    viewBox="0 0 1280.000000 640.000000"
    // viewBox="0 0 33.000000 11.000000"
    preserveAspectRatio="xMidYMid meet">
        {/* <defs>
            <pattern id="pattern-stripe"
              width="1000" height="1000"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)">
              <rect width="500" height="500" transform="translate(0,0)" fill="white"></rect>
            </pattern>
            <mask id="mask-stripe">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
            </mask>
          </defs> */}
      {/* <pattern id="diagonal-hatch" width="2000" height="2000"
      patternTransform="rotate(45 0 0)"
      patternUnits="userSpaceOnUse">
        {/* <line x1= */}
        {/* <line x1="0" y1="1000" x2="2000" y2="1000" style={{ stroke: `${color}`, strokeWidth: "1000" }}/> */}
        {/* <rect x="0" y="0" width="1000" height="1000" fill={color}/>
        <rect x="1000" y="0" width="1000" height="1000" fill={color}/>
        <rect x="0" y="1000" width="1000" height="1000" fill="white"/>
        <rect x="1000" y="1000" width="1000" height="1000" fill="white"/>
      </pattern> */}
      {color && <Hatching fillColor={color}/>}
      {/* <pattern id="diagonal-hatch" patternUnits="userSpaceOnUse" width="80" height="80" viewbox="0 0 100 100">
        <path
         d="M-1,1 l2,-2
            M0,4 l4,-4
            M3,5 l2,-2"
          style={{ stroke: "black", strokeWidth: "20%" }}
        />
      </pattern> */}
      <g
      transform="translate(640.000000,640.000000) scale(0.100000,-0.100000) rotate(90)"
      // transform="translate(640.000000,640.000000) scale(0.10000,-0.10000) rotate(90)"
      // fill={color}
      // fill="url(#diagonal-hatch)"
      // mask="url(#mask-stripe)"
      style={{ stroke: `${color}`, strokeWidth: '250', fill: shading === 'solid' ? `${color}` : shading === 'striped' ? 'url(#diagonal-hatch)' : shading === 'open' ? 'none' : 'black' }}
      // stroke={color}
      >
      <path d="M3188 4809 c-1748 -874 -3178 -1591 -3178 -1594 0 -3 1445 -727 3210
      -1610 l3210 -1605 3180 1590 c1749 875 3180 1592 3180 1595 0 4 -6416 3216
      -6422 3214 -2 0 -1433 -715 -3180 -1590z"/>
      </g>
    </svg>
  );
};
