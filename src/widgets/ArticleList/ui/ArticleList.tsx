import type { ReactNode } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { useAppSelector } from '@/shared/model';
import {
  ArticleCard,
  ArticleCardSkeleton,
  selectViewType,
  useGetArticlesQuery,
} from '@/entities/Article';
import { ArticleListViewTypeToggler } from '@/features/article/ViewTypeToggler';

import classes from './ArticleList.module.scss';

export const ArticleList = memo(function ArticleList() {
  const { data, isLoading, isSuccess } = useGetArticlesQuery();
  const viewType = useAppSelector(selectViewType);
  const populatedArray = Array.from(Array(viewType === 'grid' ? 8 : 2).keys());

  const Wrapper = ({ children }: { children: ReactNode; }) => (
    <div className={classes['articles-list']}>
      <div className={classes['articles-list__actions']}>
        <ArticleListViewTypeToggler />
      </div>
      <div className={classNames(
        { [classes['articles-list__grid']]: viewType === 'grid' },
        { [classes['articles-list__list']]: viewType === 'list' }
      )}
      >
        {children}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <Wrapper>
        {populatedArray.map((_, index) => <ArticleCardSkeleton key={index} viewType={viewType} />)}
      </Wrapper>
    );
  };

  return (
    <Wrapper>
      {isSuccess
        ? data.map(a => (
          <ArticleCard
            key={a.id}
            data={a}
            viewType={viewType}
          />
        ))
        : null}
    </Wrapper>
  );
});
