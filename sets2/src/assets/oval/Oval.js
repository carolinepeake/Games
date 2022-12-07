import React from 'react';
import '../Assets.css';
// color = "currentColor",
export const Oval = ({ color, shading}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="100%"
      // height="100"
      viewBox="0 0 48 68"
      stroke={color}
      strokeWidth={2}
      x="0"
      y="0"
    >
      <defs>
                <pattern
                  id='pattern-stripe'
                  width="8"
                  height="8"
                  // stroke="black" strokeWidth={2}
                  patternTransform="rotate(45 0 0)"
                  // patternTransform="rotate(45)"
                  patternUnits="userSpaceOnUse">
                   {/* <path d="M0 0h1000v1000H0zM1000 0h1000v1000H1000z"
                  //  stroke={color}
                  //  stroke="white"
                  stroke="yellow"
                  //  strokeWidth={4}
                  //  fill-opacity="0.2"
                   fill="yellow"
                   /> */}
                   <line
                  //  stroke="yellow"
                   strokeWidth={8}
                   x1="0"
                   y1="0"
                   x2="8"
                   y2="0"
                   />
                   {/* <path fill="yellow" d="M0 1000h1000v1000H0zM1000 1000h1000v1000H1000z"/> */}
                   {/* <rect fill="white" width="4" height="8" stroke="none"
                   transform="translate(0,0)"
                   /> */}
                </pattern>
                <mask id="mask-stripe">
                  <path
                   d="M1,17 C1,-16 47,-16 47,17 V51 C47,84 1,84 1,51z"
                   fill="url(#pattern-stripe)" stroke="black" strokeWidth={2}
                   fill-opacity="1"

                  />
                  {/* <rect x="2" y="2" width="100%" height="100%" fill="url(#pattern-stripe)" stroke="none"/> */}
                </mask>
              </defs>
      {/* <g
      // className={shading}
        className={color}
      > */}
        <path
          // className="striped green"
        // className={color}
        //  className={`${color === 'red' ? "red" : color === 'green' ? "green" : "purple"} ${shading === 'striped' ? "striped" : shading === 'open' ? "open" : "full"}`}
        className={`striped ${color}`}
        stroke={color}
        // className="striped"
        d="M3,15 C1,-16 47,-16 45,17 V49 C47,84 1,84 3,49z"
        // fill={color}
        // fill={`url(#pattern-stripe) ${color}`}
        //  fill="url(#mask-stripe)"
        // fill={shading === 'full' ? `${color}` : shading === 'striped' ? 'url(#diagonal-hatched)' : 'none'}
        />
      {/* </g> */}
    </svg>
  );
};

