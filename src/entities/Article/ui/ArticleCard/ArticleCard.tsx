import type { ReactNode } from 'react';
import type { IArticle } from '../../model/types/articleSchema';

import { memo } from 'react';

import { ArticleGridCard } from '../ArticleGridCard/ArticleGridCard';
import { ArticleListCard } from '../ArticleListCard/ArticleListCard';

interface IProps {
  viewType: 'list' | 'grid';
  data: IArticle;
  className?: string;
  children?: ReactNode;
}

export const ArticleCard = memo<IProps>(function ArticleCard(props) {
  const { data, viewType } = props;

  if (viewType === 'grid') {
    return <ArticleGridCard data={data} />;
  }

  return <ArticleListCard data={data} />;
});
