import { lazy } from 'react';

// /* eslint-disable-next-line */
const ProfilePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/ProfilePage')), 2000);
  });
});

export { ProfilePageAsync as ProfilePage };
