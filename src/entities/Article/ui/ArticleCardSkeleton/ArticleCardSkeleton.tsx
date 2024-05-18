import { memo } from 'react';

import { ArticleGridCardSkeleton } from '../ArticleGridCardSkeleton/ArticleGridCardSkeleton';
import { ArticleListCardSkeleton } from '../ArticleListCardSkeleton/ArticleListCardSkeleton';

interface IProps {
  viewType: 'grid' | 'list';
}

export const ArticleCardSkeleton = memo<IProps>(function ArticleCardSkeleton(props) {
  const { viewType } = props;

  if (viewType === 'grid') {
    return <ArticleGridCardSkeleton />;
  }

  return <ArticleListCardSkeleton />;
});
