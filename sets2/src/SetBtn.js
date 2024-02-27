import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './StyledComponents';
import './index.css';

type SetBtnProps = {
  timeRemaining: number;
  disabled: boolean;
};

export default function SetBtn({

  $disabled,
  handleClickSet,
  activePlayer,
  dispatch,
  setModalText,
  timeRemaining,
}: SetBtnProps) {


  // could also use wrapper handler to call handleClickSet and set an interval for changing timeRemaining

  const intervalId = useRef(null);

  // const [timeRemaining, setTimeRemaining] = useState(10);

  // useEffect(() => {
  //  if (activePlayer !== undefined) {
  //     const id = setInterval(() => {
  //       setTimeRemaining(prevSecs => prevSecs - 1);
  //     }, 1000);
  //     intervalId.current = id;
  //   }
  // }, [activePlayer]);

  // move timeout logic to reducer
  useEffect(() => {
    if (timeRemaining === 0) {
      setModalText('No set selected');
      const timeout = setTimeout(() => {
        setModalText('');
        dispatch({type: 'TIMEOUT'});
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (timeRemaining < 10) {
      const id = setInterval(() => {
        dispatch({type: 'COUNTDOWN'});
      }, 1000);
    intervalId.current = id;
    return () => clearInterval(id);
    }
  }, [timeRemaining]);

  // timeRemainingState: {
  //   isRunning:
  //   isOut:
  //   reset:
  // }

  return (
    <SetButton
      disabled={$disabled}
      onClick={(e) => handleClickSet('01')}
      timeRemaining={timeRemaining}
    >
      SET
    </SetButton>
  );
}

const SetButton = styled(Button)`
  background-color: var(--darkBtnColor);
  font-size: 2rem;
  color: white;
  ${props => props.disabled && css`
    background: linear-gradient(to right top, rgba(22,91,251,0.5) ${100 - props.timeRemaining * 10}%, var(--darkBtnColor) ${100 - props.timeRemaining * 10}%);
  `};
`;