import { memo, useState } from 'react';

import { classNames } from '@/shared/lib';
import { ArticleCard, ArticleCardSkeleton, useGetArticlesQuery } from '@/entities/Article';

import classes from './ArticleList.module.scss';

export const ArticleList = memo(function ArticleList() {
  const { data, isLoading, isSuccess } = useGetArticlesQuery();
  const [viewType, setViewType] = useState<'grid' | 'list'>('list');
  const populatedArray = Array.from(Array(viewType === 'grid' ? 8 : 2).keys());

  if (isLoading) {
    return (
      <div className={classNames(
        { [classes['articles-grid']]: viewType === 'grid' },
        { [classes['articles-list']]: viewType === 'list' }
      )}
      >
        {populatedArray.map((_, index) => <ArticleCardSkeleton key={index} viewType={viewType} />)}
      </div>
    );
  };

  return (
    <div className={classNames(
      { [classes['articles-grid']]: viewType === 'grid' },
      { [classes['articles-list']]: viewType === 'list' }
    )}
    >
      {isSuccess
        ? data.map(a => (
          <ArticleCard
            key={a.id}
            data={a}
            viewType={viewType}
          />
        ))
        : null}
    </div>
  );
});
