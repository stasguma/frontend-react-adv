import type { Meta, StoryObj } from '@storybook/react';

import Error404Page from './Error404Page';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Error404Page> = {
  title: 'Pages/Error404Page',
  component: Error404Page,
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {
  args: {},
};
