import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LangSwitcher> = {
  title: 'Shared/LangSwitcher',
  component: LangSwitcher,
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Default: Story = {
  args: {
  },
};
