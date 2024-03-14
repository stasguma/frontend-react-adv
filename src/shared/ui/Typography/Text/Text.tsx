import type { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import classes from './Text.module.scss';

type TTextColors = 'success' | 'danger' | 'warning';
type TSize = 'sm' | 'md';

const TextSizesMap = {
  sm: 'small',
  md: 'medium',
};

interface IProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'dangerouslySetInnerHTML'> {
  children: ReactNode;
  className?: string;
  color?: TTextColors;
  size?: TSize;
  bold?: boolean;
  strong?: boolean;
  italic?: boolean;
  em?: boolean;
  crossOut?: boolean;
  underline?: boolean;
}

export const Text: FC<IProps> = (props) => {
  const {
    children,
    color,
    size = 'md',
    bold,
    strong,
    italic,
    em,
    crossOut,
    underline,
    className,
  } = props;

  const wrapper = (children: ReactNode) => {
    if (bold) {
      return <b>{children}</b>;
    }
    if (strong) {
      return <strong>{children}</strong>;
    }
    if (italic) {
      return <i>{children}</i>;
    }
    if (em) {
      return <em>{children}</em>;
    }

    return children;
  };

  return (
    <span
      className={classNames(
        classes.text,
        { [classes[`text--${TextSizesMap[size]}`]]: size !== 'md' },
        { [classes[`text--${color}`]]: !!color },
        { [classes[`text--cross-out`]]: !!crossOut },
        { [classes[`text--underline`]]: !!underline },
        className
      )}
    >
      {wrapper(children)}
    </span>
  );
};
