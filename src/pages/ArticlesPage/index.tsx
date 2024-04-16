import { lazy } from 'react';

// /* eslint-disable-next-line */
const ArticlesPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/ArticlesPage/ArticlesPage')), 2000);
  });
});

export { ArticlesPageAsync as ArticlesPage };
