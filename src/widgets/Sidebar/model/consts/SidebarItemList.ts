import type { ISidebarItem } from '../types/types';

import HomeIcon from '@/shared/assets/icons/home.svg';
import CofeeIcon from '@/shared/assets/icons/coffee.svg';
import UserIcon from '@/shared/assets/icons/user.svg';

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
  },
];
