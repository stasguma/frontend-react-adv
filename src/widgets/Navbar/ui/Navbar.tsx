import type { FC } from 'react';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { selectIsAuth } from '@/entities/Session';
import { LoginModal } from '@/features/authentication/Login';
import { LogoutButton } from '@/features/authentication/Logout';
import { useAppSelector } from '@/app/providers/StoreProvider';

import classes from './Navbar.module.scss';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(selectIsAuth);

  const openModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <header className="header">
      <div className={classNames(classes.navbar, className)}>
        {isAuth
          ? <LogoutButton />
          : (
            <Button
              variant="filled"
              color="primary"
              onClick={openModal}
            >
              {t('Log In')}
            </Button>
            )}
      </div>

      <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
    </header>
  );
};
