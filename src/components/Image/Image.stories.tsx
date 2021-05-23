import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
  title: 'components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = args => <Image {...args} />;

export const DefaultImage = Template.bind({});

export const ResponsiveImage = Template.bind({});
ResponsiveImage.args = {
  responsive: true,
  style: {
    maxHeight: '500px',
    maxWidth: '500px',
    borderRadius: '0.5rem',
  },
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  src: 'https://bit.ly/sage-adebayo',
  alt: 'Segun Adebayo',
  shape: 'circular',
  height: '80px',
  width: '80px',
  style: { boxShadow: '0 0 20px -10px hsl(187deg 97% 24%)' },
};
