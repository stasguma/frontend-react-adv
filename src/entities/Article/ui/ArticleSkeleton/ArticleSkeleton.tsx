import { memo } from 'react';
import { Skeleton } from '@/shared/ui';

import classes from './ArticleSkeleton.module.scss';

export const ArticleSkeleton = memo(function ArticleSkeleton() {
  const populatedArray = Array.from(Array(4).keys());

  return (
    <div className={classes['article-skeleton']}>
      <div>
        <Skeleton
          width="100%"
          height={350}
        />
        <div className={classes['article-skeleton__categories']}>
          {populatedArray.map(c => (
            <Skeleton
              key={c}
              width={80}
              height={20}
            />
          ))}
        </div>
        <div className={classes['article-skeleton__title']}>
          <Skeleton
            width="100%"
            height={50}
            rows={2}
          />
        </div>
      </div>
      <div className={classes['article-skeleton__paragraphs']}>
        <Skeleton
          width="100%"
          height={24}
          rows={6}
        />
      </div>
    </div>
  );
});
