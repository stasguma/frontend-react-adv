import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article, ArticleSkeleton, useGetArticleByIdQuery } from '@/entities/Article';
import { CommentSection, useGetCommentsByArticleIdQuery } from '@/entities/Comment';
import { AddCommentForm, addCommentThunk } from '@/features/comment/AddCommentForm';

import classes from './EntireArticle.module.scss';
import { useAppDispatch } from '@/shared/model';

export const EntireArticle = memo(function EntireArticle() {
  const { id = '1' } = useParams();
  const dispatch = useAppDispatch();

  const { data: article, isLoading, isSuccess } = useGetArticleByIdQuery(id);
  const {
    data: comments,
    isLoading: isLoadingComments,
    isSuccess: isSuccessComments,
  } = useGetCommentsByArticleIdQuery(id);

  const addCommentHandler = (data: { text: string; }) => {
    dispatch(addCommentThunk(data));
  };

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
            data={article}
            commentsSlot={(
              <CommentSection
                comments={comments}
                addCommentSlot={
                  <AddCommentForm onAddComment={addCommentHandler} />
                }
              />
            )}
          />
          )
        : null}
    </div>
  );
});
