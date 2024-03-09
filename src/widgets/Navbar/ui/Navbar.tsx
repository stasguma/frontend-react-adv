import { type FC } from 'react';

// import { useTranslation } from 'react-i18next';

import classes from './Navbar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <header className="header">
      <div className={classNames(classes.navbar, className)}>

      </div>
    </header>
  );
};
