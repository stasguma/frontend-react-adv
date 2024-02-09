import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import classes from './Navbar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className={classNames(classes.navbar, className)}>
        <nav className={classes.navigation} aria-label="desktop navigation">
          <ul className={classes['navigation-list']} role="list">
            <li className={classes.navigation__item}>
              <AppLink to="/" theme={EAppLinkTheme.SECONDARY}>
                {t('home')}
              </AppLink>
            </li>
            <li className={classes.navigation__item}>
              <AppLink to="/about" theme={EAppLinkTheme.SECONDARY}>
                {t('about')}
              </AppLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
