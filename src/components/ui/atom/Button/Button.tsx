import B from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ButtonProps } from './Button.type';

export function Button({ sx, ...props }: ButtonProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#EB6924',
        light: '#EB6924',
        dark: '#EB6924',
        contrastText: '#fff',
      },
      secondary: {
        main: '#252525',
        light: '#252525',
        dark: '#252525',
        contrastText: '#fff',
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: 'contained',
          color: 'primary',
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <B
        sx={{ borderRadius: '21px', textTransform: 'none', ...sx }}
        {...props}
      />
    </ThemeProvider>
  );
}
