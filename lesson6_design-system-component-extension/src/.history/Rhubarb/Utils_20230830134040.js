export const color = {

  //core colors
  darkGreen: '#165247',
  tan: '#73794A',
  lightGreen: '#189922',
  teal: '#719FA7',
  pink: '#FF6E6E',

  //grayscale - needs lui
  black: '#000000',
  dui_gray80: '#FFFFFF33',
  dui_gray60: '#FFFFFF66',
  dui_gray40: '##FFFFFF99',
  dui_gray20: '#FFFFFFCC',
  white: '#FFFFFF',
  // solid grays, no opacity, 
  //for sake of utility function below
  gray1: '#606060',
  gray2: '#313131',
  gray3: '#181818'
  
}

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
    if (color.includes('black') || color.includes('gray2') || color.includes('gray3')) {
      return true;
    } else {
      return false;
    }
  }
}
