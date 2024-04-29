import type { SubmitHandler } from 'react-hook-form';
import type { IProfile } from '@/entities/Profile';
import { type IProfileForm, ProfileFormSchema } from '../model/types/types';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';

import { classNames } from '@/shared/lib';
import { useAppDispatch } from '@/shared/model';
import { Button, Input, Select, Typography } from '@/shared/ui';
import { updateProfileThunkAction } from '../model/thunks/updateProfileThunkAction';
import { cityOptions, countryOprions, currencyOptions } from '../model/consts/consts';

import classes from './EditProfileForm.module.scss';

interface IProps {
  className?: string;
  data?: IProfile;
}

export const EditProfileForm = memo<IProps>(function EditProfileForm(props) {
  const { className, data } = props;
  const { Text } = Typography;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Partial<IProfileForm>>({
    values: {
      ...data,
    },
    resolver: valibotResolver(ProfileFormSchema),
  });

  const submitHandler: SubmitHandler<Partial<IProfileForm>> = useCallback((data) => {
    // @ts-expect-error: types for dispatch is incorrect, need to fix ts errors in a store.ts
    dispatch(updateProfileThunkAction(data));
  }, [dispatch]);

  return (
    <form className={classNames(classes.form, className)} onSubmit={handleSubmit(submitHandler)}>
      <Input
        register={() => register('username')}
        id="username"
        label={t('Username')}
        placeholder={t('Username')}
        size="lg"
        errorEl={errors.username ? <Text color="danger">{errors.username?.message}</Text> : undefined}
      />
      <Input
        register={() => register('email')}
        id="email"
        type="email"
        label={t('Email')}
        placeholder={t('Email')}
        size="lg"
        errorEl={errors.email ? <Text color="danger">{errors.email?.message}</Text> : undefined}
      />
      <div className="row">
        <div className="col-4">
          <Select
            register={() => register('country')}
            name="country"
            id="country"
            options={countryOprions}
            label={t('Country')}
            size="lg"
          />
        </div>
        <div className="col-4">
          <Select
            register={() => register('city')}
            id="city"
            options={cityOptions}
            label={t('City')}
            size="lg"
          />
        </div>
        <div className="col-4">
          <Select
            register={() => register('currency')}
            id="currency"
            options={currencyOptions}
            label={t('Currency')}
            size="lg"
          />
        </div>
      </div>
      <div className={classes['bottom-actions']}>
        <Button
          variant="outlined"
          color="success"
          size="lg"
          disabled={!isDirty || isSubmitting}
          type="submit"
        >
          {t('Update')}
        </Button>
      </div>
    </form>
  );
});
