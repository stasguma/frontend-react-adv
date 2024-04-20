import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Article> = {
  title: 'Entities/Article',
  component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {},
};
