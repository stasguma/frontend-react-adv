import { memo, useCallback } from 'react';

import { classNames, useInfiniteScroll } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import {
  ArticleCard,
  ArticleCardSkeleton,
  articleSelectors,
  selectLimit,
  selectPage,
  selectViewType,
  selectHasMore,
  setPage,
  useGetArticlesQuery,
  SKELETON_ITEMS_FOR_GRID_TYPE,
  SKELETON_ITEMS_FOR_LIST_TYPE,
} from '@/entities/Article';
import { ArticleListViewTypeToggler } from '@/features/article/ViewTypeToggler';

import classes from './ArticleList.module.scss';

export const ArticleList = memo(function ArticleList() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);
  const hasMore = useAppSelector(selectHasMore);
  const viewType = useAppSelector(selectViewType);
  const articles = useAppSelector(articleSelectors.selectAll);
  const populatedArray = Array.from(Array(
    viewType === 'grid' ? SKELETON_ITEMS_FOR_GRID_TYPE : SKELETON_ITEMS_FOR_LIST_TYPE
  ).keys());
  const { isFetching } = useGetArticlesQuery(
    { page, limit },
    {
      skip: !page || !limit,
      refetchOnMountOrArgChange: true,
    }
  );

  const loadMoreHandler = useCallback(() => {
    if (!isFetching && hasMore) {
      dispatch(setPage(page + 1));
    }
  }, [isFetching, hasMore]);

  const { ref: lastArticleRef } = useInfiniteScroll(
    {
      onLoadMore: loadMoreHandler,
    }
  );

  return (
    <div className={classes['articles-list']}>
      <div className={classes['articles-list__actions']}>
        <ArticleListViewTypeToggler />
      </div>
      <div className={classNames(
        { [classes['articles-list__grid']]: viewType === 'grid' },
        { [classes['articles-list__list']]: viewType === 'list' }
      )}
      >
        {articles.length > 0
          ? articles.map((a, index) => (
            <ArticleCard
              ref={index === articles.length - 1 ? lastArticleRef : null}
              key={a.id}
              data={a}
              viewType={viewType}
            />
          ))
          : null}

        {isFetching
          ? populatedArray.map((_, index) => <ArticleCardSkeleton key={index} viewType={viewType} />)
          : null}
      </div>
    </div>
  );
});
