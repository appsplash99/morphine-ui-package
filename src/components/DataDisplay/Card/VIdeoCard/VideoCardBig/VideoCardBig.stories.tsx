import { Meta, Story } from '@storybook/react';
import React from 'react';
import { VideoCardBig, VideoCardBigProps } from './VideoCardBig';

export default {
  title: 'components/Data Display/Card/Video Card Big',
  component: VideoCardBig,
} as Meta;

const Template: Story<VideoCardBigProps> = args => <VideoCardBig {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoId: 'Ehnp6MzX1v4',
  title: 'Nietzsche and Psychology: How To Become Who You Are',
  description:
    'In this video we explore why using our leisure for passive purposes tends to breed mediocrity and mental illness.',
  length: '14:38',
  views: 3017326,
  likes: 76,
  category: ['psychology'],
  date: 'Feb 22, 2017',
  isWatchLaterItem: true,
  isPlaylistItem: true,
  isLikedVideo: true,
};
