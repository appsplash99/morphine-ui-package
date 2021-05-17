import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LoaderBouncing, LoaderBouncingProps } from './LoaderBouncing';

// import { LoaderBouncing } from '../../components/Loader';

export default {
  title: 'Components/Loaders/LoaderBouncing',
  component: LoaderBouncing,
} as Meta;

const Template: Story<LoaderBouncingProps> = args => (
  <LoaderBouncing {...args} />
);

export const BouncingLoaderXXXS = Template.bind({});
BouncingLoaderXXXS.args = {
  size: 'xxxs',
};
export const BouncingLoaderXXS = Template.bind({});
BouncingLoaderXXS.args = {
  size: 'xxs',
};
export const BouncingLoaderXS = Template.bind({});
BouncingLoaderXS.args = {
  size: 'xs',
};
export const BouncingLoaderSM = Template.bind({});
BouncingLoaderSM.args = {
  size: 'sm',
};
export const BouncingLoaderMD = Template.bind({});
BouncingLoaderMD.args = {
  size: 'md',
};
export const BouncingLoaderLG = Template.bind({});
BouncingLoaderLG.args = {
  size: 'lg',
};
export const BouncingLoaderXL = Template.bind({});
BouncingLoaderXL.args = {
  size: 'xl',
};
export const BouncingLoaderXXL = Template.bind({});
BouncingLoaderXXL.args = {
  size: 'xxl',
  dotBgColor: 'var(--themePrimary)',
};
export const BouncingLoaderXXXL = Template.bind({});
BouncingLoaderXXXL.args = {
  size: 'xxxl',
  dotBgColor: 'var(--themeSecondary)',
};

export const BouncingLoaderXXXXL = Template.bind({});
BouncingLoaderXXXXL.args = {
  size: 'xxxxl',
  dotBgColor: 'var(--themeSecondary)',
};
