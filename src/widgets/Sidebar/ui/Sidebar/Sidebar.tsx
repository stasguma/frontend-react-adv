import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Sidebar.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, LangSwitcher } from '@/shared/ui';
import { ThemeSwitcher } from '@/entities/ThemeSwitcher';

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
      className={classNames(classes.sidebar, className, {
        [classes['is-collapsed']]: isCollapsed,
      })}
    >
      <Button onClick={toggleSidebar}>X</Button>
      <div className={classes.sidebar__content}>{t('sidebar')}</div>
      <div className={classes.sidebar__footer}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.sidebar__lang} />
      </div>
    </div>
  );
};
