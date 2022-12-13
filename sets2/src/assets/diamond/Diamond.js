import React from 'react';
import '../Assets.css';

export const Diamond = ({ color, shading, shape }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 68"
      width="50"
      height="100%"
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
        {/* <pattern
          id='pattern-open'
          width="8"
          height="8"
          patternUnits="userSpaceOnUse">
          <line
            // stroke="white"
            // strokeWidth={1}
            x1="0"
            y1="0"
            x2="8"
            y2="0"
            // fill="white"
          />
        </pattern> */}
        <mask
          id="mask-stripe"
          >
          <rect
            // d="M1,34 24,-5 47,34 24,73z"
            // d={shape}
            x="-10"
            y="-14"
            width="60"
            height="100"
            fill="url(#pattern-stripe)"
            maskContentUnits="objectBoundingBox"
            fillOpacity={1}
          />
        </mask>
        {/* <mask
          id="mask-open"
        >
          <path
            d="M1,34 24,-5 47,34 24,73z"
            fill="url(#pattern-open)"
            maskContentUnits="objectBoundingBox"
            fillOpacity={1}
          />
        </mask> */}
      </defs>
      <g
        stroke={color}
        strokeWidth={2}
      // fill="none"
      >
        <path
          className={`${color} ${shading}`}
          paintOrder="fill"
          // d="M1,34 24,-5 47,34 24,73z"
          d={shape}
        />
        <path
          fill="none"
          // d="M1,34 24,-5 47,34 24,73z"
          d={shape}
        />
      </g>
    </svg>
  );
};
