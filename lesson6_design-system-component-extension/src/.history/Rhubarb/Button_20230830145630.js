import { color, space, isDarkBackground} from './Utils'
import styled from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  border-radius: ${space[3] + 'px'};
  padding: ${space[4] + 'px'};
  font-size: ${space[1] + 'rem'};

`;