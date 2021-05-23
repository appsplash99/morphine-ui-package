import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  ProductCardVertical,
  ProductCardVerticalProps,
} from './ProductCardVertical';

export default {
  title: 'components/Data Display/Card/Product Card Vertical',
  component: ProductCardVertical,
} as Meta;

const Template: Story<ProductCardVerticalProps> = args => (
  <ProductCardVertical {...args} />
);

export const Default = Template.bind({});
// Default.args = {

// }
