import React from 'react';
import { Timer } from './Timer';
import styled, { css } from 'styled-components';
import './index.css';
import './App.css';
import { Button } from './StyledComponents';

// type NavPanelProps = {
//   gameStatus: 'idle' | 'started' | 'paused' | 'resumed' | 'ended';
//   setGameStatus: React.Dispatch<React.SetStateAction<string>>;
// };

export default function NavPanel(
  // { gameStatus, setGameStatus }: NavPanelProps
  ) {

  return (
    <Container>
      <div>
        Player 1
      </div>
      <div>
        Player 2
      </div>
    </Container>
  )
};

const Container = styled.aside`
  width: 20em;
  height: 100%;
  padding: 1em;
`;
