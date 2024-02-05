import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
};
