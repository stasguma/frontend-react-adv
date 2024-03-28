import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem } from './SidebarItem';
import { SidebarItemList } from '../../model/consts/SidebarItemList';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SidebarItem> = {
  title: 'Widgets/Sidebar/SidebarItem',
  component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  args: {
    itemData: {
      ...SidebarItemList[0],
    },
  },
};
