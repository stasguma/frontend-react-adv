import type { RouteObject } from 'react-router-dom';

import Layout from '@/app/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { Error404Page } from '@/pages/Error404Page';
import { AboutPage } from '@/pages/AboutPage';

enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  ERROR404 = 'error404'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ERROR404]: '*',
};

const routerConfig: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: RoutePath.home,
        element: <HomePage />,
      },
      {
        path: RoutePath.about,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: RoutePath.error404,
    element: <Error404Page />,
  },
];

export default routerConfig;
