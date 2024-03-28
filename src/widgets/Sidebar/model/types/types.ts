import type React from 'react';
import type { AppRoutes } from '@/shared/config/router/routerConfig';

type AppRoutePaths = typeof AppRoutes[keyof typeof AppRoutes];
type AppRouteNames = keyof typeof AppRoutes;

export interface ISidebarItem {
  path: AppRoutePaths;
  name: AppRouteNames;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
