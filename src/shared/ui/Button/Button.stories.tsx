import type { Meta, StoryObj } from '@storybook/react';

import i18n from '@/shared/config/i18n/i18n';
import { Button, EButtonVariants } from './Button';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Base',
    variant: EButtonVariants.BASE,
  },
};

export const Primary: Story = {
  args: {
    children: i18n.t('sidebar'),
    variant: EButtonVariants.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: EButtonVariants.SECONDARY,
  },
};
