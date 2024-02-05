import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
