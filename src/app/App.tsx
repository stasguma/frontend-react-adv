import type { FC } from 'react';

import { AppRouterProvider } from '@/app/providers/router';

const App: FC = () => {
  return (
    <div className="app">
      <AppRouterProvider />
    </div>
  );
};

export default App;
