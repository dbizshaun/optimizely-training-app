import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MCardContent from '@mui/material/CardContent';
import MCard from '@mui/material/Card';
import { Button } from '@/components/ui/atom/Button/Button';
import { Tag } from '@/components/ui/atom/Tag/Tag';
import { styled } from '@mui/material/styles';
import React from 'react';

export const Card = styled(MCard)(() => ({
  borderRadius: '16px',
  border: '1px solid #D7D2CB',
}));

export const CardContent = styled(MCardContent)(() => ({
  display: 'grid',
  padding: '16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
}));
export const CustomSlick = styled('div')(({ theme }) => ({
  '& .slick-dots': {
    bottom: '16px',
  },
  '& .slick-dots li, & .slick-dots li button': {
    height: '15px',
    width: '15px',
    marginInline: '0px',
  },
  '& .slick-dots li button:before': {
    fontSize: '8px',
    color: '#69B3E7',
    height: '15px',
    width: '15px',
    opacity: 1,
  },
  '& .slick-dots li.slick-active button:before': {
    color: '#FFF', // Active dot color
    opacity: 1,
  },
}));
export const MultiMediaContainer = styled('div')(({ theme, children }) => {
  const cols = React.Children.count(children);
  return {
    display: 'grid !important',
    gridTemplateColumns: `repeat(${cols}, minmax(0, ${100 / cols}%
    ))`,
  };
});

export const TitleContainer = styled('div')(() => ({
  display: 'flex',
}));
export const UnitName = styled(Typography)(() => ({
  flex: '1 1 auto',
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));
export const Price = styled(Typography)(() => ({
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));

export const UnitInfo = styled(Typography)(() => ({
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
  display: 'inline-block',
}));

export const LocationBlock = styled('div')(() => ({
  display: 'flex',
  gap: '4px',
}));
export const LocationLink = styled(Link)(() => ({
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  textDecorationLine: 'underline',
  textDecorationColor: '#252525',
}));

export const FacilityGrid = styled('div')(() => ({
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
}));
export const FacilityGridItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: '6px',
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
}));
export const FacilityValue = styled(Typography)(() => ({
  whiteSpace: 'nowrap',
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
}));

export const TagBlock = styled('div')(() => ({
  display: 'flex',
  gap: '8px',
}));
export const UnitType = styled(Tag)(() => ({
  background: '#FFF',
  color: '#252525',
  border: '1px solid #CBC6C0',
}));
export const SaleType = styled(Tag)(() => ({
  background: '#E3E1DC',
  color: '#7A756E',
}));

export const RegisterBlock = styled('div')(() => ({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  marginTop: '24px',
}));
export const RegisterButton = styled(Button)(({ theme }) => ({
  border: `1px solid #EB6924`,
  background: theme.palette.common.white,
  color: '#EB6924',
  fontFamily: 'Poppins',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '24px',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  marginRight: 'auto',
}));
export const IconButton = styled(Button)(() => ({
  background: 'transparent',
  padding: 0,
  minWidth: '10px',
}));

export const UnitsLeftTag = styled(Tag)(() => ({
  backgroundColor: '#E30555',
  position: 'absolute',
  top: '16px',
  right: '12px',
  zIndex: 1,
  textTransform: 'uppercase',
}));
export const SellingFastTag = styled(Tag)(() => ({
  backgroundColor: '#CEDC00',
  color: '#252525',
  position: 'absolute',
  top: '16px',
  right: '12px',
  zIndex: 1,
  textTransform: 'uppercase',
}));
