import type { Meta, StoryObj } from '@storybook/react';

import { CommentSection } from './CommentSection';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentSection> = {
  title: 'Entities/Comment/CommentSection',
  component: CommentSection,
};

export default meta;
type Story = StoryObj<typeof CommentSection>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: 1,
        text: 'Some comment',
        articleId: 1,
        userId: 1,
        createdAt: 1713121446020,
        user: {
          id: 1,
          username: 'Pespatron',
          avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
          role: 'user',
        },
      },
      {
        id: 2,
        text: 'Another comment',
        articleId: 1,
        userId: 1,
        createdAt: 1712120446020,
        user: {
          id: 1,
          username: 'Pespatron',
          avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
          role: 'user',
        },
      },
    ],
  },
};
