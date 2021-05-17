import React, { ReactElement } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { DataBadgeIcon } from '../../../DataDisplay';
import { FiShoppingCart } from 'react-icons/fi';
import { NavbarProps } from '../Navbar.types';
import { GiMuscleUp } from 'react-icons/gi';
import { BtnIcon } from '../../../Button';
import {
  defaultDesktopMenuStyles,
  defaultMobileMenuStyles,
} from './navbarResp2.styles';
import './NavbarResp2.css';

export interface NavbarResp2Props extends NavbarProps {
  navbarDesktopContentCenter?: JSX.Element | ReactElement | HTMLElement;
  navbarContentRight?: JSX.Element | ReactElement | HTMLElement;
}

export const defaultMorphineUiLogo = () => {
  return (
    <div
      className="flex align-items--c gap--xxs font-weight--500"
      style={{
        fontFamily: 'Lobster, cursive',
      }}
    >
      <GiMuscleUp className="text--primary text--xxl" />
      <span className="text--lg">morphine </span>
      <span className="text--lg">ui</span>
    </div>
  );
};

export const NavbarResp2: React.FC<NavbarResp2Props> = ({
  children,
  hamburgerIcon,
  navbarLogo,
  navbarDesktopContentCenter,
  navbarDesktopContentLeft,
  navbarContentRight,
  showMobileMenu,
  handleShowMobileMenu,
  className,
  style = {},
  desktopMenuStyle = {},
  mobileMenuStyle = {},
}) => {
  return (
    <nav className={`navbar-resp2 ${className}`} style={{ ...style }}>
      <div className="navbar-resp2__desktop">
        <div
          style={{
            backgroundColor: 'pink',
            ...defaultDesktopMenuStyles,
            ...desktopMenuStyle,
          }}
        >
          {navbarDesktopContentLeft || (
            <div className="flex align-items--c gap--md">
              {!children && (
                <div className="flex align-items--c gap--lg  font-weight--600">
                  <a className="nav__link text--dark" href="{resTopbarURL}">
                    Link1
                  </a>
                  <a className="nav__link text--dark" href="{resTopbarURL}">
                    Link2
                  </a>
                  <a className="nav__link text--dark" href="{resTopbarURL}">
                    Link3
                  </a>
                </div>
              )}
              <div className="flex gap--sm font-weight--600">{children}</div>
            </div>
          )}

          {navbarDesktopContentCenter || (
            <div
              className="flex align-items--c"
              style={{
                cursor: 'pointer',
              }}
            >
              {navbarLogo || defaultMorphineUiLogo}
            </div>
          )}

          {navbarContentRight || (
            <div className="flex gap--sm">
              <DataBadgeIcon
                icon={<AiOutlineUser className="text--xl" />}
                data={5}
              />
              <DataBadgeIcon icon={<AiOutlineHeart className="text--xl" />} />
              <DataBadgeIcon icon={<FiShoppingCart className="text--xl" />} />
            </div>
          )}
        </div>
      </div>

      <div className={`navbar-resp1__mobile ${' fadeInDown'}`}>
        <div className="flex align-items--c justify-content--sb p--xs">
          <div className="flex flex--column align-items--c gap--xxs font-weight--500 p--xxs">
            <BtnIcon size="lg" onClick={handleShowMobileMenu}>
              {hamburgerIcon || !showMobileMenu ? (
                <div className="flex align-items--c gap--xxs">
                  {navbarLogo || (
                    <GiMuscleUp className="text--primary text--xxl" />
                  )}
                </div>
              ) : (
                <FaWindowClose className="text--dark text--xl" />
              )}
            </BtnIcon>
          </div>
          {navbarContentRight || (
            <div className="flex gap--sm">
              <DataBadgeIcon
                icon={<AiOutlineUser className="text--xl" />}
                data={5}
              />
              <DataBadgeIcon icon={<AiOutlineHeart className="text--xl" />} />
              <DataBadgeIcon icon={<FiShoppingCart className="text--xl" />} />
            </div>
          )}
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
            {!children && (
              <>
                <a className="nav__link text--dark" href="{resTopbarURL}">
                  Link1
                </a>
                <a className="nav__link text--dark" href="{resTopbarURL}">
                  Link2
                </a>
                <a className="nav__link text--dark" href="{resTopbarURL}">
                  Link3
                </a>
              </>
            )}
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};
