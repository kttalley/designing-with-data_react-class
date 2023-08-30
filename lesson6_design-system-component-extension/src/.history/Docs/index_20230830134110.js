import styled from 'styled-components';
import {color, space, isDarkBackground, fontSize} from './Rhubarb';

export const DocsColorBox = styled.div`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black }

`;
