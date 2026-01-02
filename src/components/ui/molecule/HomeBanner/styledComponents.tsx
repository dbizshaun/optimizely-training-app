import { mobileMediaQuery } from '@/hooks/mediaQuery';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  height: '476px',
  paddingTop: '184px',
  boxSizing: 'border-box',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  zIndex: 0,
}));

export const Heading = styled(Typography)(() => ({
  color: 'white',
  fontSize: '80px',
  fontWeight: 400,
  lineHeight: '80px',
  marginBottom: '48px',
  [`@media ${mobileMediaQuery}`]: {
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: '52.8px',
    marginBottom: '24px',
  },
}));

export const GradientBoxHorizontal = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: -2,
  background:
    'linear-gradient(90deg, rgba(43, 2, 68, 0.2) 0%, rgba(88, 5, 170, 0) 100%)',
}));
export const GradientBoxVertical = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '70%',
  width: '100%',
  top: 0,
  left: 0,
  background:
    'linear-gradient(180deg, rgba(43, 2, 68, 0.4) 0%, rgba(88, 5, 170, 0) 100%)',
  zIndex: -1,
}));
