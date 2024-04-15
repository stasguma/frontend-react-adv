import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { UploadAvatar } from './UploadAvatar';

const meta: Meta<typeof UploadAvatar> = {
  title: 'Features/profile/UploadAvatar',
  component: UploadAvatar,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof UploadAvatar>;

export const Default: Story = {
  args: {
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
  },
};
