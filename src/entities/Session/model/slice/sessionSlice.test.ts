import type { SessionSchema } from '../types/sessionSchema';

import sessionReducer, { initSession } from './sessionSlice';
import { LocalStorage } from '@/shared/lib';
import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';

describe('sessionSlice', () => {
  test('should return the initial state', () => {
    const state = sessionReducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      loading: 'idle',
      id: undefined,
      username: undefined,
      token: undefined,
      isAuthenticated: false,
      error: undefined,
    });
  });

  test('should return the session data from a local storage', () => {
    const prevState: DeepPartial<SessionSchema> = {};

    const sessionData = {
      id: '1',
      username: 'Tomas',
      token: 'Bearer asdasdasda',
      isAuthenticated: true,
    };

    LocalStorage.setItem(LOCAL_STORAGE_SESSION_KEY, sessionData);

    const state = sessionReducer(prevState as SessionSchema, initSession());

    expect(state).toEqual(sessionData);
  });
});
