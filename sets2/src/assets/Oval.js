import React from 'react';
import { Hatching } from './Hatching';

export const Oval = ({color, shading}) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    // width="1280.000000pt"
    // height="640.000000pt"
    width="50"
    height="50"
    viewBox="0 0 1280.000000 640.000000"
    preserveAspectRatio="xMidYMid meet">
      {color && <Hatching fillColor={color}/>}
      <g
      // transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
      transform="translate(640.000000,960.000000) scale(0.100000,-0.100000) rotate(90)"
      style={{ stroke: `${color}`, strokeWidth: '250', fill: shading === 'solid' ? `${color}` : shading === 'striped' ? 'url(#diagonal-hatch)' : shading === 'open' ? 'none' : 'black' }}
      >
      <path d="M1797 5234 c-836 -114 -1516 -703 -1726 -1495 -44 -164 -61 -283 -68
      -459 -13 -351 53 -663 206 -977 300 -614 866 -1018 1581 -1130 109 -17 334
      -18 4610 -18 4276 0 4501 1 4610 18 715 112 1281 516 1581 1130 153 314 219
      626 206 977 -7 176 -24 295 -68 459 -190 716 -764 1271 -1501 1451 -264 64 93
      60 -4843 59 -3699 -1 -4507 -4 -4588 -15z"/>
      </g>
    </svg>
  );
};