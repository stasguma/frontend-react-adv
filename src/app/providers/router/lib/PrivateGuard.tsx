import type { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/shared/model';
import { selectIsAuth } from '@/entities/Session';

interface IProps {
  children: ReactNode;
}

export const PrivateGuard = ({ children }: IProps) => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate
        to="/" // FIXME: 04/16/24 replace to /login when page will ready
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
