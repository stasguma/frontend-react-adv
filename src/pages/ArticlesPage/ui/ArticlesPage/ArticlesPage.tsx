import type { FC } from 'react';
import type { TReducers } from '@/shared/lib';

import { Suspense, memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { articleSlice } from '@/entities/Article';
import { ArticleList } from '@/widgets/ArticleList';

const reducers: TReducers = {
  article: articleSlice.reducer,
};

const ArticlesPage: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers}>
        <ArticleList />
      </DynamicModuleLoader>
    </Suspense>
  );
};

export default memo(ArticlesPage);
