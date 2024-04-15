import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routerConfig from './routerConfig';

const router = createBrowserRouter(routerConfig);

const AppRouterProvider: FC = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
};

export default AppRouterProvider;
