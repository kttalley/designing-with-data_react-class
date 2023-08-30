import { color, space, isDarkBackground} from './Utils'

export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  border-radius: ${space[2]};
  padding: ${space[1]};

`;