import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import MyProfilePage from './MyProfilePage';

const meta: Meta<typeof MyProfilePage> = {
  title: 'Pages/MyProfilePage',
  component: MyProfilePage,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof MyProfilePage>;

export const Default: Story = {
  args: {},
};
