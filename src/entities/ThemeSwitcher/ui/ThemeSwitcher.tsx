import { type FC } from 'react';

import classes from './ThemeSwitcher.module.scss';

import SunMoonIcon from '@/shared/assets/svg/sun-moon.svg';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui';
import { classNames } from '@/shared/lib';

interface IProps {
  className?: string;
}

export const ThemeSwitcher: FC<IProps> = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      id="theme-toggle"
      className={classNames(classes['theme-toggle'])}
      title="Toggles light & dark"
      aria-label="auto"
      onClick={toggleTheme}
    >
      <SunMoonIcon />
    </Button>
  );
};
