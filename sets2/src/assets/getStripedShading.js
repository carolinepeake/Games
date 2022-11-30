const getStripedShading = ({svgComponent, color}) => {

  // put pattern here? and use it as fill

  const stripedSVG = svgComponent(color)``;

  return (
    <svg>
      <g>
        <path></path>
      </g>
    </svg>
  )
}