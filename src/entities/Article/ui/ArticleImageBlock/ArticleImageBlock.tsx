import type { IArticleImageBlock } from '../../model/types/articleSchema';

import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';

import classes from './ArticleImageBlock.module.scss';

interface IProps {
  className?: string;
  data: IArticleImageBlock;
}

export const ArticleImageBlock = memo<IProps>(function ArticleImageBlock(props) {
  const { className, data } = props;
  const { Text } = Typography;
  const { title, url } = data;

  return (
    <div className={classNames(classes['article-image-block'], className)}>
      <figure>
        <picture>
          <source srcSet={url} type="image/webp" />
          <img
            className={classes['article-image-block__image']}
            src={url}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </picture>
        {title
          ? (
            <figcaption className={classes['article-image-block__caption']}>
              <Text>{title}</Text>
            </figcaption>
            )
          : null}
      </figure>
    </div>
  );
});
