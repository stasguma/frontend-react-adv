import profileReducer from './profileSlice';

describe('profileSlice', () => {
  test('should return the initial state', () => {
    const state = profileReducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      loading: 'idle',
      data: undefined,
      error: undefined,
    });
  });
});
