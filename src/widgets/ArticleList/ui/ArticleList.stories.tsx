import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { articleSlice } from '@/entities/Article';
import { ArticleList } from './ArticleList';
import { articleAdapter } from '@/entities/Article/model/slice/articleSlice';

const meta: Meta<typeof ArticleList> = {
  title: 'Widgets/ArticleList',
  component: ArticleList,
  decorators: [
    withStoreDecorator({
      asyncReducers: { [articleSlice.name]: articleSlice.reducer },
      initialState: {
        [articleSlice.name]: {
          data: articleAdapter.getInitialState(),
          viewType: 'grid',
          page: 1,
          limit: 16,
          hasMore: true,
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
  args: {},
};
