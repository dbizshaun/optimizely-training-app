import { Grid2 } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Container from '@mui/material/Container';

const Wrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    gap: '24px',
  },
}));

const Title = styled('div')(({ theme }) => ({
  color: '#252525',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '120%',
}));

const UnitListWrapper = styled(Grid2)(({ theme }) => ({}));

const UnitWrapper = styled(Grid2)(({ theme }) => ({}));

const MoreUnitsLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '240px',
  width: '100%',
  gap: '16px',
}));

const MoreUnitsLinkLabel = styled('span')(({ theme }) => ({
  color: '#A39E97',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '110%',
}));

export {
  Wrapper,
  Title,
  UnitListWrapper,
  UnitWrapper,
  MoreUnitsLink,
  MoreUnitsLinkLabel,
};
