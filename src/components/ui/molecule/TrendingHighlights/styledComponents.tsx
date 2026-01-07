import { Button } from '@/components/ui/atom/Button/Button';
import Typography from '@mui/material/Typography';
import { SlickCarousel } from '@/components/ui/atom/SlickCarousel';

import { styled } from '@mui/material/styles';
// import { mobileMediaQuery } from '@/hooks/mediaQuery';

export const CustomCarousel = styled(SlickCarousel)(({ theme }) => ({
  overflow: 'hidden',
  '& .slick-dots': {
    bottom: '48px',
  },
  '& .slick-dots li, & .slick-dots li button': {
    height: '15px',
    width: '15px',
    marginInline: '0px',
  },
  '& .slick-dots li button:before': {
    fontSize: '8px',
    color: '#CBC6C0',
    height: '15px',
    width: '15px',
    opacity: 1,
  },
  '& .slick-dots li.slick-active button:before': {
    color: '#7A756E', // Active dot color
    opacity: 1,
  },
}));

export const BackgroundWrapper = styled('div')(({ theme }) => ({
  background: '#E3E1DC',
  paddingBlock: '56px 102px',
}));
export const HighlightItem = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  boxSizing: 'border-box',
  // [`@media ${mobileMediaQuery}`]: {
  //   gridTemplateColumns: '1fr',
  //   gap: '42px',
  // },
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '24px',
}));
export const TagLine = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: 300,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#252525',
}));
export const Description = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 300,
  lineHeight: '19.2px',
  textAlign: 'left',
  color: '#252525',
}));
export const HighlightButton = styled(Button)(({ theme }) => ({
  color: '#252525',
  borderColor: '#252525',
}));

export const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  minHeight: '400px',
  boxSizing: 'border-box',
}));
