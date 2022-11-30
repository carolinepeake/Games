import React from 'react';
import '../Assets.css';

export const Oval = ({ color = "currentColor", shading = "broken" }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="100%"
      viewBox="0 0 48 68"
      stroke={color}
      strokeWidth={2}
    >
      <g className={shading}>
        <path d="M1,17 C1,-16 47,-16 47,17 V51 C47,84 1,84 1,51z"/>
      </g>
    </svg>
  );
};

