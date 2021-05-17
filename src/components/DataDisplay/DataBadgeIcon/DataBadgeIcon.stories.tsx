import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GiShoppingBag, GiEgyptianProfile } from 'react-icons/gi';
import { DataBadgeIcon, DataBadgeIconProps } from './DataBadgeIcon';

export default {
  title: 'Components/Data Display/Data Badge Icon',
  component: DataBadgeIcon,
} as Meta;

const Template: Story<DataBadgeIconProps> = args => <DataBadgeIcon {...args} />;

export const DefaultDataBadge = Template.bind({});

export const SquareDataBadge = Template.bind({});
SquareDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xxl)' }} />,
  data: 15,
  shape: 'square',
};
export const RoundedDataBadge = Template.bind({});
RoundedDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xl)' }} />,
  data: 15,
  shape: 'rounded',
};

export const CircularDataBadge = Template.bind({});
CircularDataBadge.args = {
  icon: <GiShoppingBag style={{ fontSize: 'var(--text-xl)' }} />,
  data: 999,
  shape: 'circular',
};
export const CustomDataBadge = Template.bind({});
CustomDataBadge.args = {
  icon: <GiEgyptianProfile style={{ fontSize: 'var(--text-xl)' }} />,
  data: 999,
  shape: 'rounded',
  iconStyleProp: {
    backgroundColor: '#D4A656',
    color: '#1135A5',
  },
  badgeDataStyleProp: {
    top: '-12px',
    right: '-20px',
    backgroundColor: '#C45240',
    color: '#1135A5',
    borderRadius: '4px',
  },
};
