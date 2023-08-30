import { color, space, isDarkBackground} from './Utils'
import { Styled } from 'styled-components/dist/constructors/constructWithOptions';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  border-radius: ${space[2]};
  padding: ${space[1]};

`;