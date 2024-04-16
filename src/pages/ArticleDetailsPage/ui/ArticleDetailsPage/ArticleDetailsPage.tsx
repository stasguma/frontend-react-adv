import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';

const reducers: TReducers = {
  // articleDetails: profileSlice.reducer,
};

const ArticleDetailsPage: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        ArticleDetailsPage
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ArticleDetailsPage);
