import type { IArticleCodeBlock } from '../../model/types/articleSchema';

import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './ArticleCodeBlock.module.scss';

interface IProps {
  className?: string;
  data: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo<IProps>(function ArticleCodeBlock(props) {
  const { className, data } = props;
  const { code } = data;

  return (
    <div className={classNames(classes['article-code-block'], className)}>
      <figure>
        <pre>
          <code className={classes['article-code-block__code']}>{code}</code>
        </pre>
      </figure>
    </div>
  );
});
