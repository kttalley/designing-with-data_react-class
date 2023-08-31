import { color, space, isDarkBackground, fontSize} from './Utils';
import styled from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  border-radius: ${space[6] + 'px'};
  padding: ${space[3] + 'px'};
  margin: ${space[2] + 'px'};
  font-family: menlo;
  font-weight: bold;
  font-size: ${fontSize[1]};
  border: none;
  transition: 0.2s all ease;
  padding: ${space[2] + 4 + 'px'} ${space[4] + 'px'};

  &:hover {
    cursor: pointer;
    filter: brightness(1.4);
    transform: scale(1.1);
  }

`;