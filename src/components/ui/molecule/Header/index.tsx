'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Logo from './svg/Logo';
import Contact from './svg/Contact';
import Hamburger from './svg/Hamburger';
import Close from './svg/Close';
import Expand from './svg/Expand';

import { Desktop, Mobile } from '../../atom/MediaTags/MediaTags';
import { Menu } from '../../atom/Menu/Menu';

type NavItem =
  | {
      label: string;
      href: string;
      children?: never;
    }
  | {
      label: string;
      href?: never;
      children: Record<'href' | 'label', string>[];
    };

export type Props = {
  navItems: NavItem[];
  registerText: string;
  registerLink?: string;
};

function Header(props: Props) {
  const [drawer, setDrawer] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 476) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerTop = `${headerRef.current?.clientHeight ?? 0}px`;
  const toggleDrawer = () => setDrawer(state => !state);

  return (
    <Box
      component="header"
      sx={{
        padding: 0,
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 100,
        transition: 'background 0.2s ease-in',
        background: isScrolled ? '#141414' : 'transparent',
      }}
    >
      <Container
        ref={headerRef}
        sx={{
          paddingInline: '24px',
          paddingBlock: '27px',
          display: 'flex',
          alignItems: 'center',
          gap: 'min(110px, 10vw)',
        }}
      >
        <Link
          href="/"
          sx={{
            display: 'flex',
          }}
        >
          <Logo />
        </Link>
        <Desktop>
          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              display: 'inline-flex',
              gap: '24px',
            }}
          >
            {props.navItems.map(({ href, label, children }) => {
              if (!children)
                return (
                  <Link
                    key={label}
                    href={href}
                    sx={{
                      textDecoration: 'none',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '15.4px',
                      paddingBlock: '12px',
                    }}
                  >
                    {label}
                  </Link>
                );
              return (
                <Menu key={label} options={children}>
                  <Box
                    key={label}
                    sx={{
                      textDecoration: 'none',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '15.4px',
                      paddingBlock: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </Box>
                </Menu>
              );
            })}
          </Box>
        </Desktop>
        <Mobile>
          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              display: 'inline-flex',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={toggleDrawer}
          >
            {!drawer ? <SvgIcon component={Hamburger} /> : <SvgIcon component={Close} />}
          </Box>
          <Drawer
            open={drawer}
            onClose={toggleDrawer}
            anchor="right"
            sx={{
              top: drawerTop,
            }}
            elevation={0}
          >
            <Box
              sx={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                paddingInline: '24px',
                boxSizing: 'border-box',
                '&>*': {
                  minHeight: '48px',
                },
              }}
              role="presentation"
            >
              {props.navItems.map(({ href, label, children }) => {
                if (!children)
                  return (
                    <Link
                      key={label}
                      href={href}
                      sx={{
                        textDecoration: 'none',
                        color: 'black',
                        whiteSpace: 'nowrap',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '15.4px',
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: '1px solid #e9e9e9',
                      }}
                    >
                      {label}
                    </Link>
                  );
                return (
                  <Accordion
                    key={label}
                    sx={{
                      '&:before': { display: 'none' },
                      borderBottom: '1px solid #e9e9e9',
                    }}
                    elevation={0}
                  >
                    <AccordionSummary
                      expandIcon={<Expand />}
                      sx={{
                        textDecoration: 'none',
                        color: 'black',
                        whiteSpace: 'nowrap',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '15.4px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: 0,
                      }}
                    >
                      {label}
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      {children.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          sx={{
                            textDecoration: 'none',
                            color: 'black',
                            whiteSpace: 'nowrap',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '15.4px',
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '48px',
                          }}
                        >
                          {label}
                        </Link>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Drawer>
        </Mobile>
        <Desktop>
          <Button
            variant="outlined"
            startIcon={<Contact />}
            href={props.registerLink}
            sx={{
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
            }}
          >
            {props.registerText}
          </Button>
        </Desktop>
        <Mobile>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              justifySelf: 'end',
              backgroundColor: 'rgba(37, 37, 37, 0.2)',
              width: '48px',
              height: '40px',
              minWidth: '48px',
            }}
          >
            <Contact />
          </Button>
        </Mobile>
      </Container>
    </Box>
  );
}

export default Header;
