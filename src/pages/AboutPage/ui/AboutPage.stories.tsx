import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AboutPage> = {
  title: 'Pages/AboutPage',
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  args: {},
};
