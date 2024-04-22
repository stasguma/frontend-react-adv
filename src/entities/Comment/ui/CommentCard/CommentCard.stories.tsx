import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentCard> = {
  title: 'Entities/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {},
};
