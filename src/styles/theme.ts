/*
file : theme.ts
date : 2023.05.20.
name : miso kim
usage : common color palette
*/


export type ThemeColor = typeof COLORS[keyof typeof COLORS];

// temp main color (todo : 협의후 색상 변경)
export const COLORS = {
  YELLOW200: '#C7D2FE',
  BLUE100: '#534bae',
  BLUE200: '#d0e1fd',
  BLUE300: '#1976d2',
  GRAY100: '#f8f8f8',
  GRAY200: '#8d8384',
  GRAY300: '#6e6f73',
  WHITE: '#ffffff',
  BLACK: '#000000',
  RED: '#ef5e51',
} as const;

export const theme = {
  colors: {
    primary: {
      base: COLORS.BLUE200,
      //light: COLORS.BLUE100,
      dark: COLORS.BLUE300,
    },
    secondary: {
      base: COLORS.GRAY200,
      light: COLORS.GRAY100,
      dark: COLORS.GRAY300,
    },
    // tertiary: {
    //   base: COLORS.YELLOW200,
    // },
    white: COLORS.WHITE,
    black: COLORS.BLACK,
    red: COLORS.RED,
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 800,
  },
  radius: {
    none: 0,
    xs: '6px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
    circle: '50%',
  },
  border: {
    basic: 'solid #e0e4ed 1px',
  },
};
