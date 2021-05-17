import React, { ReactElement } from 'react';

export interface NavbarProps {
  children?: JSX.Element | ReactElement | HTMLElement | string;
  desktopMenuStyle?: React.CSSProperties;
  mobileMenuStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  showMobileMenu?: boolean;
  hamburgerIcon?: JSX.Element | ReactElement;
  navbarLogo?: JSX.Element | ReactElement;
  navbarSearchIcon?: JSX.Element | ReactElement;
  navbarContentCenter?: JSX.Element | ReactElement | HTMLElement;
  navbarDesktopContentLeft?: JSX.Element | ReactElement | HTMLElement;
  navbarDesktopContentRight?: JSX.Element | ReactElement | HTMLElement;
  actionButtonsContainer?: JSX.Element | ReactElement | HTMLElement;
  handleShowMobileMenu?: () => void;
}
