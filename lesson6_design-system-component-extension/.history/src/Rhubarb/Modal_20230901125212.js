import { color, space, fontSize, isDarkBackground} from './Utils';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const ModalOverlay = styled.div`
  background-color: ${color.dui_gray20};
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
  background-color: ${color.dui_gray60};
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
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid ${color.dui_gray80}

`;

