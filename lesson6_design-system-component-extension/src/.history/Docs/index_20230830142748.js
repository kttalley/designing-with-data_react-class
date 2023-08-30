import styled from 'styled-components';
import {color, space, isDarkBackground, fontSize} from '../Rhubarb';

export const DocsColorBox = styled.div`
background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  height: 90px;
  width: 90px;
  padding-top: 33px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  border: ${props => props.color === "black" ? '1px solid' + color.gray2 : 'none'}
`;

export const DocsSection = styled.section`
  margin: 100px 32px;
  max-width: 550px;
`;

export const DocsModalContainer = styled.section`
  position: relative;
  height: 300px;
  border-radius: 3px;
  background: ${color.dui_gray80}
`;

export const DocsCodeBlock = styled.code`
  border: 1px solid ${color.dui_gray80};
  color: ${color.dui_gray60}
  border-radius: 8px;
  display: block;
  font-family: consolas, monospace;
  line-height: 1.3;
  padding: ${space[1] + 'px'};
  white-space: pre-line;
  font-size: ${fontSize[1]};
  margin-top: ${space[3] + 'px'};
  transition: 0.15s color ease;

  &::selection {
    color: ${color.black};
    background-color: ${color.pink};
  }

  &:hover {
    color: ${color.white};
  }


`;