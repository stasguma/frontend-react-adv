import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';

const reducers: TReducers = {
  // articles: profileSlice.reducer,
};

const ArticlesPage: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        ArticlesPage
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ArticlesPage);
