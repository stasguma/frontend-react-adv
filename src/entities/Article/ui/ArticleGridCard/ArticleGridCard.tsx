import type { ReactNode } from 'react';
import type { IArticle } from '../../model/types/articleSchema';

import { memo } from 'react';
import { Link } from 'react-router-dom';

// import { Skeleton } from '@/shared/ui';
import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import { formatDate } from '../../lib/formatDate';

import classes from './ArticleGridCard.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';

interface IProps {
  className?: string;
  children?: ReactNode;
  data: IArticle;
}

export const ArticleGridCard = memo<IProps>(function ArticleGridCard(props) {
  const { className, data } = props;
  const { Title, Text } = Typography;
  const { id, title, imageUrl, views, readTime, categories, createdAt } = data;

  return (
    <div className={classNames(classes['article-card'], className)}>
      <Link to={`/article/${id}`}>
        <picture className={classes['article-card__img-wrapper']}>
          <source srcSet={imageUrl} type="image/webp" />
          <img
            className={classes['article-card__image']}
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </Link>
      <div className={classes['article-card__categories']}>{categories.map(c => <span key={c}>{`#${c}`}</span>)}</div>
      <div className={classes['article-card__body']}>
        <Title variant="4">
          <Link to={`/article/${id}`}>{title}</Link>
        </Title>
        <div className="row row-cols-auto justify-content-between">
          <div className="col align-items-center d-flex">
            <EyeIcon className={classes['article-card__icon']} />
            <Text size="sm">{views}</Text>
          </div>
          {/* <div className="col"><Text size="sm">Author: </Text></div> */}
        </div>
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
      </div>
    </div>
  );
});
