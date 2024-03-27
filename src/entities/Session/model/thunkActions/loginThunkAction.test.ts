import type { AxiosResponse } from 'axios';
import type { ILoginForm, ISession } from '@/entities/Session';

import axios from 'axios';

import { loginThunkAction } from './loginThunkAction';
import { TestAsyncThunk } from '@/shared/lib';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginThunkAction for a Session entity', () => {
  test('should return the session data after a success login', async () => {
    const sessionData = {
      id: '1',
      username: 'admin',
      token: 'Bearer sadasdasdasdasd12h213g31kjh312gkh132khg1231g2khg132kjh',
      isAuthenticated: true,
    };

    const mockedResponse: Partial<AxiosResponse> = {
      data: sessionData,
      // status: 200,
      // statusText: 'OK',
      // headers: {},
      // config: {},
    };

    mockedAxios.post.mockResolvedValue(mockedResponse);
    const thunk = new TestAsyncThunk<ISession, ILoginForm>(loginThunkAction);
    const result = await thunk.callThunk({ username: 'admin', password: 'gggg' });
    // console.log(result);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(sessionData);
  });

  test('should return the error on the failed login', async () => {
    const responseData = {
      error: 'Unauthorized',
      message: 'User was not found',
    };

    const mockedResponse: Partial<AxiosResponse> = {
      data: responseData,
      status: 403,
      // statusText: 'OK',
      // headers: {},
      // config: {},
    };

    // mockedAxios.post.mockResolvedValue(mockedResponse);
    mockedAxios.post.mockRejectedValue(mockedResponse);

    const thunk = new TestAsyncThunk<ISession, ILoginForm>(loginThunkAction);
    const result = await thunk.callThunk({ username: 'admin', password: 'wrongpass' });
    console.log(result);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    // TODO: action.payload is undefined because rejectWithValue is not invoked.
    // Created an issue https://github.com/reduxjs/redux-toolkit/issues/4302
    // expect(result.payload).toEqual(responseData);

    // console.log(mockedAxios.post.mock.calls[0]);
    // console.log(mockedAxios.post.mock.results[0]);
  });
});
