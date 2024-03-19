import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButton } from './LogoutButton';

const meta: Meta<typeof LogoutButton> = {
  title: 'Features/authentication/LogoutButton',
  component: LogoutButton,
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  args: {},
};
