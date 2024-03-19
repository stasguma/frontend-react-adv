import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LoginModal> = {
  title: 'Features/LoginModal',
  component: LoginModal,
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
