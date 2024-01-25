import { lazy } from 'react';

/* eslint-disable-next-line */
const HomePageAsync = lazy(() => import("./ui/HomePage"));

export { HomePageAsync as HomePage };
