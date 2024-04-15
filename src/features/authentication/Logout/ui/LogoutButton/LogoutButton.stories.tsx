import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { LogoutButton } from './LogoutButton';

const meta: Meta<typeof LogoutButton> = {
  title: 'Features/authentication/LogoutButton',
  component: LogoutButton,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  args: {},
};
