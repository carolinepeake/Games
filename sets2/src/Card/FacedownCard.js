import React from 'react';
import styled from 'styled-components';
import './Card.css';

export const FacedownCard = () => {
  return (
      <CardBack className="card-face">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 200 100"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <defs> */}
          {/* <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"
            // default
            spreadMethod="pad"
          >
            <stop offset="20%" stopColor="#59c1fe" stopOpacity="0.2"/>
            <stop offset="40%" stopColor="#59c1fe"/>
            <stop offset="60%" stopColor="#59c1fe"/>
            <stop offset="80%" stopColor="#59c1fe" stopOpacity="0.2"/>
          </linearGradient> */}
            {/* <pattern
              id="pattern"
              width="100%"
              height="100%"
              x="0"
              y="0"
              translate="0 -1"
              // viewBox="0 0 200 100"
            > */}
              {/* <line x1="0" y1="0" x2="199" y2="0" strokeWidth={10} stroke="url(#linear)"/> */}
              {/* <rect width="200" height="2"
              // y="45"
              fill="url(#linear)"/> */}
            {/* </pattern>
          </defs> */}
        {/* need to learn why the line pattern was not showing up and why when I change the rect height to 2 the three lines blur together */}
          {/* <rect width="200" height="5" y="45"
          fill="url(#pattern)"
          strokeWidth={10}
          stroke="url(#pattern)"
          // fill="white"
          // fill="url(#linear)"
          /> */}
          {/* <line
          className="lines"
          x1="0" y1="45" x2="199" y2="45"
          strokeWidth={10}
          // stroke="url(#linear)"
          // stroke="white"
          /> */}
          {/* <text
            className="round-font"
            fill="white"
            x="95"
            y="58.5"
            fontSize="48"
            stroke="blue"
            strokeWidth="1"
            // maybe make overlap differently
            textLength="45%"
            strokeLinecap="round"
            strokeLinejoin="round"
          >Sets</text> */}
        {/* </svg> */}
        <Lines />
        <Text className="block-font">SET</Text>
      </CardBack>
  )
};

const CardBack = styled.div`
z-index: 3;
flex-direction: column;
align-items: center;
background: radial-gradient(ellipse 100% 100% at top left, rgba(198,146,214,0.9) 0%, rgba(195,0,171,0.9) 55%, rgba(80,9,193,0.9) 100%);
border-radius: 5px;
transform: rotateY(180deg);
`;


//195, 0, 171
//rgba(152,3,189,0.9)
//#5009C1
//(152,20,203,1)
//#9814cb
//rgba(193,9,157,1) 100%
// height: 100px;
// width: 200px;

//background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%);

//background: radial-gradient(ellipse 100% 100% at top 25px left 50px, , rgba(198,146,214,1) 11%, rgba(152,20,203,1) 55%, rgba(193,9,157,1) 100%);
//background: radial-gradient(top 25px left 50px, ellipse 100% 100%, rgba(198,146,214,1) 11%, rgba(152,20,203,1) 55%, rgba(193,9,157,1) 100%);
//background: rgb(198,146,214);
//background-color: purple 0.8;

// padding: 1em 0;

const Lines = styled.div`
  width: 100%;
  height: 20%;
  background-size: 1px 4%;
  box-shadow: 0 0 1em rgba(var(--teal), 0.4);
  left: 0;
  transform: translateY(-0.5em);
  position: absolute;
  z-index: 4;
  background: linear-gradient(rgba(82, 79, 215,0.2) 20%, rgba(82, 79, 215,1) 40%, rgba(82, 79, 215,1) 60%, rgba(82, 79, 215,0.2) 80%);
`
//background: linear-gradient(rgba(89,193,254,0.2) 20%, rgba(89,193,254,1) 40%, rgba(89,193,254,1) 60%, rgba(89,193,254,0.2) 80%);
//background: linear-gradient(rgba(198,146,214,1) 20%, rgba(152,20,203,1) 80%);
//#59c1fe, 89 193 254
//background: linear-gradient(rgba(var(--teal), 0.2) 20%, var(--teal) 40%, var(--teal) 60%, rgba(var(--teal), 0.2) 80%);
//transform: translateY(-5em);
//   position: fixed;
//   color: var(--teal);

//   const Line = styled.line`
//   stroke-width: 1;
//   stroke: linear-gradient(rgba(var(--teal), 0.2) 20%, var(--teal) 40%, var(--teal) 60%, rgba(var(--teal), 0.2) 80%);

// `
// box-shadow: 0 0 1em rgba(var(--teal), 0.4);
// transform: translateY(-1em);
// left: 0;
// width: 100%;

const Text = styled.h2`
  color: white;
  right: 20%;
  font-size: 1.75em;
  -webkit-text-stroke: 1px blue;
  text-length: 45%;
  stroke-linecap: round;
  stroke-linejoin: round;
  position: absolute;
  z-index: 5;
  font-weight: 900;
  transform: translateY(-50%);
  line-height: 0.75em;
  text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
    3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
    6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
    6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
    9px 7px 1px #4af7ff;

`

//letter-spacing: -0.1em;
// transform: translateY(-25%);

//font-size: clamp(16px 6em 32px);