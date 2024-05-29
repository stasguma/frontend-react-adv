import type { IArticle } from '../model/types/articleSchema';

export interface ILink {
  count: number;
  current: number;
  first: string;
  last: string;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ArticleDto {
  results: IArticle[];
  _link: ILink;
}
