import type { ISidebarItem } from '../types/types';

import HomeIcon from '@/shared/assets/icons/home.svg';
import CofeeIcon from '@/shared/assets/icons/coffee.svg';
import UserIcon from '@/shared/assets/icons/user.svg';
import StacksIcon from '@/shared/assets/icons/stacks.svg';

export const SidebarItemList: ISidebarItem[] = [
  {
    path: '/',
    name: 'home',
    icon: HomeIcon,
  },
  {
    path: '/about',
    name: 'about',
    icon: CofeeIcon,
  },
  {
    path: '/profile',
    name: 'profile',
    icon: UserIcon,
    private: true,
  },
  {
    path: '/articles',
    name: 'articles',
    icon: StacksIcon,
    private: true,
  },
];
