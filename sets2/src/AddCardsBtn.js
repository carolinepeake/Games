import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './StyledComponents.js';

export default function AddCardsBtn({
  deck,
  // setBoard,
  board,
  disabled,
  handleAddCards
}) {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const timeout = setTimeout(() => {setActive(true)}, 10000);
    return () => clearTimeout(timeout);
  }, [deck]);

  return (
    <StyledButton
      // $disabled={!active || extraCards || disabled}
      $disabled={!active || board === 15 || disabled}
      // disabled={!active || extraCards || disabled}
      disabled={!active || board === 15 || disabled}
      onClick={handleAddCards}
    >
      Add 3 More Cards
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  margin-top: 1rem;
  ${props => !props.$disabled && 'color: blue'};
  box-shadow: none;
  &:hover {
    box-shadow: none;
    ${props => !props.$disabled && css`
      text-decoration: underline;
      font-weight: bold;
    `};
  }

`;
