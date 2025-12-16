'use client';

import { createTheme } from '@mui/material/styles';
import Link from 'next/link';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // tablet
      md: 900, // small desktop
      lg: 1200, // desktop
      xl: 1536, // large desktop
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {},
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingInline: '16px',
          [theme.breakpoints.up('md')]: {
            paddingInline: '24px',
          },
          [theme.breakpoints.up('lg')]: {
            paddingInline: '48px',
          },
          [theme.breakpoints.up('xl')]: {
            paddingInline: '96px',
          },
        }),
      },
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiButton: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiIconButton: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
});

export default theme;
