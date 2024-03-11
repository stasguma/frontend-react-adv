import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Navbar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, Modal } from '@/shared/ui';

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

      {/* eslint-disable-next-line */}
      <Modal isOpen={isAuthModalOpen} onClose={closeModal}>Loasdoa sdas das daosdaosk doas dasdo kasdaskodkaso daso dkasodasod kasodkasodkaoskdoa sdo akosdk asod kasodk asodk asod kasod kaso dkaso kasodk asodj ashdu ashjhdasljdhasljdhlas jdhalsjhdlasjhdqwu hdsajhdlasjhdlajshld jasdh asjdhlasjhdasljdh saljdhlasjhdlasj hlsjakhdlajskhdlasjhda jsajldhlajshdaljsdals ljasd</Modal>
    </header>
  );
};
