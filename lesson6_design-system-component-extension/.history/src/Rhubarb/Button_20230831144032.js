import { color, space, isDarkBackground, space} from './Utils';
import styled from 'styled-components';
import css from 'styled-components';

export const Btn = styled.button`
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  outline: none;
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  margin-right: 10px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.2s all ease;
  background-color: ${props => props.color ? color[props.color] : color.darkGreen};

  font-size: 16px;
  padding: ${space[2] + 'px'} ${space[3] + 'px'};

  ${props => props.size === "lg" && css`
    font-size: 24px;
    padding: ${space[2] + 4 + 'px'} ${space[4]+ 'px'};
  `}

  ${props => props.size === "sm" && css`
    font-size: 14px;
    padding: ${space[1] + 'px'} ${space[2] + 'px'};
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 8px;
  }
`;