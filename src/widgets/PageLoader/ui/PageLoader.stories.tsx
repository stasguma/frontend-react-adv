import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PageLoader> = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {
  args: {},
};
