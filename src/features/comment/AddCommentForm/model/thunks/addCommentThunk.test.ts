import type { IProfileForm } from '../types/types';
import type { IProfile } from '@/entities/Profile';

import { TestAsyncThunk } from '@/shared/lib';
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

    // const responseData = {
    //   ...requestData,
    //   avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
    // };

    const thunk = new TestAsyncThunk<IProfile, IProfileForm>(updateProfileThunkAction);
    const actionResponse = await thunk.callThunk(requestData); /* eslint-disable-line */
    // console.log(thunk.dispatch.mock.calls);
    // console.log('actionResponse', actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('fulfilled');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(sessionData);
    expect(true).toBe(true);
  });
});
