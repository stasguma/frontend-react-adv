import type { CSSProperties } from 'react';

import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib';

import classes from './Skeleton.module.scss';

interface IProps {
  className?: string;
  width: string | number;
  height: string | number;
  rows?: number;
  circle?: boolean;
  style?: CSSProperties;
}

export const Skeleton = memo<IProps>(function Skeleton(props) {
  const {
    className,
    width,
    height,
    rows = 0,
    circle = false,
    style,
  } = props;

  const populatedArray = Array.from(Array(rows).keys());

  const makeLastRowPartial = (id: number) => {
    let symbol = '';
    let calculatedValue: string | number = width;

    if (rows !== id) {
      return width;
    }

    if (typeof width === 'string') {
      symbol = width.match(/\D/g)!.join('');

      if (symbol) {
        calculatedValue = `${Number.parseInt(width) * 0.7}${symbol}`;
      }
    }

    if (typeof width === 'number') {
      calculatedValue = width * 0.7;
    }

    return calculatedValue;
  };

  const createSkeleton = useCallback((id = 1) => (
    <span
      data-testid="skeleton"
      key={id}
      className={classNames(
        classes.skeleton,
        {
          [classes['skeleton--circle']]: circle,
          [classes['skeleton--row']]: Boolean(rows),
        },
        className
      )}
      style={{
        width: makeLastRowPartial(id),
        height,
        ...style,
      }}
    />
  ), []);

  return rows > 0 ? populatedArray.map(n => createSkeleton(n + 1)) : createSkeleton();
});
