import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  LoaderCometSpinner,
  LoaderCometSpinnerProps,
} from './LoaderCometSpinner';

export default {
  title: 'components/Loaders/LoaderCometSpinner',
  component: LoaderCometSpinner,
} as Meta;

const Template: Story<LoaderCometSpinnerProps> = args => (
  <LoaderCometSpinner {...args} />
);

export const DefaultLCS = Template.bind({});
export const CustomLCS = Template.bind({});
CustomLCS.args = {
  color: 'var(--themeRed)',
  style: {
    height: '100px',
    width: '100px',
  },
};
