import { lazy } from 'react';

const MyProfilePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/MyProfilePage')), 2000);
  });
});

export { MyProfilePageAsync as MyProfilePage };
