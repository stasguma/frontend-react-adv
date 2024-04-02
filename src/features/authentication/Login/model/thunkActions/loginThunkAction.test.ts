import type { ILoginForm } from '@/entities/Session';

import { loginThunkAction } from './loginThunkAction';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ENV } from '@/shared/config/enviroment/env';

describe('loginThunkAction for a Login feature', () => {
  test('should return the session data after a success login', async () => {
    const responseData = {
      id: '1',
      username: 'admin',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBHb29kIEZvciBZb3UiLCJpYXQiOjE1MTYyMzkwMjJ9.PuT8C27aM6eEWFws3c4Negisv_wWtmlT4Eg9Gn-IpnY',
      isAuthenticated: true,
    };

    const credentials = {
      username: 'admin',
      password: 'gggg',
    };

    const result = await fetch(`${ENV.API_ENDPOINT}/login`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const { data } = await result.json();
    // console.log(data);
    expect(data).toEqual(responseData);

    const thunk = new TestAsyncThunk<unknown, ILoginForm>(loginThunkAction);
    const actionResponse = await thunk.callThunk(credentials);
    // console.log(thunk.dispatch.mock.calls);
    // console.log('actionResponse', actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('fulfilled');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(sessionData);
  });

  test('should return the error on the failed login', async () => {
    const responseData = {
      error: 'Unauthorized',
      message: 'User was not found',
    };

    const credentials = {
      username: 'admin',
      password: 'wrongpass',
    };

    const result = await fetch(`${ENV.API_ENDPOINT}/login`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const { error } = await result.json();

    expect(error).toEqual(responseData);

    const thunk = new TestAsyncThunk<unknown, ILoginForm>(loginThunkAction);
    const actionResponse = await thunk.callThunk(credentials);
    // console.log(actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('rejected');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // TODO: action.payload is undefined because rejectWithValue is not invoked.
    // Created an issue https://github.com/reduxjs/redux-toolkit/issues/4302
    // expect(result.payload).toEqual(responseData);
  });
});
