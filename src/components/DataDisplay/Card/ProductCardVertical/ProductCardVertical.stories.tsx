import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import {
  ProductCardVertical,
  ProductCardVerticalProps,
} from './ProductCardVertical';

export default {
  title: 'components/Data Display/Card/Product Card Vertical',
  component: ProductCardVertical,
} as Meta;

const Template: Story<ProductCardVerticalProps> = args => {
  const [wishlistItem, setWishlistItem] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<boolean>(false);

  return (
    <ProductCardVertical
      isCartItem={cartItem}
      isWishlistItem={wishlistItem}
      handleAddToCart={() => {
        setCartItem(true);
        console.log('Added to Cart');
      }}
      handleAddToWishlist={() => {
        setWishlistItem(true);
        console.log('Added to Wishlist');
      }}
      {...args}
    />
  );
};

const productImage =
  'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg';

export const Default = Template.bind({});
// Default.args = {
// }

const nonBooleanValues = {
  name: 'Product Name',
  description: 'THis is a Product Description.',
  image: productImage,
  price: '599',
  mrp: Math.round((599 * 100) / (100 - 599)),
  discount: 20,
  rating: 2,
  numberOfRatings: 30,
  handleGoToProductDetail: () => {
    console.log('Go To Product Detail Page');
  },
  handleGoToCart: () => {
    console.log('Go TO CART');
  },
  handleGoToWishlist: () => {
    console.log('Go TO Wishlist');
  },
};

export const OutOfStockProduct = Template.bind({});
OutOfStockProduct.args = {
  // id:
  ...nonBooleanValues,
  sale: false,
  inStock: false,
  isNewProduct: false,
  fastDelivery: false,
};

export const SaleProduct = Template.bind({});
SaleProduct.args = {
  // id:
  ...nonBooleanValues,
  sale: true,
  inStock: true,
  isNewProduct: false,
  fastDelivery: false,
};

export const NewProduct = Template.bind({});
NewProduct.args = {
  // id:
  ...nonBooleanValues,
  sale: false,
  inStock: true,
  isNewProduct: true,
  fastDelivery: false,
};

export const fastDeliveryProduct = Template.bind({});
fastDeliveryProduct.args = {
  // id:
  ...nonBooleanValues,
  sale: false,
  inStock: true,
  isNewProduct: false,
  fastDelivery: true,
};
