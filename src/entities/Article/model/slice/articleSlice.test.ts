import type { ArticleSchema } from '../types/articleSchema';

import articleReducer from './articleSlice';

describe('articleSlice', () => {
  test('should return the initial state', () => {
    const initialState: DeepPartial<ArticleSchema> = {
      loading: 'idle',
      data: { ids: [], entities: {} },
      error: undefined,
      hasMore: true,
      page: 1,
      limit: 16,
      viewType: 'grid',
    };
    const state = articleReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
