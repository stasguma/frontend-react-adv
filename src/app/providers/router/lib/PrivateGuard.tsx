import type { ReactNode } from 'react';

// import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/shared/model';
import { selectIsAuth } from '@/entities/Session';

interface IProps {
  children: ReactNode;
}

export const PrivateGuard = ({ children }: IProps) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    // return <Navigate to="/login" />;
  }

  return children;
};
