import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { type ILoginForm, LoginFormSchema } from '../../model/types/types';

import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';

import { selectError, selectIsLoading, selectIsLoadingSuccess } from '@/entities/Session';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Button, Input, Modal, Typography } from '@/shared/ui';
import { loginThunkAction } from '../../model/thunks/loginThunkAction';

import classes from './LoginModal.module.scss';

interface IProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<IProps> = (props) => {
  const { isOpen, onClose } = props;
  const { Text } = Typography;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingSuccess = useAppSelector(selectIsLoadingSuccess);
  const resError = useAppSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ILoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: valibotResolver(LoginFormSchema),
  });

  const closeModal = useCallback(() => {
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });

    document.dispatchEvent(event);
  }, []);

  useEffect(() => {
    if (isLoadingSuccess) {
      closeModal();
    }
  }, [isLoadingSuccess, closeModal]);

  // const submitHandler = useCallback(
  //   (e: SyntheticEvent) => {
  //     e.preventDefault();

  //     const data = Object.fromEntries(new FormData(e.target as HTMLFormElement)) as unknown as ILoginForm;
  //     void dispatch(loginThunkAction(data));
  //   }, [dispatch]
  // );
  const submitHandler: SubmitHandler<ILoginForm> = useCallback((data) => {
    dispatch(loginThunkAction(data));
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
    >
      <h2>{t('Log In')}</h2>
      <form className={classes['login-form']} onSubmit={handleSubmit(submitHandler)}>
        <Input
          register={() => register('username')}
          name="username"
          id="username"
          placeholder={t('Enter the name')}
          label={t('Username')}
          autoFocus
          errorEl={errors.username ? <Text color="danger">{errors.username?.message}</Text> : undefined}
        />
        <Input
          register={() => register('password')}
          name="password"
          id="password"
          type="password"
          label={t('Password')}
          placeholder={t('Enter the password')}
          errorEl={errors.password ? <Text color="danger">{errors.password?.message}</Text> : undefined}
        />
        {resError ? <Text color="danger">{`${resError?.data?.error}. ${resError?.data?.message}`}</Text> : null}

        <Button
          variant="filled"
          type="submit"
          disabled={!isDirty || isLoading}
        >
          {t('Log In')}
        </Button>
      </form>
    </Modal>
  );
};
