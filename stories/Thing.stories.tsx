import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Btn } from '../src/index';
import { ButtonProps } from '../src/components/Button/Button.types';

export default {
  title: 'Welcome',
  component: Btn,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Btn {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
