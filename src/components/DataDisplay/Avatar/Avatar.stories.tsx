import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const AvatarXXS = Template.bind({});
AvatarXXS.args = {
  size: 'xxs',
};

export const AvatarXS = Template.bind({});
AvatarXS.args = {
  size: 'xs',
};

export const AvatarSM = Template.bind({});
AvatarSM.args = {
  size: 'sm',
};

export const DefaultAvatarMD = Template.bind({});
DefaultAvatarMD.args = {};

export const AvatarLG = Template.bind({});
AvatarLG.args = {
  size: 'lg',
};

export const AvatarXL = Template.bind({});
AvatarXL.args = {
  size: 'xl',
};

export const AvatarXXL = Template.bind({});
AvatarXXL.args = {
  size: 'xxl',
  avatarStatus: 'online',
  showStatusBadge: true,
  badgePosition: {
    right: 0,
    bottom: 0,
  },
  // variant: 'rounded',
};
