import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
  title: 'components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = args => <Image {...args} />;

export const ImageXXXS = Template.bind({});
ImageXXXS.args = {
  size: 'xxxs',
};
export const ImageXXS = Template.bind({});
ImageXXS.args = {
  size: 'xxs',
};
export const ImageXS = Template.bind({});
ImageXS.args = {
  size: 'xs',
};
export const ImageSM = Template.bind({});
ImageSM.args = {
  size: 'sm',
};

export const DefaultImageMd = Template.bind({});

export const ImageLg = Template.bind({});
ImageLg.args = {
  size: 'lg',
};
export const ImageXL = Template.bind({});
ImageXL.args = {
  size: 'xl',
};
export const ImageXXL = Template.bind({});
ImageXXL.args = {
  size: 'xxl',
};
export const ImageXXXL = Template.bind({});
ImageXXXL.args = {
  size: 'xxxl',
};

export const ResponsiveImage = Template.bind({});
ResponsiveImage.args = {
  responsive: true,
  shape: 'rounded',
  style: {
    maxHeight: '500px',
    maxWidth: '500px',
    boxShadow: '0 0 20px -10px hsl(187deg 97% 24%)',
  },
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  src: 'https://bit.ly/sage-adebayo',
  alt: 'Segun Adebayo',
  shape: 'circular',
  size: 'xxl',
};
