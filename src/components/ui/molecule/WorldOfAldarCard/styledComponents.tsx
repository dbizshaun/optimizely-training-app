import { styled } from '@mui/material/styles';
import Link from 'next/link';

const Wrapper = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '460px',
  borderRadius: '16px',
  [theme.breakpoints.up('sm')]: {
    height: '580px',
    marginRight: '24px',
  },
}));

const BgImageWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  background:
    ' linear-gradient(0deg, rgba(68, 46, 2, 0.80) 0%, rgba(68, 46, 2, 0.32) 100%)',
  position: 'absolute',
  inset: 0,
  zIndex: 9,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '24px',
  [theme.breakpoints.up('sm')]: {
    padding: '40px',
  },
}));

const Caption = styled('div')(({ theme }) => ({
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

const HeaderRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const WorldOfAldarLogo = styled('div')(({ theme }) => ({
  width: '64px',
  height: '64px',
  [theme.breakpoints.up('md')]: {
    width: '104px',
    height: '104px',
  },
}));

const ExpandLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  width: '80px',
  height: '80px',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
}));

export {
  Wrapper,
  ContentWrapper,
  BgImageWrapper,
  Caption,
  HeaderRow,
  WorldOfAldarLogo,
  ExpandLink,
};
