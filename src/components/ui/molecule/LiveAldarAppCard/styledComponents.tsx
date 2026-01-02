import { styled } from '@mui/material/styles';
import Link from 'next/link';

const Wrapper = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '460px',
  borderRadius: '16px',
  marginInline: '16px',
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

const BgImageOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background:
    'linear-gradient(0deg, rgba(68, 46, 2, 0.60) 0%, rgba(68, 46, 2, 0.00) 100%)',
  mixBlendMode: 'multiply',
  [theme.breakpoints.up('md')]: {
    background: 'none',
    fill: 'linear-gradient(90deg, #6C828E 50%, rgba(226, 194, 174, 0.00) 100%)',
    opacity: 0.6,
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  background:
    'linear-gradient(90deg, rgba(108, 130, 142, 0.3) 50%, rgba(226, 194, 174, 0.00) 100%)',
  position: 'absolute',
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

const LinkWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const AppLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '16px',
  [theme.breakpoints.up('md')]: {
    columnGap: '24px',
  },
}));

const IOSAppLink = styled(Link)(({ theme }) => ({
  width: '120px',
  height: '40px',
}));

const AndroidAppLink = styled(Link)(({ theme }) => ({
  width: '120px',
  height: '40px',
}));

const WebAppQR = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '100%',
  background: '#252525',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
export {
  Wrapper,
  ContentWrapper,
  BgImageWrapper,
  BgImageOverlay,
  Caption,
  LinkWrapper,
  AppLinks,
  IOSAppLink,
  AndroidAppLink,
  WebAppQR,
};
