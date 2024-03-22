import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { withStoreDecorator } from '@/shared/config/storybook/decorators/withStoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NotLoggedIn: Story = {
  args: {},
  decorators: [withStoreDecorator()],
};

export const LoggedIn: Story = {
  args: {},
  decorators: [
    withStoreDecorator({
      initialState: {
        session: {
          id: '1',
          username: 'Stas',
          token: 'Bearer asdasdadasdasdasdasd',
          isAuthenticated: true,
        },
      },
    }),
  ],
};
