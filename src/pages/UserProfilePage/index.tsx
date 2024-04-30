import { lazy } from 'react';

const UserProfilePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/UserProfilePage')), 2000);
  });
});

export { UserProfilePageAsync as UserProfilePage };
