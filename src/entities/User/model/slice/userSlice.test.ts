import userReducer, { } from './userSlice';

describe('userSlice', () => {
  test('should return the initial state', () => {
    const state = userReducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      loading: 'idle',
      data: { ids: [], entities: {} },
      error: undefined,
    });
  });
});
