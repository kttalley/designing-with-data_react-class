import { color, space, fontSize, isDarkBackground} from './Utils';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const ModalOverlay = styled.div`
  background-color: ${color.dui_gray80};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 1rem;
  margin: 1rem;
  border-radius: ${space[2] + 'px'};
`;

const ModalContainer = styled.div`
  background-color: ${color.black};
  margin: 0 auto;
  position: absolute:
  top: 75px;
  bottom: 75px;
  left: 0;
  right: 0;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  overflow: auto;
  border: 0.1px solid ${color.pink}
  box-shadow: 0px 10px 20px white;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid ${color.pink};
  padding: ${space[3] + 'px'};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size:${fontSize[1]};
`;

const ModalBody = styled.div`
  padding: ${space[5] + 'px'}

`;


const ModalDismissIcon = styled.div`
  float: right;
  transition: 0.2s opacity easy;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;


export const Modal = function(props) {
  return(
    <ModalContainer>
      <ModalHeader>
        <span>
          { props.header }
        </span>
        {/* <ModalDismissIcon onClick={ props.onDismiss } name="remove" size={20} fill={color.white} /> */}
        <Icon name="pin" onClick={ props.onDismiss} size={18}></Icon>
      </ModalHeader>
      <ModalBody>
        { props.children }
      </ModalBody>
    </ModalContainer>
  )
};


export const ModalWithOverlay = function(props) {
  return (
    <ModalOverlay>
      <Modal {...props} />
    </ModalOverlay>
  )
};

