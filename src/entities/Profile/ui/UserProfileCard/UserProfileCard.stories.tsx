import type { Meta, StoryObj } from '@storybook/react';

import { UserProfileCard } from './UserProfileCard';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UserProfileCard> = {
  title: 'Entities/Profile/UserProfileCard',
  component: UserProfileCard,
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

export const Default: Story = {
  args: {
    data: {
      id: 2,
      username: 'pespatron',
      avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
      role: 'user',
      email: 'pespatron@gmail.com',
      city: 'Kyiv',
      country: 'Ukraine',
      currency: 'UAH',
    },
  },
};
