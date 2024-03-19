import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from '@/app/providers/StoreProvider';

export const renderWithAllProviders = (component: ReactNode) => {
  const appStore = createStore();
  return render(
    <Provider store={appStore}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};
