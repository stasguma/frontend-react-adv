import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { articleSlice } from '@/entities/Article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'Widgets/ArticleList',
  component: ArticleList,
  decorators: [
    withStoreDecorator({
      asyncReducers: { [articleSlice.name]: articleSlice.reducer },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
  args: {},
};
