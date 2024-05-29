import type { ReactNode } from 'react';
import type { IArticle, IArticleTextBlock } from '../../model/types/articleSchema';

import { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';

// import { Skeleton } from '@/shared/ui';
import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import { formatDate } from '../../lib/formatDate';

import classes from './ArticleListCard.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';

interface IProps {
  className?: string;
  children?: ReactNode;
  data: IArticle;
}

type Ref = HTMLDivElement;

export const ArticleListCard = memo(forwardRef<Ref, IProps>(function ArticleListCard(props, ref) {
  const { className, data } = props;
  const { Title, Text } = Typography;
  const { id, title, imageUrl, views, readTime, categories, createdAt, blocks } = data;
  const excerpt = (blocks.find(b => b.type === 'text') as IArticleTextBlock).paragraphs[0];

  return (
    <div ref={ref} className={classNames(classes['article-list-card'], className)}>
      <Link to={`/article/${id}`}>
        <picture className={classes['article-list-card__img-wrapper']}>
          <source srcSet={imageUrl} type="image/webp" />
          <img
            className={classes['article-list-card__image']}
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </Link>
      <div className={classes['article-list-card__categories']}>{categories.map(c => <span key={c}>{`#${c}`}</span>)}</div>
      <div className={classes['article-list-card__body']}>
        <Title variant="3">
          <Link to={`/article/${id}`}>{title}</Link>
        </Title>
        <div>
          <Text className={classes['article-list-card__excerpt']}>{Array(3).fill(excerpt).join(' ')}</Text>
        </div>
        {/* <div className="row row-cols-auto justify-content-between"> */}
        {/* <div className="col"><Text size="sm">Author: </Text></div> */}
        {/* </div> */}
        <div className={classNames('row row-cols-auto justify-content-between', classes['article-list-card__meta'])}>
          <div>
            <Text size="sm">{formatDate(createdAt)}</Text>
            {' '}
            ●
            {' '}
            <Text size="sm">
              ~
              {`${readTime} min read`}
            </Text>
          </div>
          <div className="col align-items-center d-flex">
            <EyeIcon className={classes['article-list-card__icon']} />
            <Text size="sm">{views}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}));
