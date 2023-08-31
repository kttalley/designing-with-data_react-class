import { color, space, isDarkBackground, fontSize} from './Utils';
import styled, { css } from 'styled-components';

export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  border-radius: 8px;
  padding: ${space[3] + 'px'};
  margin: ${space[2] + 'px'};
  font-family: menlo;
  font-weight: bold;
  border: none;
  transition: 0.1s all ease;
  font-size: ${fontSize[2]};
  padding: ${space[2] + 4 + 'px'} ${space[4] + 'px'};

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transform: scale(1.1);
  }

  ${props => props.size === 'sm' && css`
    font-size: ${fontSize[1]};
    padding: ${space[1] + 2 + 'px'} ${space[3] + 'px'};
  ` }

    ${props => props.size === 'lg' && css`
      font-size: ${fontSize[3]};
      padding: ${space[3] + 6 + 'px'} ${space[5] + 'px'};
  ` }

  ${props => props.roundness === 'pill' && css`
    border-radius: 10px;
  
  `}
`;