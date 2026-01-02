import { styled } from '@mui/material/styles';
import Link from 'next/link';

const ImageBlockWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  flexDirection: 'column',
  zIndex: 0,
  [theme.breakpoints.up('md')]: {
    gap: '24px',
    flexDirection: 'row',
  },
}));

const FirstBlock = styled('div')(({ theme }) => ({
  height: '400px',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '16px',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    flex: 1,
    height: '584px',
  },
}));

const ColumWrapper = styled('div')(({ theme }) => ({
  height: '400px',
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.up('md')]: {
    height: '584px',
    gap: '24px',
  },
}));

const RowWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  [theme.breakpoints.up('md')]: {
    gap: '24px',
  },
}));

const SecondBlock = styled('div')(({ theme }) => ({
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  height: '200px',
  borderRadius: '16px',
  [theme.breakpoints.up('md')]: {
    height: '280px',
  },
}));

const ThirdBlock = styled('div')(({ theme }) => ({
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  height: '200px',
  borderRadius: '16px',
  [theme.breakpoints.up('md')]: {
    height: '280px',
  },
}));

const FourthBlock = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '200px',
  borderRadius: '16px',
  [theme.breakpoints.up('md')]: {
    flex: 1,
  },
}));

const BlockImage = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
}));

const BlockImageOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
}));

const FirstBlockImageOverlay = styled(BlockImageOverlay)(({ theme }) => ({
  opacity: 0.8,
  background:
    'linear-gradient(90deg, #6C828E 50%, rgba(226, 194, 174, 0.00) 100%)',
  mixBlendMode: 'multiply',
}));

const SecondBlockImageOverlay = styled(BlockImageOverlay)({
  borderRadius: 16,
  opacity: 0.6,
  background:
    'linear-gradient(90deg, #7C6B60 50%, rgba(226, 194, 174, 0.00) 100%)',
  mixBlendMode: 'multiply',
});

const ThirdBlockImageOverlay = styled(BlockImageOverlay)({
  borderRadius: 16,
  opacity: 0.6,
  background:
    'linear-gradient(90deg, #6C828E 50%, rgba(226, 194, 174, 0.00) 100%)',
  mixBlendMode: 'multiply',
});

const FourthBlockImageOverlay = styled(BlockImageOverlay)({
  borderRadius: 16,
  background: 'rgba(87, 52, 46, 0.40)',
  mixBlendMode: 'multiply',
});

const BlockContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '24px',
  [theme.breakpoints.up('md')]: {
    padding: '40px',
  },
}));
const ColumnBlockContent = styled(BlockContent)(({ theme }) => ({
  padding: '24px',
  [theme.breakpoints.up('md')]: {
    padding: '16px',
  },
}));

const BlockLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    maxWidth: '90%',
  },
  ['& h2']: {
    fontWeight: 400,
    color: '#fff',
    margin: '0',
    lineHeight: '100%',
  },
}));
const FirstBlockLabel = styled(BlockLabel)(({ theme }) => ({
  ['& h2']: {
    fontSize: '40px',
    marginBottom: '32px',
    [theme.breakpoints.up('md')]: {
      fontSize: '56px',
      marginBottom: '40px',
    },
  },
}));

const SecondBlockLabel = styled(BlockLabel)(({ theme }) => ({
  ['& h2']: {
    fontSize: '24px',
    marginBottom: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      marginBottom: '24px',
    },
  },
}));
const ThirdBlockLabel = styled(BlockLabel)(({ theme }) => ({
  ['& h2']: {
    fontSize: '24px',
    marginBottom: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      marginBottom: '24px',
    },
  },
}));
const FourthBlockLabel = styled(BlockLabel)(({ theme }) => ({
  ['& h2']: {
    fontSize: '32px',
    marginBottom: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '24px',
    },
  },
}));

const BlockLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '240px',
}));

const BlockLinkLabel = styled('div')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '500',
  color: '#fff',
  textDecoration: 'none',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export {
  ImageBlockWrapper,
  FirstBlock,
  ColumWrapper,
  RowWrapper,
  SecondBlock,
  ThirdBlock,
  FourthBlock,
  BlockImage,
  FirstBlockImageOverlay,
  SecondBlockImageOverlay,
  ThirdBlockImageOverlay,
  FourthBlockImageOverlay,
  BlockContent,
  ColumnBlockContent,
  BlockLabel,
  FirstBlockLabel,
  SecondBlockLabel,
  ThirdBlockLabel,
  FourthBlockLabel,
  BlockLink,
  BlockLinkLabel,
};
