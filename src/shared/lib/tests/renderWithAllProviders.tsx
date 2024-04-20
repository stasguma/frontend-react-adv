import type { PropsWithChildren, ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';
import type { RootState } from '@/app/providers/store';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from '@/app/providers/store';

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: ReturnType<typeof createStore>;
}

export const renderWithAllProviders = (
  component: ReactElement,
  extendedRenderOptions: IExtendedRenderOptions = {}
) => {
  const {
    preloadedState,
    store = createStore({ initialState: preloadedState }),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }) };
};
