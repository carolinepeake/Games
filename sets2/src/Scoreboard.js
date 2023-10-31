import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents';

export default function Scoreboard() {

  return (
    <Container>

      <Item>
        <Player>
          You
        </Player>
        <Score>

        </Score>
      </Item>

      <SetButton>
        SET
      </SetButton>

      <Item>
        <Player>
          Bot
        </Player>
        <Score>

        </Score>
      </Item>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
`;

const Item = styled.div``;

const Player = styled.span`
`;

const Score = styled.span``;

const SetButton = styled(Button)`

`;



