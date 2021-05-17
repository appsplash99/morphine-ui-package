import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoaderInfiniteBar, LoaderInfiniteBarProps } from './LoaderInfiniteBar';

export default {
  title: 'components/Loaders/LoaderInfiniteBar',
  component: LoaderInfiniteBar,
} as Meta;

const Template: Story<LoaderInfiniteBarProps> = args => {
  return (
    <>
      <div style={{ height: '50px' }}></div>
      <LoaderInfiniteBar {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  /**for storybook to show in fullscreen*/
  layout: 'fullscreen',
};
export const Custom = Template.bind({});
Custom.parameters = {
  /**for storybook to show in fullscreen*/
  layout: 'fullscreen',
};
Custom.args = {
  showLoaderBar: true,
  style: {
    height: '6px',
  },
  progressColor: 'var(--themePrimary)',
  bgColor: 'var(--themeSecondary)',
};
