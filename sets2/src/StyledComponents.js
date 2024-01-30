import styled, { css } from 'styled-components';
import './index.css';

export const Button=styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(12px, 2vh, 24px);
  line-height: 1;
  min-width: 10ch;
  font-weight: bold;
  border-radius: 15px;
  padding: 0.5em 0.75em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  &:hover {
   /* background-color: scale-color(var(--darkBtnColor), --lightness: -20%); */
  /*  background-color: scale-color(var(--darkBtnColor), var(--oldBtnColor): -20%);
    background-color: var(--lightBtnColor); */
    box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
  }
  ${props => props.as === 'a' && css`
    text-decoration: none;
  `}
`;

// .btn-primary {
//   background-color: ${props => props.theme.darkBtnColor};
//   color: #fff;
// }

// .btn-secondary {
//   color: ${props => props.theme.lightBtnColor};
//   border: 1px ${props => props.theme.lightBtnColor} solid;
// }

