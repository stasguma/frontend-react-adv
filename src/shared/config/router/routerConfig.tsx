import type { RouteObject } from 'react-router-dom';
import type { TObjectValues } from '@/shared/types';

import Layout from '@/app/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { Error404Page } from '@/pages/Error404Page';

const AppRouteNames = {
  HOME: 'home',
  ABOUT: 'about',
  PROFILE: 'profile',
  ERROR404: 'error404',
} as const;

const AppRoutePaths = {
  HOME: '/',
  ABOUT: '/about',
  PROFILE: '/profile',
  ERROR404: '*',
} as const;

export const AppRoutes: Record<
  TObjectValues<typeof AppRouteNames>,
  TObjectValues<typeof AppRoutePaths>
> = {
  home: '/',
  about: '/about',
  profile: '/profile',
  error404: '*',
};

const routerConfig: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: AppRoutes.home,
        element: <HomePage />,
      },
      {
        path: AppRoutes.about,
        element: <AboutPage />,
      },
      {
        path: AppRoutes.profile,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: AppRoutes.error404,
    element: <Error404Page />,
  },
];

export default routerConfig;
