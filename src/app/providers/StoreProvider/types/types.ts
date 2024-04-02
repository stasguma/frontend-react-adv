import type {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit';
import type { ProfileSchema } from '@/entities/Profile';
import type { SessionSchema } from '@/entities/Session';

export interface StateSchema {
  baseApi: ProfileSchema;
  session: SessionSchema;
  profile: ProfileSchema;
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
