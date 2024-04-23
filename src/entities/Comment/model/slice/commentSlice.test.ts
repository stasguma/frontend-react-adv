import type { CommentSchema } from '../../model/types/commentSchema';
import commentReducer, { } from './commentSlice';

describe('commentSlice', () => {
  test('should return the initial state', () => {
    const initialState: DeepPartial<CommentSchema> = {
      loading: 'idle',
      data: { ids: [], entities: {} },
      error: undefined,
    };
    const state = commentReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
