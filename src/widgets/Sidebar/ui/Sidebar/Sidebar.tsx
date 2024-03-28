import { memo } from 'react';
import { useState } from 'react';

import { classNames } from '@/shared/lib';
import { Button, LangSwitcher } from '@/shared/ui';
import { ThemeSwitcher } from '@/entities/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemList } from '../../model/consts/SidebarItemList';

import classes from './Sidebar.module.scss';

import MenuIcon from '@/shared/assets/icons/menu.svg';

interface IProps {
  className?: string;
}

export const Sidebar = memo<IProps>(function Sidebar(props) {
  const { className } = props;

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
            {SidebarItemList.map(item => (
              <SidebarItem
                key={item.name}
                itemData={item}
              />
            ))}
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
