import type { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Paragraph.module.scss';

type TSize = 'sm' | 'md';

const ParagraphSizesMap = {
  sm: 'small',
  md: 'medium',
};

interface IProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'dangerouslySetInnerHTML'> {
  children: ReactNode;
  className?: string;
  size?: TSize;
}

export const Paragraph: FC<IProps> = (props) => {
  const { children, size = 'md', className } = props;

  return (
    <p
      className={classNames(
        classes.paragraph,
        { [classes[`paragraph--${ParagraphSizesMap[size]}`]]: size !== 'md' },
        className
      )}
    >
      {children}
    </p>
  );
};
