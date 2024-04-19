import type { IArticleTextBlock } from '../../model/types/articleSchema';

import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';

import classes from './ArticleTextBlock.module.scss';

interface IProps {
  className?: string;
  data: IArticleTextBlock;
}

export const ArticleTextBlock = memo<IProps>(function ArticleTextBlock(props) {
  const { className, data } = props;
  const { Title, Paragraph } = Typography;
  const { title, paragraphs } = data;

  return (
    <div className={classNames(classes['article-text-block'], className)}>
      {title ? <Title variant="3">{title}</Title> : null}
      {paragraphs.map((p, index) => (
        <Paragraph
          key={index}
          className={classes['article-text-block__paragraph']}
        >
          {p}
        </Paragraph>
      ))}
    </div>
  );
});
