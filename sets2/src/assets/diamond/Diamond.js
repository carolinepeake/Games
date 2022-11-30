import React from 'react';

export const Diamond = ({ color, shading, fill, stroke }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 68"
      width="50"
      height="100%"
    >
      <g stroke={color} strokeWidth={2} fill="none">
        <path d="M1,34 24,-5 47,34 24,73z"/>
      </g>
    </svg>
  );
};
