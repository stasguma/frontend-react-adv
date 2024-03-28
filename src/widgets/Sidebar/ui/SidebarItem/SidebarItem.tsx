import type { ISidebarItem } from '../../model/types/types';

import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import classes from './SidebarItem.module.scss';

interface IProps {
  itemData: ISidebarItem;
}

export const SidebarItem = memo<IProps>(function SidebarItem(props) {
  const {
    itemData: { icon: Icon, path, name },
  } = props;
  const { t } = useTranslation();

  return (
    <li
      className={classes.navigation__item}
      role="listitem"
    >
      <NavLink
        className={({ isActive }) =>
          classNames(classes['navigation-link'], { 'is-active': isActive })}
        to={path}
        role="link"
      >
        <Icon
          className={classNames(classes['navigation-link__icon'])}
        />
        <span className={classes['navigation-link__text']}>{t(name)}</span>
      </NavLink>
    </li>
  );
});
