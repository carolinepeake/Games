import React from 'react';
import '../Assets.css';
// color = "currentColor",
export const Oval = ({ color, shading}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="100%"
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
          patternTransform="rotate(45 0 0)" // patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse">
          <line
            stroke="white"
            strokeWidth={6}
            x1="0"
            y1="0"
            x2="8"
            y2="0"
          />
        </pattern>
        <mask
          id="mask-stripe"
        // could use maskContentUnit or mask-border to set border
        //instead of repeating path below
        // could clip mask to size of the shape
        // should at some point learn how mask works and understand why stripes were dully colored for awhile
        // (maybe had a 50% opacity white layer on top?)
        // and why adding a black-filled line and then commenting it out made the mask stripes vibrant again (full opacity)
        >
          <path
            d="M1,17 C1,-16 47,-16 47,17 V51 C47,84 1,84 1,51z"
            fill="url(#pattern-stripe)"
            maskContentUnits="objectBoundingBox"
            fillOpacity={1}
          />
        </mask>
      </defs>
      <g
        // className={color}
        stroke={color}
        strokeWidth={2}
      >
        <path
          // color shading
          className={`${color} ${shading}`}
          // className={`${color} striped`}
          // stroke={color}
          // strokeWidth={2}
          paintOrder="fill"
          d="M3,15 C1,-16 47,-16 45,17 V49 C47,84 1,84 3,49z"
        />
        <path
          d="M3,15 C1,-16 47,-16 45,17 V49 C47,84 1,84 3,49z"
          // stroke={color}
          // strokeWidth={2}
          fill="none"
        />
      </g>
    </svg>
  );
};

