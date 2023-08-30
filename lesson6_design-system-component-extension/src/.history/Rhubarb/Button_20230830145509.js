import { color, space, isDarkBackground} from './Utils'
import styled from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  border-radius: ${space[2]};
  padding: ${space[1]};
  font-size: ${space[3]};

`;