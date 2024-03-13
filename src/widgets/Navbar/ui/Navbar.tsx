import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Navbar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, Modal } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <header className="header">
      <div className={classNames(classes.navbar, className)}>
        <Button
          variant="filled"
          color="primary"
          onClick={openModal}
        >
          {t('Log In')}
        </Button>
      </div>

      <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
    </header>
  );
};
