import { color, space, fontSize, isDarkBackground} from './Utils';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export const Modal = styled.div`
  background-color: ${props => color[props.color] ? color[props.color] : color.black };
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 1rem;
  margin: 1rem;
  border-radius: ${space[2] + 'px'};
`;


export const ModalDismissIcon = styled(Icon)`
  float: right;
  transition: 0.2s opacity ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;