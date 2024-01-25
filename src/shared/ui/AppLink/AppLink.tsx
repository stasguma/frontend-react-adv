import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import classes from './AppLink.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

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
      className={classNames(classes.AppLink, classes[theme], className)}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
