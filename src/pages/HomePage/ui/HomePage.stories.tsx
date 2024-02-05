import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './HomePage';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
};
