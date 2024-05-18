import { memo } from 'react';
import { Skeleton } from '@/shared/ui';

import classes from './ArticleListCardSkeleton.module.scss';
import { classNames } from '@/shared/lib';

export const ArticleListCardSkeleton = memo(function ArticleListCardSkeleton() {
  const populatedArray = Array.from(Array(4).keys());

  return (
    <div className={classes['article-list-card-skeleton']}>
      <div>
        <Skeleton
          width="100%"
          height={340}
        />
        <div className={classes['article-list-card-skeleton__categories']}>
          {populatedArray.map(c => (
            <Skeleton
              key={c}
              width={70}
              height={24}
            />
          ))}
        </div>
        <div>
          <div className={classes['article-list-card-skeleton__title']}>
            <Skeleton
              width="100%"
              height={30}
              rows={2}
            />
          </div>
          <div className={classes['article-list-card-skeleton__body']}>
            <Skeleton
              width="100%"
              height={18}
              rows={5}
            />
          </div>
          <div className={classNames('row row-cols-auto justify-content-between', classes['article-list-card-skeleton__meta'])}>
            <div>
              <Skeleton width={160} height={18} />
            </div>
            <div>
              <Skeleton width={60} height={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// <div className={classNames(classes['article-list-card'], className)}>
//   <Link to={`/article/${id}`}>
//     <picture className={classes['article-list-card__img-wrapper']}>
//       <source srcSet={imageUrl} type="image/webp" />
//       <img
//         className={classes['article-list-card__image']}
//         src={imageUrl}
//         alt={title}
//         loading="lazy"
//         decoding="async"
//       />
//     </picture>
//   </Link>
//   <div className={classes['article-list-card__categories']}>{categories.map(c => <span key={c}>{`#${c}`}</span>)}</div>
//   <div className={classes['article-list-card__body']}>
//     <Title variant="3">
//       <Link to={`/article/${id}`}>{title}</Link>
//     </Title>
//     <div>
//       <Text className={classes['article-list-card__excerpt']}>{Array(3).fill(excerpt).join(' ')}</Text>
//     </div>
//     {/* <div className="row row-cols-auto justify-content-between"> */}
//     {/* <div className="col"><Text size="sm">Author: </Text></div> */}
//     {/* </div> */}
//     <div className={classNames('row row-cols-auto justify-content-between', classes['article-list-card__meta'])}>
//       <div>
//         <Text size="sm">{formatDate(createdAt)}</Text>
//         {' '}
//         ●
//         {' '}
//         <Text size="sm">
//           ~
//           {`${readTime} min read`}
//         </Text>
//       </div>
//       <div className="col align-items-center d-flex">
//         <EyeIcon className={classes['article-list-card__icon']} />
//         <Text size="sm">{views}</Text>
//       </div>
//     </div>
//   </div>
// </div>;
