import type { IProfileForm } from '../model/types/types';
import type { IProfile } from '@/entities/Profile';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { ENV } from '@/shared/config/enviroment/env';
import { TestAsyncThunk } from '@/shared/lib';
import { renderWithAllProviders } from '@/shared/lib/tests/renderWithAllProviders';
import { updateProfileThunkAction } from '@/features/profile/EditProfileForm/model/thunks/updateProfileThunkAction';
import { EditProfileForm } from './EditProfileForm';

describe('<EditProfileForm />', () => {
  test('should display validation errors on invalid input data', async () => {
    renderWithAllProviders(<EditProfileForm />);

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });

  test('should display a validation error on empty username', async () => {
    renderWithAllProviders(<EditProfileForm />);

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');

    fireEvent.input(usernameInput, { target: { value: '' } });
    fireEvent.input(emailInput, { target: { value: 'pespatron@gmail.com' } });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
  });

  test('should display a validation error on invalid email', async () => {
    renderWithAllProviders(<EditProfileForm />);

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');

    fireEvent.input(usernameInput, { target: { value: 'Pespatron' } });
    fireEvent.input(emailInput, { target: { value: 'pespatron' } });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
  });

  test('should succeccfully update the form', async () => {
    renderWithAllProviders(<EditProfileForm />);

    const requesData: IProfileForm = {
      id: 2,
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      country: 'Ukraine',
      city: 'Kyiv',
      currency: 'UAH',
      role: 'user',
    };

    const responseData = {
      ...requesData,
      avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
    };

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const countryInput = screen.getByLabelText('Country');
    const cityInput = screen.getByLabelText('City');
    const currencyInput = screen.getByLabelText('Currency');

    fireEvent.input(usernameInput, { target: { value: requesData.username } });
    fireEvent.input(emailInput, { target: { value: requesData.email } });
    fireEvent.input(countryInput, { target: { value: requesData.country } });
    fireEvent.input(cityInput, { target: { value: requesData.city } });
    fireEvent.input(currencyInput, { target: { value: requesData.currency } });

    const result = await fetch(`${ENV.API_ENDPOINT}/profile/my`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(requesData),
    });
    const { data } = await result.json(); /* eslint-disable-line */
    // console.log('res', res);
    expect(data).toEqual(responseData);

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));

    const thunk = new TestAsyncThunk<IProfile, IProfileForm>(updateProfileThunkAction);
    const actionResponse = await thunk.callThunk(requesData); /* eslint-disable-line */
    // console.log(thunk.dispatch.mock.calls);
    // console.log('actionResponse', actionResponse);
    // expect(actionResponse.meta.requestStatus).toBe('fulfilled');
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(responseData);
  });
});
