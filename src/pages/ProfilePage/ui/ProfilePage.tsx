import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';

import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { profileSlice } from '@/entities/Profile';
import { ProfileSettings } from '@/widgets/ProfileSettings';

const reducers: TReducers = {
  profile: profileSlice.reducer,
};

const ProfilePage: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        <ProfileSettings />
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ProfilePage);
