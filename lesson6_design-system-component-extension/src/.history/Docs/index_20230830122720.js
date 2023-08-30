import styled from 'styled-components';
import {} from './Rhubarb';

export const DocsColorBox = styled.div`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black }

`;
