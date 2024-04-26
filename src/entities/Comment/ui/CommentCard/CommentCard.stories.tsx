import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CommentCard> = {
  title: 'Entities/Comment/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    data: {
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
  },
};
