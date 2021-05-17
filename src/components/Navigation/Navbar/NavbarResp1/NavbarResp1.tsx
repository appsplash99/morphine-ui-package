import React from 'react';
import { NavbarProps } from '../Navbar.types';
import './NavbarResp1.css';
import { FaBars, FaSquarespace, FaWindowClose } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { BtnIcon } from '../../../Button';
import {
  defaultDesktopMenuStyles,
  defaultMobileMenuStyles,
} from './navbarResp1.styles';

export interface NavbarResp1Props extends NavbarProps {}

export const NavbarResp1: React.FC<NavbarResp1Props> = ({
  children,
  hamburgerIcon,
  navbarLogo,
  navbarSearchIcon,
  navbarContentCenter,
  navbarDesktopContentLeft,
  navbarDesktopContentRight,
  actionButtonsContainer,
  showMobileMenu,
  handleShowMobileMenu,
  className,
  style = {},
  desktopMenuStyle = {},
  mobileMenuStyle = {},
}) => {
  return (
    <nav className={`navbar-resp1 ${className}`} style={{ ...style }}>
      <div className="navbar-resp1__desktop ">
        <div
          style={{
            backgroundColor: 'pink',
            ...defaultDesktopMenuStyles,
            ...desktopMenuStyle,
          }}
        >
          {navbarDesktopContentLeft || (
            <div className="flex align-items--c gap--md">
              {navbarLogo || (
                <div className="flex align-items--c gap--xxs font-weight--500">
                  <FaSquarespace className="text--primary text--xxl" />
                  <span className="text--lg">Shoppin Square</span>
                </div>
              )}
              <div className="flex gap--sm font-weight--600">{children}</div>
            </div>
          )}

          {navbarContentCenter}

          {navbarDesktopContentRight || (
            <div className="flex align-items--c gap--md">
              {actionButtonsContainer}
              {navbarSearchIcon || (
                <BtnIcon className="font-weight--400" size="lg">
                  <IoIosSearch className="text--lg" />
                </BtnIcon>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`navbar-resp1__mobile ${' fadeInDown'}`}>
        <div className="flex align-items--c justify-content--sb p--xs">
          <div className="flex flex--column align-items--c gap--xxs font-weight--500 p--xxs">
            {navbarLogo || (
              <FaSquarespace className="text--primary text--xxl" />
            )}
          </div>
          <div className="flex align-items--c gap--xxs">
            {navbarSearchIcon || (
              <BtnIcon className="font-weight--400" size="lg">
                <IoIosSearch className="text--lg" />
              </BtnIcon>
            )}
            <BtnIcon size="lg" onClick={handleShowMobileMenu}>
              {hamburgerIcon || !showMobileMenu ? (
                <FaBars className="text--dark text--xl" />
              ) : (
                <FaWindowClose className="text--dark text--xl" />
              )}
            </BtnIcon>
          </div>
        </div>
        <div
          style={{
            ...defaultMobileMenuStyles,
            backgroundColor: 'tomato',
            display: showMobileMenu ? 'flex' : 'none',
            ...mobileMenuStyle,
          }}
        >
          <div className="flex flex--column font-weight--500 text--lg">
            {children}
          </div>
          <div className="flex flex--column gap--xs w--50%">
            {actionButtonsContainer}
          </div>
        </div>
      </div>
    </nav>
  );
};
