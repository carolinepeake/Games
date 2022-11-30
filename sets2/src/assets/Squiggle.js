import React from 'react';

export const Squiggle = ({ color, shading }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 68"
      width="100%"
      height="100%"
      >
      <g stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">

      <path d="M40,67 C11,55 11,50 19,34 S 34,24 15,1 S 19,-5 40,3 S 20,15 19,17"/>
      {/* <path d="M 2.5 20 C 10 2.5, 16 2.5, 22 20 S 37 37, 45 45"/> */}

      {/* <path d="M3188 4809 c-1748 -874 -3178 -1591 -3178 -1594 0 -3 1445 -727 3210
       -1610 l3210 -1605 3180 1590 c1749 875 3180 1592 3180 1595 0 4 -6416 3216
       -6422 3214 -2 0 -1433 -715 -3180 -1590z"/> */}

     </g>

    </svg>
  );
};