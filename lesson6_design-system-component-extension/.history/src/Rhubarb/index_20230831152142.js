//this file indexes all Rhubarb components for export

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: menlo, sans-serif;
    background-color: #121212;
    color: white;
  }
`;


export * from './Button';
export * from './Input';
export * from './Utils';
export * from './Modal';
export * from './Icon';