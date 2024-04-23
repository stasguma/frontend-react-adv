import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { EditProfileForm } from './EditProfileForm';

const meta: Meta<typeof EditProfileForm> = {
  title: 'Features/profile/EditProfileForm',
  component: EditProfileForm,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof EditProfileForm>;

export const Default: Story = {
  args: {
    data: {
      id: 2,
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      city: 'London',
      country: 'United Kingdom',
      currency: 'EUR',
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
    },
  },
};
