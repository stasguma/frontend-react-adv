import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, EAppLinkTheme } from './AppLink';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: EAppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: EAppLinkTheme.SECONDARY,
  },
};
