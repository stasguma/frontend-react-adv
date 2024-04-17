import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 300,
    height: 20,
  },
};

export const Circle: Story = {
  args: {
    width: 150,
    height: 150,
    circle: true,
  },
};

export const Rows: Story = {
  args: {
    width: 300,
    height: 20,
    rows: 5,
  },
};
