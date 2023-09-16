// export const color = {

//   //core colors
//   darkGreen: '#165247',
//   tan: '#565C2D',
//   lightGreen: '#1A6710',
//   teal: '#719FA7',
//   pink: '#FF6E6E',

//   //grayscale - needs lui
//   black: '#000000',
//   dui_gray80: '#FFFFFF33',
//   dui_gray60: '#FFFFFF66',
//   dui_gray40: '##FFFFFF44',
//   dui_gray20: '#FFFFFFCC',
//   white: '#FFFFFF',
//   // solid grays, no opacity, 
//   //for sake of utility function below
//   gray1: '#606060',
//   gray2: '#313131',
//   gray3: '#181818'
  
// }


export const color = {
  // Core Colors
  primary: {
    dark: '#165247',
    light: '#1A6710',
  },
  secondary: {
    dark: '#565C2D',
    light: '#719FA7',
  },
  accent: {
    dark: '#FF6E6E',
    light: '#FF4081',
  },

  // Grayscale for Light User Interface (LUI)
  lui: {
    background: '#FFFFFF',
    text: '#313131',
    border: '#E0E0E0',
    // Add more LUI grayscale shades as needed
  },

  // Grayscale for Dark User Interface (DUI)
  dui: {
    background: '#181818',
    text: '#E0E0E0',
    border: '#606060',
    // Add more DUI grayscale shades as needed
  },

  // Utility Grays (No Opacity)
  gray: {
    g1: '#606060',   // Used for text
    g2: '#313131',   // Used for headings
    g3: '#181818',   // Used for backgrounds
  },
  white: '#FFFFFF',
  black: '#000000'
};

export const space = [
  0,
  2,
  8,
  16,
  32,
  64,
  128,
  256,
  512
];

export const fontSize = [
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '64px'
];


export const isDarkBackground = function(color) {
  if (color) {
    if (color.includes('light') || color.includes('lui') || color.includes('white')) {
      return false;
    } else {
      return true;
    }
  }
}
