import styled, { css } from 'styled-components';
//utilities

export const colors = {
  blue: '#0099FF',
  purple: '#F04DFF',
  red: '#FF4D4D',
  green: '#6AED76',
  yellow: '#FFC54D',
  white: '#ffffff',
  gray1: '#606060',
  gray2: '#313131',
  gray3: '#181818',
  black: '#000000'
}


export const space = [
  0,
  8,
  16,
  32,
  64,
  128,
  256,
  512
];

const isDarkBackground = function(color) {
  if (color) {
    if (color.includes("black") || color.includes("gray2") || color.includes("gray3")) {
      return true;
    } else {
      return false;
    }
  }
}

export const Btn = styled.button`
  outline: none;
  border-radius: 3rem;
  margin-right: 10px;
  border: none;
  background-color: ${props => props.color ? colors[props.color] : colors.blue};
  color: ${props => isDarkBackground(props.color) ? colors.white : colors.black};
  padding: ${space[2]}px ${space[3]}px;
  font-size: 1rem;

  ${props => props.size === "sm" && css`
    padding: ${space[1]}px ${space[1]}px;
    font-size: 0.82rem;
  `}

  ${props => props.size === "lg" && css`
    padding: ${space[3]}px ${space[4]}px;
    font-size: 1.64rem;
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.33);
    margin-right: 3rem;
    transition: all 200ms ease-in-out;
  }




`