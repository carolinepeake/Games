import React from 'react';
// import '../Assets.css';
// color = "currentColor",
export const Oval = ({ color, shading, shape }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="50"
      // height="100%"
      version="1.0"
      viewBox="0 0 48 68"
      x="0"
      y="0"
      stroke={color}
      strokeWidth={2}
      width="80%"
      height="100%"
    >
      <defs>
        <pattern
          id='pattern-stripe'
          width="8"
          height="8"
          // patternTransform="rotate(45 0 0)"
          patternTransform="rotate(45)"
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
          <rect
            x="-10"
            y="-14"
            width="60"
            height="100"
            fill="url(#pattern-stripe)"
            maskContentUnits="objectBoundingBox"
            // fillOpacity={1}
          />
        </mask>
      </defs>
      <g
        // stroke={color}
        // strokeWidth={2}
      >
        <path
          // className={`${color} ${shading}`}
          paintOrder="fill"
          d={shape}
          fill={ shading === 'open' ? 'none' : `${color}`}
          mask={ shading === 'striped' ? 'url(#mask-stripe)' : ''}
        />
        <path
          d={shape}
          fill="none"
        />
      </g>
    </svg>
  );
};

