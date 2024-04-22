import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article, ArticleSkeleton, useGetArticleByIdQuery } from '@/entities/Article';
import { CommentList, useGetCommentsByArticleIdQuery } from '@/entities/Comment';

import classes from './EntireArticle.module.scss';

export const EntireArticle = memo(function EntireArticle() {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = useGetArticleByIdQuery(id ?? '1');
  const {
    data: commentsData,
    isLoading: isLoadingComments,
    isSuccess: isSuccessComments,
  } = useGetCommentsByArticleIdQuery(id ?? '1');

  if (isLoading || isLoadingComments) {
    return (
      <div className={classes['article-wrapper']}>
        <ArticleSkeleton />
      </div>
    );
  }

  return (
    <div className={classes['article-wrapper']}>
      {isSuccess && isSuccessComments
        ? (
          <Article
            data={data}
            commentsSlot={<CommentList data={commentsData} />}
            totalComments={commentsData.length}
          />
          )
        : null}
    </div>
  );
});
