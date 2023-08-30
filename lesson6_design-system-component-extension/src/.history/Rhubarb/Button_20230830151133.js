import { color, space, isDarkBackground} from './Utils';
import styled from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  border-radius: ${space[6] + 'px'};
  padding: ${space[3] + 'px'};
  margin: ${space[2] + 'px'};
  font-family: menlo;
  font-weight: bold;
  font-size: ${space[3] + 'px'};
  border: none;

  &:hover {
    filter: brightness(1.2);
  }

`;