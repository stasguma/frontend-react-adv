import { memo } from 'react';
import { Skeleton } from '@/shared/ui';

import classes from './ArticleGridCardSkeleton.module.scss';

export const ArticleGridCardSkeleton = memo(function ArticleGridCardSkeleton() {
  const populatedArray = Array.from(Array(4).keys());

  return (
    <div className={classes['article-card-skeleton']}>
      <div>
        <Skeleton
          width="100%"
          height={190}
        />
        <div className={classes['article-card-skeleton__categories']}>
          {populatedArray.map(c => (
            <Skeleton
              key={c}
              width={70}
              height={24}
            />
          ))}
        </div>
        <div>
          <div className={classes['article-card-skeleton__title']}>
            <Skeleton
              width="100%"
              height={30}
              rows={2}
            />
          </div>
          <div className={classes['article-card-skeleton__views']}>
            <Skeleton width={80} height={18} />
          </div>
          <div className={classes['article-card-skeleton__meta']}>
            <Skeleton width={160} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
});
