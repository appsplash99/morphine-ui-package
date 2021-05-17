import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
// import { FaShopify } from 'react-icons/fa';
// import { Btn, BtnInverted } from '../../../Button';
import { NavbarResp2 } from './NavbarResp2';

export default {
  title: 'Components/Navigation/Navbar/Responsive Navbar 2',
  component: NavbarResp2,
} as Meta;

const Template: Story = args => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <NavbarResp2
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

export const DefaultResNavbar2 = Template.bind({});
DefaultResNavbar2.parameters = {
  /** for storybook to show in fullscreen */
  layout: 'fullscreen',
};

export const CustomNavbarResp2 = Template.bind({});
CustomNavbarResp2.parameters = {
  /** for storybook to show in fullscreen */
  layout: 'fullscreen',
};

CustomNavbarResp2.args = {
  desktopMenuStyle: {
    // position: 'fixed',
    backgroundColor: 'var(--grey-100)',
  },
};
