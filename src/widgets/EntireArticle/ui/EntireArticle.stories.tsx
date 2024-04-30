import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { commentSlice } from '@/entities/Comment';
import { articleSlice } from '@/entities/Article';
import { EntireArticle } from './EntireArticle';

const meta: Meta<typeof EntireArticle> = {
  title: 'Widgets/EntireArticle',
  component: EntireArticle,
  decorators: [
    withStoreDecorator({
      initialState: {
        session: {
          data: {
            id: 2,
            username: 'pespatron',
            isAuthenticated: true,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBHb29kIEZvciBZb3UiLCJpYXQiOjE1MTYyMzkwMjJ9.PuT8C27aM6eEWFws3c4Negisv_wWtmlT4Eg9Gn-AnNT',
            avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
            role: 'user',
          },
        },
      },
      asyncReducers: {
        [articleSlice.name]: articleSlice.reducer,
        [commentSlice.name]: commentSlice.reducer,
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof EntireArticle>;

export const Default: Story = {
  args: {},
};
