import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { Button } from '@/shared/ui';
import { changeName } from '@/entities/User';

const HomePage: FC = () => {
  const { t } = useTranslation();
  const userName = useAppSelector(state => state.users.name);
  const dispatch = useAppDispatch();

  const changeNameHandler = () => {
    dispatch(changeName('SuperStas'));
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      <Button variant="filled" onClick={changeNameHandler}>Change user name</Button>
      <p>{userName}</p>
      <h1>{t('home')}</h1>
      <h2>{t('home')}</h2>
      <h3>{t('home')}</h3>
      <h4>{t('home')}</h4>
    </>
  );
};

export default HomePage;
