import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './StyledComponents.js';

export default function AddCardsBtn({ deck, setExtraCards, extraCards }) {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const timeout = setTimeout(() => {setActive(true)}, 10000);
    return () => clearTimeout(timeout);
  }, [deck]);

  const handleAddCards = () => {
    setExtraCards(true)
  };


  return (
    <StyledButton $disabled={!active || extraCards} disabled={!active || extraCards} onClick={handleAddCards}>
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
