import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '56px',
  flexDirection: 'column',
  marginInline: '16px',
  [theme.breakpoints.up('md')]: {
    gap: '80px',
  },
}));

const AldarPlusWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const AldarPlusInnerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  maxWidth: '1192px',
  [theme.breakpoints.up('md')]: {
    gap: '80px',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  [theme.breakpoints.up('md')]: {
    gap: '32px',
    width: '90%',
  },
}));

const Title = styled('div')(({ theme }) => ({
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '120%',
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
}));

const AldarPlusLabel = styled('span')(({ theme }) => ({
  fontStyle: 'italic',
  fontWeight: 700,
}));

const Description = styled('p')(({ theme }) => ({
  color: '#252525',
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '120%',
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
}));

export {
  Wrapper,
  AldarPlusWrapper,
  AldarPlusInnerWrapper,
  ContentWrapper,
  Title,
  AldarPlusLabel,
  Description,
};
