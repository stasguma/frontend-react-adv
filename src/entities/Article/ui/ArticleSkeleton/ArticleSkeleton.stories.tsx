import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSkeleton } from './ArticleSkeleton';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticleSkeleton> = {
  title: 'Entities/Article/ArticleSkeleton',
  component: ArticleSkeleton,
};

export default meta;
type Story = StoryObj<typeof ArticleSkeleton>;

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ width: '50%' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
};
