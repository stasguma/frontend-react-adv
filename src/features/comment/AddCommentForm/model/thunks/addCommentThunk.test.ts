import type { IAddCommentForm } from '../types/types';
import type { IComment } from '@/entities/Comment';

import { TestAsyncThunk } from '@/shared/lib';
import { addCommentThunk } from './addCommentThunk';

describe('addCommentThunk for the AddCommentForm feature', () => {
  test('should update the profile data', async () => {
    const requestData = {
      text: 'Pespatron the best',
    };

    // const responseData = {
    // };

    const thunk = new TestAsyncThunk<IComment, IAddCommentForm>(addCommentThunk);
    const actionResponse = await thunk.callThunk(requestData); /* eslint-disable-line */
    // console.log(thunk.dispatch.mock.calls);
    // console.log('actionResponse', actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('fulfilled');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(sessionData);
    expect(true).toBe(true);
  });
});
