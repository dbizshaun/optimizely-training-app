import React from 'react';

import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';

import { Desktop, Mobile } from '@/components/atom/MediaTags/MediaTags';
import { Menu } from '@/components/atom/Menu/Menu';

import {
  HeaderDrawerToggleButton,
  HeaderAlignmentContainer,
  HeaderPositionContainer,
  NavItemWrapper,
  NavLinks,
  NavMenuItem,
  DrawerContent,
  DrawerLink,
  AccordionWrapper,
  AccordionLabel,
  AccordionContent,
  AccordionLinkItem,
  DesktopContactButton,
  MobileContactButton,
  LogoLink,
} from './styledComponents';

import Logo from './svg/Logo';
import Contact from './svg/Contact';
import Hamburger from './svg/Hamburger';
import Close from './svg/Close';
import Expand from './svg/Expand';

import { getScrollbarWidth } from '@/utils/getScrollbarWidth';

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
  onRegister: () => void;
  scrollDistanceToActivateHeaderBackground?: number;
};
export function Header(props: Props) {
  const [drawer, setDrawer] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > (props.scrollDistanceToActivateHeaderBackground ?? 476)
      ) {
        // Adjust the scroll distance as needed
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
  const toggleDrawer = () => setDrawer((state) => !state);

  const scrollBarWidth = React.useMemo(() => getScrollbarWidth(), []);

  return (
    <HeaderPositionContainer
      sx={{
        width: drawer ? `calc(100% - ${scrollBarWidth}px)` : '100%',
        background: isScrolled ? '#141414' : 'transparent',
      }}
    >
      <HeaderAlignmentContainer ref={headerRef}>
        <LogoLink href="">
          <Logo />
        </LogoLink>
        <Desktop>
          <NavItemWrapper>
            {props.navItems.map(({ href, label, children }) => {
              if (!children)
                return (
                  <NavLinks key={label} href={href}>
                    {label}
                  </NavLinks>
                );
              return (
                <Menu key={label} options={children}>
                  <NavMenuItem key={label}>{label}</NavMenuItem>
                </Menu>
              );
            })}
          </NavItemWrapper>
        </Desktop>
        <Mobile>
          <HeaderDrawerToggleButton onClick={toggleDrawer}>
            {!drawer ? (
              <SvgIcon component={Hamburger} />
            ) : (
              <SvgIcon component={Close} />
            )}
          </HeaderDrawerToggleButton>
          <Drawer
            open={drawer}
            onClose={toggleDrawer}
            anchor="right"
            sx={{
              top: drawerTop,
            }}
            hideBackdrop
            PaperProps={{
              sx: {
                top: drawerTop,
              },
            }}
            elevation={0}
          >
            <DrawerContent role="presentation">
              {props.navItems.map(({ href, label, children }) => {
                if (!children)
                  return (
                    <DrawerLink key={label} href={href}>
                      {label}
                    </DrawerLink>
                  );
                return (
                  <Accordion label={label}>
                    {children.map(({ label, href }) => (
                      <AccordionLinkItem key={label} href={href}>
                        {label}
                      </AccordionLinkItem>
                    ))}
                  </Accordion>
                );
              })}
            </DrawerContent>
          </Drawer>
        </Mobile>
        <Desktop>
          <DesktopContactButton
            variant="outlined"
            startIcon={<Contact />}
            onClick={props.onRegister}
          >
            {props.registerText}
          </DesktopContactButton>
        </Desktop>
        <Mobile>
          <MobileContactButton variant="outlined" onClick={props.onRegister}>
            <Contact />
          </MobileContactButton>
        </Mobile>
      </HeaderAlignmentContainer>
    </HeaderPositionContainer>
  );
}

function Accordion(props: { label: string; children: React.ReactNode }) {
  return (
    <AccordionWrapper elevation={0}>
      <AccordionLabel expandIcon={<Expand />}>{props.label}</AccordionLabel>
      <AccordionContent>{props.children}</AccordionContent>
    </AccordionWrapper>
  );
}
