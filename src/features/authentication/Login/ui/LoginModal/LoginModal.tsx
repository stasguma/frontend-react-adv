import type { FC, SyntheticEvent } from 'react';
import type { ILoginForm } from '@/entities/Session';

import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { selectError, selectIsLoading, selectIsLoadingSuccess } from '@/entities/Session';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { Button, Input, Modal, Typography } from '@/shared/ui';
import { loginThunkAction } from '../../model/thunkActions/loginThunkAction';

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

  const submitHandler = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(e.target as HTMLFormElement)) as unknown as ILoginForm;
      // /* eslint-disable-next-line */
      void dispatch(loginThunkAction(data));
    }, [dispatch]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
    >
      <h2>{t('Log In')}</h2>
      <form className={classes['login-form']} onSubmit={submitHandler}>
        <Input
          id="username"
          name="username"
          placeholder="Enter the name"
          label="Username"
          autoFocus
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter the password"
        />
        {resError ? <Text color="danger">{`${resError.error}. ${resError.message}`}</Text> : null}
        <Button
          variant="filled"
          type="submit"
          disabled={isLoading}
        >
          {t('Log In')}
        </Button>
      </form>
    </Modal>
  );
};
