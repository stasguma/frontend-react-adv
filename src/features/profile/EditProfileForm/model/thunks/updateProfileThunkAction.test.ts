import type { IProfileForm } from '../types/types';

import { TestAsyncThunk } from '@/shared/lib';
import { ENV } from '@/shared/config/enviroment/env';
import { updateProfileThunkAction } from './updateProfileThunkAction';

describe('updateProfileThunkAction for the EditProfileForm feature', () => {
  test('should update the profile data', async () => {
    const requestData = {
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      country: 'Ukraine',
      city: 'Kyiv',
      currency: 'UAH',
    };

    const responseData = {
      ...requestData,
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
    };

    const result = await fetch(`${ENV.API_ENDPOINT}/profile`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(requestData),
    });
    const { data } = await result.json(); /* eslint-disable-line */
    // console.log(data);
    expect(data).toEqual(responseData);

    const thunk = new TestAsyncThunk<unknown, IProfileForm>(updateProfileThunkAction);
    const actionResponse = await thunk.callThunk(requestData); /* eslint-disable-line */
    // console.log(thunk.dispatch.mock.calls);
    // console.log('actionResponse', actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('fulfilled');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(sessionData);
  });
});
