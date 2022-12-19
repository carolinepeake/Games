import React from 'react';
import './index.css';
import styled from 'styled-components';
import './Board.css';

export const FacedownCard = () => {

  return (
    <CardBack className="card">
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
      <Text className="round-font">Sets</Text>
    </CardBack>
  )


};

// refactor to share code with Card
const CardBack = styled.div`
position: relative;
z-index: 0;
display: flex;
flex-direction: column;
align-items: center;
background: radial-gradient(ellipse 100% 100% at top left, rgba(198,146,214,1) 0%, rgba(152,20,203,1) 35%, rgba(193,9,157,1) 100%);
`;
// height: 100px;
// width: 200px;

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
  z-index: 2;
  background: linear-gradient(rgba(89,193,254,0.2) 20%, rgba(89,193,254,1) 40%, rgba(89,193,254,1) 60%, rgba(89,193,254,0.2) 80%);
`
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
  font-size: calc(16px + 0.1vh);
  stroke: blue;
  stroke-width: 1px;
  text-length: 45%;
  stroke-linecap: round;
  stroke-linejoin: round;
  position: absolute;
  z-index: 3;
  letter-spacing: -0.1em;
  transform: translateY(-50%);
`
// transform: translateY(-25%);