import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents.js';

export default function AddCardsBtn({ deck }) {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const timeout = (() => setActive(true), 20000);
    return () => clearTimeout(timeout);
  }, [deck]);


  return (
    <StyledButton $disabled={!active}>
      Add 3 More Cards
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  ${props => props.$disabled && 'opacity: 50%'};
  box-shadow: none;

`;
