// src/components/organism/TrendingCommunities/styledComponents.tsx
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@/components/atom/Button/Button';
import { desktopMediaQuery, mobileMediaQuery } from '@/hooks/mediaQuery';

export const BackgroundWrapper = styled('div')(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 2,
  [`@media ${desktopMediaQuery}`]: {
    height: '720px',
  },
  [`@media ${mobileMediaQuery}`]: {
    paddingTop: '64px',
  },
}));

export const GradientBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  background:
    ' linear-gradient(360deg, rgba(68, 46, 2, 0.6) 0%, rgba(68, 46, 2, 0) 100%)',
  mixBlendMode: 'multiply',
  zIndex: -1,
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  height: '100%',
  paddingBlock: '56px',
  gap: '42px',
  paddingInline: '24px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '80px',
  fontWeight: 400,
  lineHeight: '80px',
  textAlign: 'left',
  color: '#FFF',
  [`@media ${desktopMediaQuery}`]: {
    width: '80%',
  },
  [`@media ${mobileMediaQuery}`]: {
    fontSize: '40px',
    fontWeight: 400,
    lineHeight: '48px',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  borderColor: '#FFF',
  color: '#FFF',
}));
