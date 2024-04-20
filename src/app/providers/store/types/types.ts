import type { ProfileSchema } from '@/entities/Profile';
import type { SessionSchema } from '@/entities/Session';
import type { ArticleSchema } from '@/entities/Article';

import type {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit';

export interface StateSchema {
  baseApi: ProfileSchema;
  session: SessionSchema;
  profile: ProfileSchema;
  article: ArticleSchema;
}

export interface ICreateStoreArgs<S = StateSchema> {
  initialState?: DeepPartial<S>;
  asyncReducers?: Partial<ReducersMapObject<S>>;
}

export interface IReducerManager<S> {
  getReducerMap: () => ReducersMapObject<S>;
  reduce: (state: S, action: Action) => ReturnType<typeof combineReducers>;
  add: (key: keyof S, reducer: Reducer) => void;
  remove: (key: keyof S) => void;
}

export interface IStoreWithReducerManager extends EnhancedStore {
  reducerManager: IReducerManager<StateSchema>;
}

export interface ICreateReducerManagerArgs<S> {
  staticReducers: Partial<ReducersMapObject<S>>;
  asyncReducers?: Partial<ReducersMapObject<S>>;
}
