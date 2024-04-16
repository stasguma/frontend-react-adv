import { lazy } from 'react';

// /* eslint-disable-next-line */
const ArticleDetailsPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/ArticleDetailsPage/ArticleDetailsPage')), 2000);
  });
});

export { ArticleDetailsPageAsync as ArticleDetailsPage };
