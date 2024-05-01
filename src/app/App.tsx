import type { FC } from 'react';

import { useEffect } from 'react';

import { AppRouterProvider } from '@/app/providers/router';
import { useAppDispatch } from '@/shared/model';
import { initSession, useUptimeQuery } from '@/entities/Session';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initSession());
  }, [dispatch]);

  /** this endpoint only need cuz of backend service go down after 15 min idle on render.com */
  useUptimeQuery(null, {
    pollingInterval: 14 * 1000 * 60, // 14 minutes
  });

  return (
    <div className="app">
      <AppRouterProvider />
    </div>
  );
};

export default App;
