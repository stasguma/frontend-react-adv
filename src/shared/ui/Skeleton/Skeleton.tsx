import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib';

import classes from './Skeleton.module.scss';

interface IProps {
  className?: string;
  width: string | number;
  height: string | number;
  rows?: number;
  circle?: boolean;
}

export const Skeleton = memo<IProps>(function Skeleton(props) {
  const {
    className,
    width,
    height,
    rows = 0,
    circle = false,
  } = props;

  const populatedArray = Array.from(Array(rows).keys());

  const createSkeleton = useCallback((key = 1) => (
    <span
      data-testid="skeleton"
      key={key}
      className={classNames(
        classes.skeleton,
        {
          [classes['skeleton--circle']]: circle,
          [classes['skeleton--row']]: Boolean(rows),
        },
        className
      )}
      style={{
        width: rows === key ? Number(width) * 0.7 : width,
        height,
      }}
    />
  ), []);

  return rows > 0 ? populatedArray.map(n => createSkeleton(n + 1)) : createSkeleton();
});
