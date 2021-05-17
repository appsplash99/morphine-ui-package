import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  LoaderDonutSpinner,
  LoaderDonutSpinnerProps,
} from './LoaderDonutSpinner';

export default {
  title: 'components/Loaders/LoaderDonutSpinner',
  component: LoaderDonutSpinner,
} as Meta;

const Template: Story<LoaderDonutSpinnerProps> = args => (
  <LoaderDonutSpinner {...args} />
);

export const DonutSpinnerLoaderXS = Template.bind({});
DonutSpinnerLoaderXS.args = {
  size: 'xs',
};

export const DonutSpinnerLoaderSM = Template.bind({});
DonutSpinnerLoaderSM.args = {
  size: 'sm',
};

export const DefaultDonutSpinnerLoaderMD = Template.bind({});
DefaultDonutSpinnerLoaderMD.args = {
  size: 'md',
};

export const DonutSpinnerLoaderLG = Template.bind({});
DonutSpinnerLoaderLG.args = {
  size: 'lg',
};

export const DonutSpinnerLoaderXL = Template.bind({});
DonutSpinnerLoaderXL.args = {
  size: 'xl',
  variant: 'secondary',
};

export const DonutSpinnerLoaderXXL = Template.bind({});
DonutSpinnerLoaderXXL.args = {
  size: 'xxl',
  variant: 'light',
};

export const DonutSpinnerLoaderXXXL = Template.bind({});
DonutSpinnerLoaderXXXL.args = {
  size: 'xxxl',
  variant: 'dark',
};
