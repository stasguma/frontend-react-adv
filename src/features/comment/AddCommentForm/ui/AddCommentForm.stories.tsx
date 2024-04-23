import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { AddCommentForm } from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'Features/comment/AddCommentForm',
  component: AddCommentForm,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
  args: {

  },
};
