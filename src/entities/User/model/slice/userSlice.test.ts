import type { UserSchema } from '../types/userSchema';

import userReducer, { } from './userSlice';

describe('userSlice', () => {
  test('should return the initial state', () => {
    const initialState: DeepPartial<UserSchema> = {
      loading: 'idle',
      data: { ids: [], entities: {} },
      error: undefined,
    };
    const state = userReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
