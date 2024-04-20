import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCardSkeleton } from './ArticleCardSkeleton';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticleCardSkeleton> = {
  title: 'Entities/Article/ArticleCardSkeleton',
  component: ArticleCardSkeleton,
};

export default meta;
type Story = StoryObj<typeof ArticleCardSkeleton>;

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'grid', grid: 'auto / repeat(4, 1fr)', gap: '20px' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
};
