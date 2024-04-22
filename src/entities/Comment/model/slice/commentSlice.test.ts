import commentReducer, { } from './commentSlice';

describe('commentSlice', () => {
  test('should return the initial state', () => {
    const state = commentReducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      loading: 'idle',
      data: { ids: [], entities: {} },
      error: undefined,
    });
  });
});
