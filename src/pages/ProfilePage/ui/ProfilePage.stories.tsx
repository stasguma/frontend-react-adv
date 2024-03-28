import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  args: {},
};
