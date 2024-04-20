import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
  args: {},
};
