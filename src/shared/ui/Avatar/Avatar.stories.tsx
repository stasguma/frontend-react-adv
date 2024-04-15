import type { Meta, StoryObj } from '@storybook/react';

// import i18n from '@/shared/config/i18n/i18n';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const imageUrl = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg';

export const Base: Story = {
  args: {
    imageUrl,
  },
};

export const AvatarSizes: Story = {
  name: 'Avatar sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <Avatar
        imageUrl={imageUrl}
        size="xl"
      />
      <Avatar
        imageUrl={imageUrl}
        size="lg"
      />
      <Avatar
        imageUrl={imageUrl}
      />
      <Avatar
        imageUrl={imageUrl}
        size="sm"
      />
    </div>
  ),
};
