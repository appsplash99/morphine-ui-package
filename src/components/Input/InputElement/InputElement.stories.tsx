import { Meta, Story } from '@storybook/react';
import React from 'react';
import { InputElement, InputElementProps } from './InputElement';

export default {
  title: 'components/input/input Element',
  component: InputElement,
} as Meta;

const Template: Story = args => (
  <div className="flex align-items--c gap">
    <label htmlFor="name">Name</label>
    <InputElement {...args} />
  </div>
);

export const DefaultInputElement = Template.bind({});
export const CustomInputElement = Template.bind({});
CustomInputElement.args = {
  placeholder: 'cool',
  shape: 'capsule',
};
