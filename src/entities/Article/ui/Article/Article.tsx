import type { IArticle } from '../../model/types/articleSchema';
import type { ReactElement } from 'react';

import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { formatDate } from '../../lib/formatDate';

import classes from './Article.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';

interface IProps {
  className?: string;
  data: IArticle;
  commentsSlot?: ReactElement;
}

export const Article = memo<IProps>(function Article(props) {
  const { className, data, commentsSlot } = props;
  const { Title, Text } = Typography;
  const {
    title,
    imageUrl,
    views,
    readTime,
    categories,
    createdAt,
    blocks,
  } = data;

  const createBlocks = () => {
    return blocks.map((b) => {
      switch (b.type) {
        case 'text':
          return <ArticleTextBlock key={b.id} data={b} />;
        case 'image':
          return <ArticleImageBlock key={b.id} data={b} />;
        case 'code':
          return <ArticleCodeBlock key={b.id} data={b} />;
        default:
          break;
      }
    });
  };

  return (
    <article className={classNames(classes.article, className)}>
      <header>
        <picture className={classes['article__img-wrapper']}>
          <source srcSet={imageUrl} type="image/webp" />
          <img
            className={classes.article__image}
            src={imageUrl}
            alt={title}
            decoding="async"
          />
        </picture>
        <div className={classes.article__categories}>
          {categories.map(c => <span key={c}>{`#${c}`}</span>)}
        </div>
        <div className={classes.article__meta}>
          <div className="row row-cols-auto justify-content-between">
            <div className="col align-items-center d-flex">
              <EyeIcon className={classes.article__icon} />
              <Text size="sm">{views}</Text>
            </div>
            {/* <div className="col"><Text size="sm">Author: </Text></div> */}
          </div>
          <div>
            <Text>{formatDate(createdAt)}</Text>
            {' '}
            ●
            {' '}
            <Text>
              ~
              {`${readTime} min read`}
            </Text>
          </div>
        </div>
        <Title variant="1" className={classes.article__title}>{title}</Title>
      </header>
      <div>
        {createBlocks()}
      </div>
      {commentsSlot ? commentsSlot : null}
    </article>
  );
});
