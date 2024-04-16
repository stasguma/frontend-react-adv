import type { AppDispatch, RootState } from '@/app/providers/store';
import { createAction, createListenerMiddleware } from '@reduxjs/toolkit';

import { LocalStorage } from '@/shared/lib';
import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';

const loginAction = createAction('authentication/login/fulfilled');

export const authListenerMiddleware = createListenerMiddleware();

export const authStartAppListening = authListenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

// authListenerMiddleware.startListening.withTypes<RootState, AppDispatch>();
authStartAppListening({
  actionCreator: loginAction,
  effect: (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here

    console.log('action', action);
    console.log('listenerApi', listenerApi);

    LocalStorage.setItem(LOCAL_STORAGE_SESSION_KEY, action.payload);

    // await listenerApi.delay(6000);

    // LocalStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
    // Can cancel other running instances
    // listenerApi.cancelActiveListeners();

    // Run async logic
    // const data = await fetchData();

    // Pause until action dispatched or state changed
    // if (await listenerApi.condition()) {
    // Use the listener API methods to dispatch, get state,
    // unsubscribe the listener, start child tasks, and more
    // listenerApi.dispatch(todoAdded('Buy pet food'));

    // Spawn "child tasks" that can do more work and return results
    // const task = listenerApi.fork(async (forkApi) => {
    //   // Can pause execution
    //   await forkApi.delay(5);
    //   // Complete the child by returning a value
    //   return 42;
    // });

    // const result = await task.result;
    // Unwrap the child result in the listener
    // if (result.status === 'ok') {
    //   // Logs the `42` result value that was returned
    //   console.log('Child succeeded: ', result.value);
    // }
    // }
  },
});
