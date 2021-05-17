import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';
// import { FaShopify } from 'react-icons/fa';
// import { Btn, BtnInverted } from '../../../Button';
import { BtnFloating } from './BtnFloating';
export default {
  title: 'Components/Buttons/Floating Action Button',
  component: BtnFloating,
} as Meta;

const Template: Story = args => {
  const [scrollToTop, setScrollToTop] = useState(false);

  /**
   * TODO: MAKE THIS WORK
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <BtnFloating {...args} onClick={() => setScrollToTop(!scrollToTop)} />
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        Container of 2x view height
      </div>
    </>
  );
};

export const DefaultBtnFloating = Template.bind({});
DefaultBtnFloating.parameters = {
  // for storybook to show in fullscreen
  layout: 'fullscreen',
};
