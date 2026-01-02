import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@/components/atom/Button/Button';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export const HeaderPositionContainer = styled('header')(({ theme }) => {
  return {
    padding: 0,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'background 0.2s ease-in',
  };
});

export const HeaderAlignmentContainer = styled(Container)({
  paddingInline: '24px',
  paddingBlock: '27px',
  display: 'flex',
  alignItems: 'center',
  gap: 'min(110px, 10vw)',
});

export const LogoLink = styled(Link)({
  display: 'flex',
});

export const NavItemWrapper = styled('div')({
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  display: 'inline-flex',
  gap: '24px',
});

export const NavLinks = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '15.4px',
  paddingBlock: '12px',
});

export const NavMenuItem = styled('div')({
  textDecoration: 'none',
  color: 'white',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '15.4px',
  paddingBlock: '12px',
  cursor: 'pointer',
});

export const HeaderDrawerToggleButton = styled('div')({
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  display: 'inline-flex',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const DrawerContent = styled('div')({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '24px',
  boxSizing: 'border-box',
  '&>*': {
    minHeight: '48px',
  },
});

export const DrawerLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  whiteSpace: 'nowrap',
  fontSize: '16',
  fontWeight: 400,
  lineHeight: '15.4px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #e9e9e9',
});

export const AccordionWrapper = styled(Accordion)({
  '&:before': { display: 'none' },
  borderBottom: '1px solid #e9e9e9',
});
export const AccordionLabel = styled(AccordionSummary)({
  textDecoration: 'none',
  color: 'black',
  whiteSpace: 'nowrap',
  fontSize: '16',
  fontWeight: 400,
  lineHeight: '15.4px',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
});
export const AccordionContent = styled(AccordionDetails)({ padding: 0 });
export const AccordionLinkItem = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  whiteSpace: 'nowrap',
  fontSize: '16',
  fontWeight: 400,
  lineHeight: '15.4px',
  display: 'flex',
  alignItems: 'center',
  minHeight: '48px',
});

export const DesktopContactButton = styled(Button)({
  color: '#fff',
  borderColor: '#fff',
  justifySelf: 'end',
  backgroundColor: 'rgba(37, 37, 37, 0.2)',
  fontSize: '12px',
  lineHeight: '24px',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  height: '40px',
  paddingInline: '24px',
});
export const MobileContactButton = styled(Button)({
  color: '#fff',
  borderColor: '#fff',
  justifySelf: 'end',
  backgroundColor: 'rgba(37, 37, 37, 0.2)',
  width: '48px',
  height: '40px',
  minWidth: '48px',
});
