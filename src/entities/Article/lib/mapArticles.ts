import type { ArticleDto } from '../api/types';

export function mapArticles(response: ArticleDto) {
  return {
    data: response.results,
    links: response._link,
  };
}
