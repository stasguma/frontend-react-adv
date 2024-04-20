import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { articleSlice } from '@/entities/Article';
import { EntireArticle } from './EntireArticle';

const meta: Meta<typeof EntireArticle> = {
  title: 'Widgets/EntireArticle',
  component: EntireArticle,
  decorators: [
    withStoreDecorator({
      asyncReducers: { [articleSlice.name]: articleSlice.reducer },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof EntireArticle>;

export const Default: Story = {
  args: {},
};
