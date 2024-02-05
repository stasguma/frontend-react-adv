import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Sidebar> = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
};
