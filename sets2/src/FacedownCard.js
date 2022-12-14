import React from 'react';
import './index.css';
import styled from 'styled-components';

export const FacedownCard = () => {

  return (
    <CardBack>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 200 100"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"
          // default
          spreadMethod="pad"
        >
          {/* <stop offset="0%" stopColor="#59c1fe" stopOpacity="0.2"/> */}
          <stop offset="20%" stopColor="#59c1fe" stopOpacity="0.2"/>
          <stop offset="40%" stopColor="#59c1fe"/>
          <stop offset="60%" stopColor="#59c1fe"/>
          <stop offset="80%" stopColor="#59c1fe" stopOpacity="0.2"/>
          {/* <stop offset="100%" stopColor="#59c1fe" stopOpacity="0.2"/> */}
        </linearGradient>
          <pattern
            id="pattern"
            width="100%"
            height="100%"
            x="0"
            y="0"
            translate="0 -1"
            // viewBox="0 0 200 100"
          >
            {/* <line x1="0" y1="0" x2="199" y2="0" strokeWidth={10} stroke="url(#linear)"/> */}
            <rect width="200" height="2"
            // y="45"
            fill="url(#linear)"/>
          </pattern>
        </defs>
       {/* need to learn why the line pattern was not showing up and why when I change the rect height to 2 the three lines blur together */}
        <rect width="200" height="5" y="45"
        fill="url(#pattern)"
        strokeWidth={10}
        stroke="url(#pattern)"
        // fill="white"
        // fill="url(#linear)"
        />
         {/* <line
         className="lines"
         x1="0" y1="45" x2="199" y2="45"
        strokeWidth={10}
        // stroke="url(#linear)"
        // stroke="white"
         /> */}
        <text
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

        >Sets</text>
      </svg>
      {/* <Lines>______</Lines> */}
    </CardBack>
  )


};

// refactor to share code with Card
const CardBack = styled.div`

border: 0.1em rgba(165, 165, 160, 0.44) solid;
text-align: center;
justify-content: center;
border-radius: 5px;
box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);

display: flex;
flex-direction: column;
align-items: center;
background-color: purple 0.8;
`;
// height: 100px;
// width: 200px;

// padding: 1em 0;

// const Lines = styled.div`

//   width: 100%;
//   height: 1.5em;
//   fill: linear-gradient(rgba(var(--teal), 0.2) 20%, var(--teal) 40%, var(--teal) 60%, rgba(var(--teal), 0.2) 80%);
//   background-size: 1px 0.5em;
//   box-shadow: 0 0 1em rgba(var(--teal), 0.4);
//   transform: translateY(-1em);
//   left: 0;
// `
  // position: fixed;
  //color: var(--teal);

//   const Line = styled.line`
//   stroke-width: 1;
//   stroke: linear-gradient(rgba(var(--teal), 0.2) 20%, var(--teal) 40%, var(--teal) 60%, rgba(var(--teal), 0.2) 80%);

// `
// box-shadow: 0 0 1em rgba(var(--teal), 0.4);
// transform: translateY(-1em);
// left: 0;
//width: 100%;