import { memo } from 'react';

import { ArticleCard, ArticleCardSkeleton, useGetArticlesQuery } from '@/entities/Article';

import classes from './ArticleList.module.scss';

export const ArticleList = memo(function ArticleList() {
  const { data, isLoading, isSuccess } = useGetArticlesQuery();
  const populatedArray = Array.from(Array(8).keys());

  if (isLoading) {
    return (
      <div className={classes['articles-grid']}>
        {populatedArray.map((_, index) => <ArticleCardSkeleton key={index} />)}
      </div>
    );
  };

  return (
    <div className={classes['articles-grid']}>
      {isSuccess
        ? data.map(a => <ArticleCard key={a.id} data={a} />)
        : null}
    </div>
  );
});
