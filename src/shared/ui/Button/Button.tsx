import type { ButtonHTMLAttributes } from 'react';

import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Button.module.scss';

type TButtonVariants = 'base' | 'filled' | 'outlined' | 'ghost';
type TButtonColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
type TButtonSizes = keyof typeof ButtonSizesMap;

const ButtonSizesMap = {
  sm: 'small',
  lg: 'large',
} as const;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariants;
  color?: TButtonColors;
  size?: TButtonSizes;
}

export const Button = memo<IProps>(function Button(props) {
  const {
    children,
    className,
    disabled = false,
    variant = 'base',
    color = 'primary',
    size,
    type = 'button',
    ...otherProps
  } = props;
  return (
    <button
      className={
        classNames(classes.btn,
          classes[`btn-${variant}`],
          { [classes[`btn-${color}`]]: variant !== 'base' },
          { [classes[`btn--${ButtonSizesMap[size!]}`]]: !!size },
          className)
      }
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
});
