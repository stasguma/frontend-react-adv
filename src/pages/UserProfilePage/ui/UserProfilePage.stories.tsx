import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import UserProfilePage from './UserProfilePage';

const meta: Meta<typeof UserProfilePage> = {
  title: 'Pages/UserProfilePage',
  component: UserProfilePage,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof UserProfilePage>;

export const Default: Story = {
  args: {},
};
