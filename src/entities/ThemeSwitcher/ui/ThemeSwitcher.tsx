import { memo } from 'react';

import SunMoonIcon from '@/shared/assets/svg/sun-moon.svg';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { useTheme } from '@/app/providers/ThemeProvider';

import classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = memo(function ThemeSwitcher() {
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
});
