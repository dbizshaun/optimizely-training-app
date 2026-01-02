import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

type Props = Pick<BoxProps, 'sx'> & {
  children: string;
  variant?: 'primary' | 'secondary' | 'error' | 'warning';
};
export const Tag = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<Props>(({ theme, variant }) => {
  const variantStyles = {
    primary: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 300,
    },
    secondary: {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      fontWeight: 300,
    },
    error: {
      background: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      fontWeight: 600,
    },
    warning: {
      background: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      fontWeight: 600,
    },
  };
  return {
    display: 'inline-block',
    borderRadius: '4px',
    padding: '6px 8px',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: '12px',
    ...variantStyles[variant ?? 'primary'],
  };
});
