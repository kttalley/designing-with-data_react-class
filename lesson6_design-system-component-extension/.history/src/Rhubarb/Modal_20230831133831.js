import { color, space, fontSize, isDarkBackground} from './Utils';
import React from 'react';
import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${props => color[props.color] ? color[props.color] : color.black };
  color: pink;
  padding: 1rem;
  margin: 1rem;
  border-radius: ${space[2] + 'px'};
`;