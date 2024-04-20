import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { TLoadingState, TObjectValues } from '@/shared/types';
import type { EntityState } from '@reduxjs/toolkit';

const BlockTypes = {
  TEXT: 'text',
  CODE: 'code',
  IMAGE: 'image',
} as const;

type TBlockTypes = TObjectValues<typeof BlockTypes>;

interface IArticleBaseBlock {
  id: string;
  type: TBlockTypes;
}

export interface IArticleTextBlock extends IArticleBaseBlock {
  type: typeof BlockTypes.TEXT;
  paragraphs: string[];
  title?: string;
}
export interface IArticleImageBlock extends IArticleBaseBlock {
  type: typeof BlockTypes.IMAGE;
  url: string;
  title?: string;
}
export interface IArticleCodeBlock extends IArticleBaseBlock {
  type: typeof BlockTypes.CODE;
  code: string;
}

export type TArticleBlock = IArticleTextBlock | IArticleImageBlock | IArticleCodeBlock;

export interface IArticle {
  id: string;
  title: string;
  imageUrl: string;
  readTime: number;
  views: number;
  categories: string[];
  createdAt: number;
  blocks: TArticleBlock[];
}

export interface ArticleSchema {
  loading: TLoadingState;
  data?: EntityState<IArticle, string>;
  error?: FetchBaseQueryError;
}
