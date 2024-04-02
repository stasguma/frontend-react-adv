import type { AppDispatch, RootState } from '@/app/providers/StoreProvider';
import type { IErrorResponse } from '@/shared/types';
import type { AsyncThunk, AsyncThunkAction, Dispatch, GetDispatch, ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit';

// type TActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue; }>;
type TActionCreatorType<Return, Arg, Config> = (arg: Arg) => AsyncThunkAction<Return, Arg, Partial<Config>>;
// type TActionCreatorType<Return, Arg, ThunkApiConfig = { rejectValue: IErrorResponse; }>
//   = AsyncThunk<Return, Arg, Partial<ThunkApiConfig>>;
// = ReturnType<typeof createAsyncThunk<Return, Arg, ThunkApiConfig>>;

// type AppDispatch = ThunkDispatch<any, undefined, AnyAction> & Dispatch<any>

export class TestAsyncThunk<Return, Arg, ThunkApiConfig = { rejectValue: IErrorResponse; }> {
  dispatch: () => typeof vi.fn;
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
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
