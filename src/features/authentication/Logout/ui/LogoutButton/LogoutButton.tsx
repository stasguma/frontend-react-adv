import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';
import { useAppDispatch } from '@/shared/model';
import { logoutThunkAction } from '../../model/thunks/logoutThunkAction';

export const LogoutButton: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    // @ts-expect-error: types for dispatch is incorrect, need to fix ts errors in a store.ts
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
