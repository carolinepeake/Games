import React from 'react';
import styled from 'styled-components';
import { Diamond } from './assets/diamond/Diamond';
import { Blob } from './assets/blob/Blob';
import { Oval } from './assets/oval/Oval';
// import { Squiggle } from './assets/Squiggle';
// import { ReactComponent as Oval } from './assets/Oval.svg';


export const Card = ({ shading, shape, color, count, patternId, index }) => {

  // props could be the three options
  // keep track of how many cards are selected
  // const [numCardsSelected, setNumCardsSelected] = useState(0);
  // useEffect(() => {

  //   if (numCardsSelected === (2 || 3)) {
  //     handleCheckSelection();
  //   }
  // }, [numCardsSelected]);

  // could also make it check for mismatch as soon as second card is selected
  // would storing all values in a set and checking if the set has the values be quicker or
  // checkin the objects against each other - figure out the time complexity for each possible checking algorithm
  // might want to use reduce or unique or something
  // const handleCheckSelection = (card1, card2, card3) => {
  //   const collection = collect([card1, card2, card3]);
  //   const colors = collection.pluck('color');
  //   const shapes = collection.pluck('shape');
  //   const counts = collection.pluck('count');
  //   const fills = collection.pluck('fill');
  //   // reduce or helper function that returns false if length of colors, shapes, counts, or fills is 2
  //   // otherwise removes the three cards, and adds three new ones
  // };

  // let numCardsSelected = 0;

  // const handleSelectCard = async () => {
  //   // make card bigger and maybe shadow darker or something to show selection
  //   // start timer
  //   // increase selected cards count
  //     // either by using state or just a variable
  //   numCardsSelected ++;
  //   // if (numCardsSelected === 3) {
  //   //   handleCheckSelection();
  //   // }

  // };

  // const diamond = {
  //   viewbox: "0 0 1280.000000 640.000000",
  //   width: "50",
  //   height: "100",
  // }

  // const shape = (
  //   <svg
  //     width='50'
  //     height=
  //     viewBox=
  //     preserveAspectRatio="xMidYMid meet"
  //   >
  //     <
  //   </svg>
  // );

  // const getSVGPath = (shape) => {
  //   switch(shape) {
  //     case 'diamond' :
  //       return "M3188 4809C1440 3935 10 3218 10 3215s1445-727 3210-1610L6430 0l3180 1590c1749 875 3180 1592 3180 1595 0 4-6416 3216-6422 3214-2 0-1433-715-3180-1590z";
  //     case 'blob' :
  //       return "M5465 12788c-99-55-509-468-901-908-866-971-1773-2155-2464-3215C926 6865 231 5275 51 3980c-37-272-46-393-46-670 0-279 9-390 46-618C211 1723 803 975 1785 504 2762 35 4096-119 5320 96c517 90 971 233 1395 438 263 127 516 284 715 443 109 86 321 293 417 405 629 739 767 1719 399 2829-183 551-476 1127-1458 2869-157 278-348 620-425 760-799 1453-1150 2338-1260 3175-23 178-23 586 0 738 54 350 151 623 327 916 83 138 85 147 35 119z";
  //     case 'oval' :
  //       return "M1797 5234 c-836 -114 -1516 -703 -1726 -1495 -44 -164 -61 -283 -68 -459 -13 -351 53 -663 206 -977 300 -614 866 -1018 1581 -1130 109 -17 334 -18 4610 -18 4276 0 4501 1 4610 18 715 112 1281 516 1581 1130 153 314 219 626 206 977 -7 176 -24 295 -68 459 -190 716 -764 1271 -1501 1451 -264 64 93 60 -4843 59 -3699 -1 -4507 -4 -4588 -15z";
  //     default :
  //       console.log('error finding shape path data. the shape is: ', shape);
  //       return;
  //   }
  // };

  // let pathData;
  // if (shape !== undefined) {
  //   pathData = getSVGPath(shape);
  // };

  return (
    <StyledCard
    // onClick={e=> handleSelectCard(e)}
    >
      {[...Array(count).keys()].map((unit, index) => {
        return (
          <SymbolContainer
          >
            {/* xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 68"
            stroke={color}
            strokeWidth={250}
            className={svg}
            preserveAspectRatio="xMidYMid meet"
            >
            {shading === 'striped'
            && (
              <defs>
                <pattern
                  id={color + 'Striped'}
                  // could make these dynamic or put them in css
                  width="2000"
                  height="2000"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse">
                   <path d="M0 0h1000v1000H0zM1000 0h1000v1000H1000z" stroke={color} strokeWidth={250}/>
                   <path fill="#fff" d="M0 1000h1000v1000H0zM1000 1000h1000v1000H1000z"/>
                </pattern>
              </defs>)
            }
            <g>
              fill={shading === 'solid' ? `${color}` : shading === 'striped' ? `url(#${color}Striped)` : 'none'}
              <path d={pathData} />
            </g>
          </SymbolContainer> */}
            {shape === 'diamond' && <Diamond color={color} shading={shading} i={index} patternId={patternId} shape="M1,34 24,-5 47,34 24,73z" />}
            {shape === 'squiggle' && <Blob color={color} shading={shading} i={index} patternId={patternId} shape="M30 0c-0.5 0.3 -2.7 2.5 -5 5 -4.7 5.4 -9.8 12 -13.6 17.8 C5.1 33 1.27 41.8 0.27 49c-0.16 1.5 -0.22 2.16 -0.22 3.72 0 1.5 0.05 2.16 0.22 3.38 C-1.44 61.5 2.5 65.7 7.8 68.3 13.38 70.94 20.7 71.7 27.6 71.16 c2.83 -0.5 5.38 -1.27 7.72 -2.38 1.44 -0.67 2.83 -1.55 3.94 -2.44 0.55 -0.44 1.77 -1.6 2.27 -2.22 3.44 -4 4.22 -9.5 2.16 -15.66 -1 -3 -2.6 -6.2 -8 -15.88 -0.83 -1.5 -1.88 -3.44 -2.33 -4.22 -4.38 -8 -6.38 -12.94 -7 -17.6 -0.11 -0.94 -0.11 -3.22 0 -4 0.27 -1.94 0.83 -3.44 1.77 -5 0.44 -0.72 0.44 -0.77 0.16 -0.61z"/>}
            {/* {shape === 'squiggle' && <Squiggle color={color} shading={shading} i={index} patternId={patternId}/>} */}
            {shape === 'oval' && <Oval color={color} shading={shading} i={index} patternId={patternId} shape="M1,17 C1,-16 47,-16 47,17 V51 C47,84 1,84 1,51z"/>}
            {/* {shape === 'oval' && <Oval width="50" height="100"
            color={color}
            shading={shading}
            patternId={patternId}
            i={index}
            />} */}
          </SymbolContainer>
        );
      })}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
`;
//background-color: ${props => props.fillColor || "palevioletred"};
// ${props => props. && css`
// background: white;
// color: black;
// `}

const SymbolContainer = styled.div`
`;
// ^^ should be styled.svg
// width:
// height:

//shadow behind the card

// const Diamond = styled.div`
//   background-color: ${props => props.color || "palevioletred"};
//   width: 25%;
//   aspect-ratio: 1;
//   rotate: 45deg;
//   ${props => props.i === 2 && css`
//    translate: 25 25;
//   `}
// `;



