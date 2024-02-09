import { lazy } from 'react';

// /* eslint-disable-next-line */
const AboutPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/AboutPage')), 2000);
  });
});

export { AboutPageAsync as AboutPage };
