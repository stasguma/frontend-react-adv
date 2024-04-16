import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticlesPage> = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
  args: {},
};
