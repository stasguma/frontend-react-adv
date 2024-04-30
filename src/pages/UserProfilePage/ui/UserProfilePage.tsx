import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, classNames } from '@/shared/lib';
import { Loader, Typography } from '@/shared/ui';
import { UserProfileCard, profileSlice, useProfileQuery } from '@/entities/Profile';

import classes from './UserProfilePage.module.scss';

const reducers: TReducers = {
  profile: profileSlice.reducer,
};

const UserProfilePage: FC = () => {
  const { Title } = Typography;
  const { t } = useTranslation();
  const { id = 1 } = useParams();
  const { data, isLoading, isSuccess } = useProfileQuery(id as number, { skip: Boolean(id) === false });

  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(classes['user-profile'])}>
          <Title variant="3">{t('Profile')}</Title>
          {!isLoading && isSuccess ? <UserProfileCard data={data} /> : null }
        </div>
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(UserProfilePage);
