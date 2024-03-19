import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { logoutThunkAction } from '../../model/thunkActions/logoutThunkAction';

export const LogoutButton: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    void dispatch(logoutThunkAction());
  };

  return (
    <Button
      variant="filled"
      color="primary"
      onClick={logoutHandler}
    >
      {t('Log Out')}
    </Button>
  );
};
