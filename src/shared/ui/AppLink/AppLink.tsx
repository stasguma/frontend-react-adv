import type { FC } from 'react';
import type { LinkProps } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import classes from './AppLink.module.scss';

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IProps extends LinkProps {
  className?: string;
  theme?: EAppLinkTheme;
}

export const AppLink: FC<IProps> = (props) => {
  const {
    children,
    className,
    to,
    theme = EAppLinkTheme.PRIMARY,
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
};
