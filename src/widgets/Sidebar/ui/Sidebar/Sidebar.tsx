import { memo, useMemo } from 'react';
import { useState } from 'react';

import { classNames } from '@/shared/lib';
import { useAppSelector } from '@/shared/model';
import { Button, LangSwitcher } from '@/shared/ui';
import { ThemeSwitcher } from '@/entities/ThemeSwitcher';
import { selectIsAuth } from '@/entities/Session';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemList } from '../../model/consts/SidebarItemList';

import classes from './Sidebar.module.scss';

import MenuIcon from '@/shared/assets/icons/menu.svg';

interface IProps {
  className?: string;
}

export const Sidebar = memo<IProps>(function Sidebar(props) {
  const { className } = props;

  const isAuth = useAppSelector(selectIsAuth);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const filteredItems = useMemo(() => {
    let items = [...SidebarItemList];

    if (!isAuth) {
      items = items.filter(item => !item.private);
    }

    return items.map(item => (
      <SidebarItem
        key={item.name}
        itemData={item}
      />
    ));
  }, [isAuth]);

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
            {filteredItems}
          </ul>
        </nav>
      </div>
      <div className={classes.sidebar__footer}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.sidebar__lang} />
      </div>
    </div>
  );
});
