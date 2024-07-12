'use client';
import { createTheme } from '@mui/material/styles';
import { Source_Sans_3 } from 'next/font/google';

const sourceSansPro = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: `${sourceSansPro.style.fontFamily}, Arial, sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '26px',
      letterSpacing: '-1px',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      borderRadius: '40px',
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
    red: {
      main: '#B00005',
      light: '#ff4569',
      dark: '#d50000',
      contrastText: '#fff',
    },
    yellow: {
      main: '#FAEC70',
      light: '#fff176',
      dark: '#fbc02d',
      contrastText: '#000',
    },
  },
});

export default theme;
