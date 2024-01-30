import { type ButtonHTMLAttributes, type FC } from 'react';

import classes from './Button.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export enum EButtonVariants {
  BASE = 'base',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: EButtonVariants;
}

export const Button: FC<IProps> = (props) => {
  const {
    children,
    className,
    disabled = false,
    variant = EButtonVariants.BASE,
    type = 'button',
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(classes.btn, {
        [classes['btn-primary']]: variant === EButtonVariants.PRIMARY,
        [classes['btn-secondary']]: variant === EButtonVariants.SECONDARY,
      }, className)}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
