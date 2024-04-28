import { lazy } from 'react';

// /* eslint-disable-next-line */
const MyProfilePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/MyProfilePage')), 2000);
  });
});

export { MyProfilePageAsync as MyProfilePage };
