import type { LinkProps } from 'react-router-dom';
import type { TObjectValues } from '@/shared/types';

import { memo } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import classes from './AppLink.module.scss';

const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

interface IProps extends LinkProps {
  className?: string;
  theme?: TObjectValues<typeof AppLinkTheme>;
}

export const AppLink = memo<IProps>(function AppLink(props) {
  const {
    children,
    className,
    to,
    theme = 'primary',
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes['app-link'], classes[theme], className)}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
