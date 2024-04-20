import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article, ArticleSkeleton, useGetArticleByIdQuery } from '@/entities/Article';

import classes from './EntireArticle.module.scss';

export const EntireArticle = memo(function EntireArticle() {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = useGetArticleByIdQuery(id ?? '1');

  if (isLoading) {
    return (
      <div className={classes['article-wrapper']}>
        <ArticleSkeleton />
      </div>
    );
  }

  return (
    <div className={classes['article-wrapper']}>
      {isSuccess ? <Article data={data} /> : null}
    </div>
  );
});
