import React from 'react';
import styled from 'styled-components';
import './index.css';

type ModalProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  // clickModal:
  // tag:
};

export const Modal = ({
  text,
  setText,
  clickModal = () => console.log('modal clicked - missing handler'),
  tag = "div"
}: ModalProps) => {

  return (
    <ModalContainer
      as={tag}
    // onFocusOut={setText('')}
      onClick={clickModal}
    >
      <ModalText>
        {text}
      </ModalText>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30%;
  right: 35%;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  width: 30%;
  height: 36%;
  border: 0.1em rgba(165, 165, 160, 0.44) solid;
  box-shadow: 5px 5px 10px 1px rgba(63, 61, 61, 0.79);
`;

const ModalText = styled.h2`
`;

