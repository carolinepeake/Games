import React from 'react';
import { Hatching } from './Hatching';

export const Blob = ({color, shading}) => {

  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    // width="845.000000pt"
    width="50"
    // height="1280.000000pt"
    height="50"
    viewBox="0 0 845.000000 1280.000000"
    // viewBox="0 0 33.000000 11.000000"
    preserveAspectRatio="xMidYMid meet">
       {color && <Hatching fillColor={color}/>}
      <g
      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      // transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
      // fill="url(#diagonal-hatch)"
      // fill="url(#diagonal-hatch)"
      style={{ stroke: `${color}`, strokeWidth: '250', fill: shading === 'solid' ? `${color}` : shading === 'striped' ? 'url(#diagonal-hatch)' : shading === 'open' ? 'none' : 'black' }}
      >
      <path d="M5465 12788 c-99 -55 -509 -468 -901 -908 -866 -971 -1773 -2155
      -2464 -3215 -1174 -1800 -1869 -3390 -2049 -4685 -37 -272 -46 -393 -46 -670
      0 -279 9 -390 46 -618 160 -969 752 -1717 1734 -2188 977 -469 2311 -623 3535
      -408 517 90 971 233 1395 438 263 127 516 284 715 443 109 86 321 293 417 405
      629 739 767 1719 399 2829 -183 551 -476 1127 -1458 2869 -157 278 -348 620
      -425 760 -799 1453 -1150 2338 -1260 3175 -23 178 -23 586 0 738 54 350 151
      623 327 916 83 138 85 147 35 119z"/>
      </g>
    </svg>
  );
};


