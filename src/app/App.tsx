import type { FC } from 'react';

import { useEffect } from 'react';

import { AppRouterProvider } from '@/app/providers/router';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { initSession } from '@/entities/Session';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('initSession');
    dispatch(initSession());
  }, [dispatch]);

  return (
    <div className="app">
      <AppRouterProvider />
    </div>
  );
};

export default App;
