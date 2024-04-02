import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';

import { DynamicModuleLoader } from '@/shared/lib';
import { profileSlice } from '@/entities/Profile';

// import { Typography } from '@/shared/ui';

const reducers: TReducers = {
  profile: profileSlice.reducer,
};

const ProfilePage: FC = () => {
  // const { Title } = Typography;

  return (
    <Suspense>
      <DynamicModuleLoader reducers={reducers}>
        <div>Profile Page</div>
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ProfilePage);
