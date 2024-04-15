import type { ImgHTMLAttributes } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Avatar.module.scss';

type TAvatarSizes = keyof typeof AvatarSizesMap;

const AvatarSizesMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
} as const;

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  imageUrl: string;
  size?: TAvatarSizes;
}

export const Avatar = memo<IProps>(function Avatar(props) {
  const {
    className,
    size = 'md',
    imageUrl,
    ...otherProps
  } = props;

  return (
    <div className={classNames(
      classes.avatar,
      classes[`avatar--${AvatarSizesMap[size]}`],
      className)}
    >
      {imageUrl
        ? (
          <img
            className={classNames(classes.avatar__img)}
            src={imageUrl}
            {...otherProps}
          />
          )
        : null}
    </div>
  );
});
