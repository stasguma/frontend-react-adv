import type { ReactNode, FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '../config/store';
import type { StateSchema } from '../config/StateSchema';

interface IProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>{children}</Provider>
  );
};
