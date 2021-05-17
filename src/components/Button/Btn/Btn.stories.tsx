import React from 'react';
import { Btn, BtnProps } from './Btn';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Buttons/Default Buttons',
  component: Btn,
} as Meta;

const Template: Story<BtnProps> = args => <Btn {...args} />;

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning',
};

export const ErrorBtn = Template.bind({});
ErrorBtn.args = {
  variant: 'error',
  children: 'Error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Info',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Dark',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Light',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  shape: 'capsule',
  className: 'bg--themeRed text--light',
  children: 'Press Me!',
};
