import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { articleSlice } from '@/entities/Article';
import { EntireArticle } from '@/widgets/EntireArticle';

const reducers: TReducers = {
  article: articleSlice.reducer,
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
