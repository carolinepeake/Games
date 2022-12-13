import React, {useState, useEffect} from 'react';

export const Symbol = ({ color, shading, shape }) => {

  const [path, setPath] = useState('');

  const getSVGPath = (shape) => {
    switch(shape) {
      case 'diamond' :
        return "M1,34 24,-5 47,34 24,73z";
      case 'squiggle' :
        return "M31,1 c-0.5,0.3 -2.7,2.5 -5,5 -4.7,5.4 -7.8,12 -11.6,17.8 C7.3,33 3.47,41.8 2.47,49 c-0.16,1.5 -0.22,2.16 -0.22,3.72 0,1.5 -0.05,2.16 -0.22,3.38 C1.76,61.5 3.7,65.7 10,68.3 15.58,70.94 22.9,71.7 29.8,71.16 c2.83 -0.5 5.38 -1.27 7.72 -2.38 1.44 -0.67 2.83 -1.55 3.94 -2.44 0.55 -0.44 1.77 -1.6 2.27 -2.22 3.44 -4 4.22 -9.5 2.16 -15.66 -1 -3 -2.6 -6.2 -8 -15.88 -0.83 -1.5 -1.88 -3.44 -2.33 -4.22 -4.38 -8 -6.38 -12.94 -7 -17.6 -0.11 -0.94 -0.11 -3.22 0 -4 0.27 -1.94 0.83 -3.44 1.77 -5 0.44 -0.72 0.44 -0.77 0.16 -0.61z";
            // "M30 0c-0.5 0.3 -2.7 2.5 -5 5 -4.7 5.4 -9.8 12 -13.6 17.8 C5.1 33 1.27 41.8 0.27 49c-0.16 1.5 -0.22 2.16 -0.22 3.72 0 1.5 0.05 2.16 0.22,3.38 C-1.44 61.5 2.5 65.7 7.8 68.3 13.38 70.94 20.7 71.7 27.6 71.16 c2.83 -0.5 5.38 -1.27 7.72 -2.38 1.44 -0.67 2.83 -1.55 3.94 -2.44 0.55 -0.44 1.77 -1.6 2.27 -2.22 3.44 -4 4.22 -9.5 2.16 -15.66 -1 -3 -2.6 -6.2 -8 -15.88 -0.83 -1.5 -1.88 -3.44 -2.33 -4.22 -4.38 -8 -6.38 -12.94 -7 -17.6 -0.11 -0.94 -0.11 -3.22 0 -4 0.27 -1.94 0.83 -3.44 1.77 -5 0.44 -0.72 0.44 -0.77 0.16 -0.61z";
        // "M5465 12788c-99-55-509-468-901-908-866-971-1773-2155-2464-3215C926 6865 231 5275 51 3980c-37-272-46-393-46-670 0-279 9-390 46-618C211 1723 803 975 1785 504 2762 35 4096-119 5320 96c517 90 971 233 1395 438 263 127 516 284 715 443 109 86 321 293 417 405 629 739 767 1719 399 2829-183 551-476 1127-1458 2869-157 278-348 620-425 760-799 1453-1150 2338-1260 3175-23 178-23 586 0 738 54 350 151 623 327 916 83 138 85 147 35 119z";
      case 'oval' :
        return "M1,17 C1,-16 47,-16 47,17 V51 C47,84 1,84 1,51z";
      default :
        console.log('error finding shape path data. the shape is: ', shape);
        return;
    }
  };

  useEffect(() => {
    let SVGpath = getSVGPath(shape);
    setPath(SVGpath);
  }, [shape])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 48 68"
      x="0"
      y="0"
      width="80%"
      height="100%"
      stroke={color}
      strokeWidth={2}
    >

       <defs>
        <pattern
          id="pattern-banded"
          width="8"
          height="8"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
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
          id="mask-banded"
        >
          <rect
            x="-10"
            y="-14"
            width="60"
            height="100"
            fill="url(#pattern-banded)"
            maskContentUnits="objectBoundingBox"
          />
        </mask>
      </defs>

      <path
        d={path}
        fill={ shading === 'open' ? 'none' : `${color}`}
        mask={ shading === 'banded' ? 'url(#mask-banded)' : ''}
        paintOrder="fill"
      />
      <path
        d={path}
        fill="none"
      />

    </svg>
  );
};
