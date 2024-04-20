import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
  title: 'Pages/ArticlePage',
  component: ArticlePage,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Default: Story = {
  args: {},
};
