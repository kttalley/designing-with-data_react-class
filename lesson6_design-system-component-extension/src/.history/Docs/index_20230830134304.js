import styled from 'styled-components';
import {color, space, isDarkBackground, fontSize} from './Rhubarb';

export const DocsColorBox = styled.div`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black }
  color: ${props => isDarkBackground(props.color) ? color.white : color.black};
  height: 90px;
  width: 90px;
  padding-top: 33px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius 8px;
`;
