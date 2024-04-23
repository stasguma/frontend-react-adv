import type { Meta, StoryObj } from '@storybook/react';

import { CommentSection } from './CommentSection';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentSection> = {
  title: 'Entities/CommentSection',
  component: CommentSection,
};

export default meta;
type Story = StoryObj<typeof CommentSection>;

export const Default: Story = {
  args: {},
};
