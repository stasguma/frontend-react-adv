import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCardSkeleton } from './ArticleCardSkeleton';

const meta: Meta<typeof ArticleCardSkeleton> = {
  title: 'Entities/Article/ArticleCardSkeleton',
  component: ArticleCardSkeleton,
};

export default meta;
type Story = StoryObj<typeof ArticleCardSkeleton>;

export const Grid: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'grid', grid: 'auto / repeat(4, 1fr)', gap: '20px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    viewType: 'grid',
  },
};

export const List: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexFlow: 'column', gap: '40px', width: '50%' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    viewType: 'list',
  },
};
