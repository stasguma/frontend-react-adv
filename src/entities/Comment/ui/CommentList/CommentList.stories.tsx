import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentList> = {
  title: 'Entities/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {},
};
