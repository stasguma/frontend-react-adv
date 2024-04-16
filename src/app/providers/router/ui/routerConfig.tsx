import type { RouteObject } from 'react-router-dom';
import type { TObjectValues } from '@/shared/types';

import Layout from '@/app/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { Error404Page } from '@/pages/Error404Page';
import { PrivateGuard } from '../lib/PrivateGuard';

const AppRouteNames = {
  HOME: 'home',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'articleDetails',
  ERROR404: 'error404',
} as const;

const AppRoutePaths = {
  HOME: '/',
  ABOUT: '/about',
  PROFILE: '/profile',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/article/:id',
  ERROR404: '*',
} as const;

export const AppRoutes: Record<
  TObjectValues<typeof AppRouteNames>,
  TObjectValues<typeof AppRoutePaths>
> = {
  [AppRouteNames.HOME]: AppRoutePaths.HOME,
  [AppRouteNames.ABOUT]: AppRoutePaths.ABOUT,
  [AppRouteNames.PROFILE]: AppRoutePaths.PROFILE,
  [AppRouteNames.ARTICLES]: AppRoutePaths.ARTICLES,
  [AppRouteNames.ARTICLE_DETAILS]: AppRoutePaths.ARTICLE_DETAILS,
  [AppRouteNames.ERROR404]: AppRoutePaths.ERROR404,
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
        element: <PrivateGuard><ProfilePage /></PrivateGuard>,
      },
      {
        path: AppRoutes.articles,
        element: <PrivateGuard><ArticlesPage /></PrivateGuard>,
      },
      {
        path: AppRoutes.articleDetails,
        element: <PrivateGuard><ArticleDetailsPage /></PrivateGuard>,
      },
    ],
  },
  {
    path: AppRoutes.error404,
    element: <Error404Page />,
  },
];

export default routerConfig;
