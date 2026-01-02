import { styled } from '@mui/material/styles';
import Link from 'next/link';

const CategoryItem = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '460px',
  borderRadius: '16px',
  marginRight: '16px',
  [theme.breakpoints.up('sm')]: {
    height: '580px',
    marginRight: '24px',
  },
}));

const CategoryImage = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
}));

const CategoryContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  background:
    'linear-gradient(0deg, rgba(68, 46, 2, 0.60) 0%, rgba(68, 46, 2, 0.00) 100%)',
  backgroundBlendMode: 'multiply',
  inset: 0,
  zIndex: 9,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '24px',
  [theme.breakpoints.up('sm')]: {
    padding: '40px',
  },
}));
const CategoryLogo = styled('div')(({ theme }) => ({
  marginBottom: '12px',
  [theme.breakpoints.up('sm')]: {
    marginBottom: '24px',
  },
}));

const CategoryHeading = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '90%',
  },
  ['& h2']: {
    fontWeight: 400,
    color: '#fff',
    fontSize: '40px',
    margin: '0',
    marginBottom: '32px',
    lineHeight: '120%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '72px',
      marginBottom: '40px',
      lineHeight: '100%',
    },
  },
}));

const CategoryAction = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const CategoryButton = styled('div')(({ theme }) => ({
  height: '48px',
  borderRadius: '24px',
  border: '1px solid #FFF',
  padding: '16px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: '500',
  textTransform: 'uppercase',
}));

const CategoryLink = styled(Link)(({ theme }) => ({
  borderRadius: '24px',
  border: '1px solid #FFF',
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: '500',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#fff',
}));

export {
  CategoryItem,
  CategoryImage,
  CategoryHeading,
  CategoryButton,
  CategoryContent,
  CategoryLogo,
  CategoryAction,
  CategoryLink,
};
