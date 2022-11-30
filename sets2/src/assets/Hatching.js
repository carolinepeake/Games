import React from 'react';
import './Assets.css';

export const Hatching = ({fillColor}) => {

  return (
    // <pattern id="diagonal-hatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
    //   <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: "black", strokeWidth: "1" }}/>
    // </pattern>
      <pattern id="diagonal-hatch" width="2000" height="2000"
      patternTransform="rotate(45 0 0)"
      patternUnits="userSpaceOnUse" style={{stroke: `${fillColor}`, strokeWidth: '250'}}>
        {/* <line x1= */}
        {/* <line x1="0" y1="1000" x2="2000" y2="1000" style={{ stroke: `${color}`, strokeWidth: "1000" }}/> */}
        <rect x="0" y="0" className={fillColor === 'red' ? 'dashed' : fillColor === 'green' ? "stripe" : 'hatched'}
        width="1000" height="1000" style={{stroke: `${fillColor}`, strokeWidth: '250'}}
        // color={fillColor}
        // style={{fill: `${fillColor}`}}
        />
        <rect x="1000" y="0"
        // className="stripe"
        className={fillColor === 'red' ? 'dashed' : fillColor === 'green' ? "stripe" : 'hatched'}
        width="1000" height="1000"
        // color={fillColor}
        // fill={fillColor}
        />
        <rect x="0" y="1000"
        width="1000" height="1000"
        // className={fillColor === 'red' ? 'dashed' : fillColor === 'green' ? "stripe" : 'hatched'}
        fill="white"
        style={{stroke: `${fillColor}`}}
        />
        <rect x="1000" y="1000"
       width="1000" height="1000"
      //  className={fillColor === 'red' ? 'dashed' : fillColor === 'green' ? "stripe" : 'hatched'}
        fill="white"/>
      </pattern>
  );
};