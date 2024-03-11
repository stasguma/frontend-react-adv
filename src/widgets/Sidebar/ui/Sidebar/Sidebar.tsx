import { type FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { RoutePath } from '@/shared/config/router/routerConfig';
import { Button, LangSwitcher } from '@/shared/ui';
import { ThemeSwitcher } from '@/entities/ThemeSwitcher';

import classes from './Sidebar.module.scss';

import HomeIcon from '@/shared/assets/icons/home.svg';
import CofeeIcon from '@/shared/assets/icons/coffee.svg';
import MenuIcon from '@/shared/assets/icons/menu.svg';

interface IProps {
  className?: string;
}

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, className, {
        'is-collapsed': isCollapsed,
      })}
    >
      <div className={classes.sidebar__header}>
        <Button
          data-testid="sidebar-toggle"
          className={classes['sidebar__toggle-btn']}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </Button>
      </div>
      <div className={classes.sidebar__content}>
        <nav
          className={classes.navigation}
          role="navigation"
          aria-label="sidebar navigation"
        >
          <ul className={classes['navigation-list']} role="list">
            <li className={classes.navigation__item} role="listitem">
              <NavLink
                className={({ isActive }) =>
                  classNames(classes['navigation-link'], { 'is-active': isActive })}
                to={RoutePath.home}
                role="link"
              >
                <HomeIcon
                  className={classNames(classes['navigation-link__icon'])}
                />
                <span className={classes['navigation-link__text']}>{t('home')}</span>
              </NavLink>
            </li>
            <li className={classes.navigation__item} role="listitem">
              <NavLink
                className={({ isActive }) =>
                  classNames(classes['navigation-link'], { 'is-active': isActive })}
                to={RoutePath.about}
              >
                <CofeeIcon
                  className={classNames(classes['navigation-link__icon'])}
                />
                <span className={classes['navigation-link__text']}>{t('about')}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes.sidebar__footer}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.sidebar__lang} />
      </div>
    </div>
  );
};
