import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { BtnInverted, BtnInvertedProps } from './BtnInverted';

export default {
  title: 'Components/Buttons/Inverted Buttons',
  component: BtnInverted,
} as Meta;

const Template: Story<BtnInvertedProps> = args => <BtnInverted {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  shape: 'rounded',
  children: 'primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'secondary button',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success button',
  variant: 'success',
};

export const ErrorBtnInverted = Template.bind({});
ErrorBtnInverted.args = {
  children: 'Error button',
  variant: 'error',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info button',
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning button',
  variant: 'warning',
};

export const Dark = Template.bind({});
Dark.args = {
  children: (
    <div className="flex align-items--c gap--sm">
      <FaMoon> Dark Mode</FaMoon>
    </div>
  ),
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  children: (
    <div className="flex align-items--c gap--sm">
      <FaSun> Light Mode</FaSun>
    </div>
  ),
  variant: 'light',
};

export const Custom = Template.bind({});
Custom.args = {
  children: (
    <div className="flex align-items--c gap--sm">
      <GiMuscleUp className="text--md" />
    </div>
  ),
  style: {
    padding: 'var(--space-xxxs) var(--space-sm)',
    border: '1px solid var(--danger)',
  },
  shape: 'capsule',
  size: 'xl',
  variant: 'error',
};
