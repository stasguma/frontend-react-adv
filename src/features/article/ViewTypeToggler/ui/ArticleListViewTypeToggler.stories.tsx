import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { ArticleListViewTypeToggler } from './ArticleListViewTypeToggler';

const meta: Meta<typeof ArticleListViewTypeToggler> = {
  title: 'Features/article/ArticleListViewTypeToggler',
  component: ArticleListViewTypeToggler,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof ArticleListViewTypeToggler>;

export const Default: Story = {
  args: {},
};
