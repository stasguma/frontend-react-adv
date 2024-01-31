import { lazy } from 'react';

/* eslint-disable-next-line */
const HomePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./ui/HomePage")), 20000);
  });
});

export { HomePageAsync as HomePage };
