import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import { FaShopify } from 'react-icons/fa';
import { Btn, BtnInverted } from '../../../Button';
import { NavbarResp1 } from './NavbarResp1';

export default {
  title: 'Components/Navigation/Navbar/Responsive Navbar 1',
  component: NavbarResp1,
} as Meta;

const Template: Story = args => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <NavbarResp1
        showMobileMenu={showMenu}
        handleShowMobileMenu={() => setShowMenu(prev => !prev)}
        {...args}
      />
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        Container of 2x view height
      </div>
    </>
  );
};

export const DefaultNavbarResp1 = Template.bind({});
DefaultNavbarResp1.parameters = {
  // for storybook to show in fullscreen
  layout: 'fullscreen',
};

export const design1NavbarResp1 = Template.bind({});
design1NavbarResp1.args = {
  desktopMenuStyle: { backgroundColor: 'orange' },
  mobileMenuStyle: { backgroundColor: 'magenta' },
  className: 'bg--success',
  style: {
    overflow: 'hidden',
    backgroundColor: 'red',
    position: 'fixed',
    // top: 0,
    // left: 0,
  },
  children: (
    <>
      <a className="nav__link text--light" href="{resTopbarURL}">
        Link 1
      </a>
      <a className="nav__link text--light" href="{resTopbarURL}">
        Link 2
      </a>
      <a className="nav__link text--light" href="{resTopbarURL}">
        Link 3
      </a>
    </>
  ),
};
design1NavbarResp1.parameters = {
  // for storybook to show in fullscreen
  layout: 'fullscreen',
};

export const design2NavbarResp1 = Template.bind({});
design2NavbarResp1.args = {
  desktopMenuStyle: { backgroundColor: 'none' },
  mobileMenuStyle: { backgroundColor: 'none' },
  style: {
    overflow: 'hidden',
    backgroundColor: 'var(--light)',
    position: 'fixed',
    padding: '0',
  },
  children: (
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
  ),
  actionButtonsContainer: (
    <>
      {/* <a
        className="nav__link font-weight--600 text--dark"
        href="{resTopbarURL}"
      >
        Contact
      </a> */}
      <BtnInverted
        shape="rounded"
        variant="primary"
        size="sm"
        style={{
          padding: 'var(--space-xxxs) var(--space-md)',
          // fontWeight: '500',
          border: '2px solid var(--themePrimary)',
        }}
      >
        Login
      </BtnInverted>
      <Btn
        variant="primary"
        size="sm"
        style={{
          padding: 'var(--space-xxxs) var(--space-md)',
          // fontWeight: '500',
          border: '2px solid var(--themePrimary)',
        }}
      >
        SignUp
      </Btn>
    </>
  ),
  navbarLogo: (
    <div className="flex flex--column align-items--c justify-content--c font-weight--600 mx--sm">
      <FaShopify
        style={{ fontSize: 'var(--text-xxxl)', color: 'var(--themePrimary)' }}
      />
      <div className="text--xs">Shoppin Square</div>
    </div>
  ),
};
design2NavbarResp1.parameters = {
  // for storybook to show in fullscreen
  layout: 'fullscreen',
};
