import { lazy } from 'react';

// /* eslint-disable-next-line */
const ArticlePageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./ui/ArticlePage/ArticlePage')), 2000);
  });
});

export { ArticlePageAsync as ArticlePage };
