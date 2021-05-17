import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FaHeart } from 'react-icons/fa';
import { BtnIcon, BtnIconProps } from './BtnIcon';
import { FaAddressCard } from 'react-icons/fa';

const BtnIconSizes = () => {
  return (
    <div className="flex flex--column gap">
      <BtnIcon size="xxs">
        <FaAddressCard className="text--xxs" style={{ fontSize: '16px' }} />
      </BtnIcon>
      <BtnIcon size="xs">
        <FaAddressCard className="text--xs" style={{ fontSize: '24px' }} />
      </BtnIcon>
      <BtnIcon size="sm">
        <FaAddressCard className="text--sm" style={{ fontSize: '32px' }} />
      </BtnIcon>
      <BtnIcon size="md">
        <FaAddressCard className="text--md" style={{ fontSize: '48px' }} />
      </BtnIcon>
      <BtnIcon size="lg">
        <FaAddressCard className="text--lg" style={{ fontSize: '64px' }} />
      </BtnIcon>
      <BtnIcon size="xl">
        <FaAddressCard className="text--xl" style={{ fontSize: '96px' }} />
      </BtnIcon>
      <BtnIcon size="xxl">
        <FaAddressCard className="text--xxl" style={{ fontSize: '128px' }} />
      </BtnIcon>
      <BtnIcon size="xxxl">
        <FaAddressCard className="text--xxxl" style={{ fontSize: '160px' }} />
      </BtnIcon>
    </div>
  );
};

export default {
  title: 'Components/Buttons/Icon Buttons',
  component: BtnIcon,
} as Meta;

const Template1: Story<BtnIconProps> = args => <BtnIcon {...args} />;

export const DefaultIconButton = Template1.bind({});

export const CustomIconButton = Template1.bind({});
CustomIconButton.args = {
  children: <FaHeart className="text--danger" style={{ fontSize: '80px' }} />,
  style: { padding: '15px', height: '64px', width: '64px' },
  size: 'xxl',
};

const Template2: Story<JSX.Element> = args => <BtnIconSizes {...args} />;

export const IconButtonSizes = Template2.bind({});
