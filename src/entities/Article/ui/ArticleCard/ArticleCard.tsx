import type { ReactNode } from 'react';
import type { IArticle, TViewTypes } from '../../model/types/articleSchema';

import { forwardRef, memo } from 'react';

import { ArticleGridCard } from '../ArticleGridCard/ArticleGridCard';
import { ArticleListCard } from '../ArticleListCard/ArticleListCard';

interface IProps {
  viewType: TViewTypes;
  data: IArticle;
  className?: string;
  children?: ReactNode;
}

type Ref = HTMLDivElement;

export const ArticleCard = memo(forwardRef<Ref, IProps>(function ArticleCard(props, ref) {
  const { data, viewType } = props;

  if (viewType === 'grid') {
    return <ArticleGridCard ref={ref} data={data} />;
  }

  return <ArticleListCard ref={ref} data={data} />;
}));
