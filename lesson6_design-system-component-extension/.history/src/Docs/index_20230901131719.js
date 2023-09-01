import styled from 'styled-components';
import {color, space, isDarkBackground, fontSize} from '../Rhubarb';

export const DocsColorBox = styled.div`
background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  height: ${space[6] + 'px'};
  width: ${space[6] + 'px'};
  padding-top: 33px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: ${props => props.color === "black" ? '1px solid' + color.darkGreen : 'none'}
`;

export const DocsSection = styled.section`
  margin: 100px 32px;
  max-width: 782px;
`;

export const DocsModalContainer = styled.section`
  position: relative;
  height: 300px;
  border-radius: 8px;
  padding: 1rem;
  background: ${color.darkGreen}
`;

export const DocsCodeBlock = styled.code`
  border: 1px solid ${color.darkGreen};
  background-color: ${color.black};
  color: ${color.dui_gray20};
  border-radius: 8px;
  display: block;
  font-family: consolas, monospace;
  line-height: 1.3;
  padding: ${space[3] + 'px'};
  white-space: pre-line;
  font-size: ${fontSize[1]};
  margin-top: ${space[3] + 'px'};
   max-width: 832px;
  transition: 0.15s color ease;

  &::selection {
    color: ${color.black};
    background-color: ${color.pink};
  }

  &:hover {
    color: ${color.white};
  }


`;