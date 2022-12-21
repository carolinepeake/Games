import styled, { css } from 'styled-components';
import './index.css';

export const Button=styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme};
  color: #fff;
  font-size: clamp(12px, 2vh, 24px);
  border-radius: 8px;
  padding: 0.25em 0.75em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  min-width: 10ch;
  text-align: center;
  line-height: 1.1;
  &:hover {
    background-color: scale-color(var(--darkBtnColor), var(--oldBtnColor): -20%);
    box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
  }
  ${props => props.as === 'a' && css`
    text-decoration: none;
  `}
`
// &:hover {
//   background-color: scale-color(var(--darkBtnColor), --lightness: -20%);
//   box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
// }
 /* border: 0.1em rgba(165, 165, 160, 0.44) solid; */
 /* min-height: 44px; 44pxx44px is the recommendation target size for accessibility */

