import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import type { AsyncThunkConfig } from 'node_modules/@reduxjs/toolkit/dist/createAsyncThunk';
import type { RootState } from '@/app/providers/store';

type TActionCreatorType<Return, Arg, Config extends AsyncThunkConfig> = AsyncThunk<Return, Arg, Config>;
// type TActionCreatorType<Return, Arg, Config extends AsyncThunkConfig> = (arg: Arg) => AsyncThunkAction<Return, Arg, Config>;
// type TActionCreatorType<Return, Arg, ThunkApiConfig = { rejectValue: FetchBaseQueryError; }>
//   = AsyncThunk<Return, Arg, Partial<ThunkApiConfig>>;
// = ReturnType<typeof createAsyncThunk<Return, Arg, ThunkApiConfig>>;

// type AppDispatch = ThunkDispatch<any, undefined, AnyAction> & Dispatch<any>

export class TestAsyncThunk<Return, Arg, ThunkApiConfig extends AsyncThunkConfig = { rejectValue: FetchBaseQueryError; }> {
  dispatch: Dispatch;
  getState: () => RootState;
  actionCreator: TActionCreatorType<Return, Arg, ThunkApiConfig>;

  constructor(
    actionCreator: TActionCreatorType<Return, Arg, ThunkApiConfig>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = vi.fn();
    this.getState = vi.fn();
  };

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    // @ts-expect-error: wrong type on dispatch
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
