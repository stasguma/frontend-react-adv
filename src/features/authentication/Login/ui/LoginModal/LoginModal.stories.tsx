import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { LoginModal } from './LoginModal';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LoginModal> = {
  title: 'Features/authentication/LoginModal',
  component: LoginModal,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
