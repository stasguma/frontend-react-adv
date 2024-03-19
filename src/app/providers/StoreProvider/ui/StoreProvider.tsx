import type { ReactNode, FC } from 'react';
import type { StateSchema } from '../config/StateSchema';

import { Provider } from 'react-redux';

import { appStore } from '../config/store';

interface IProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<IProps> = ({ children }) => {
  return (
    <Provider store={appStore}>{children}</Provider>
  );
};
