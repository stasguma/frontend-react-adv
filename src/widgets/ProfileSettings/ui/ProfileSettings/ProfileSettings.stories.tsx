import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';
import { ProfileSettings } from './ProfileSettings';

const meta: Meta<typeof ProfileSettings> = {
  title: 'Widgets/ProfileSettings',
  component: ProfileSettings,
  decorators: [withStoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof ProfileSettings>;

export const Default: Story = {
  args: {},
};
