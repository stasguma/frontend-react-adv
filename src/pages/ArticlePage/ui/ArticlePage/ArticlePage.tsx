import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { articleSlice } from '@/entities/Article';
import { commentSlice } from '@/entities/Comment';
import { EntireArticle } from '@/widgets/EntireArticle';

const reducers: TReducers = {
  [articleSlice.name]: articleSlice.reducer,
  [commentSlice.name]: commentSlice.reducer,
};

const ArticlePage: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        <EntireArticle />
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ArticlePage);
