import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './StyledComponents.js';

type AddCardsBtnProps = {
  // deck: ;
  // board: ;
  // disabled: ;
  // handleAddCards: ;
};

export default function AddCardsBtn({
  deck,
  cardsShowing,
  $disabled,
  handleAddCards
}: AddCardsBtnProps) {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const timeout = setTimeout(() => {setActive(true)}, 10000);
    return () => clearTimeout(timeout);
  }, [deck]);

  return (
    <StyledButton
      disabled={!active || cardsShowing === 15 || $disabled}
      onClick={handleAddCards}
    >
      Add 3 More Cards
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  margin-top: 1rem;
  box-shadow: none;

  ${props => !props.disabled && css `
    color: blue;
    &:hover {
      text-decoration: underline;
      font-weight: bold;
     /* box-shadow: none; */
    };
  `};
  &:hover {
    box-shadow: none;
  }
`;
