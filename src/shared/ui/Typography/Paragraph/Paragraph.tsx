import { type HTMLAttributes, type ReactNode } from 'react';

import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Paragraph.module.scss';

type TSize = keyof typeof ParagraphSizesMap;

const ParagraphSizesMap = {
  sm: 'small',
  md: 'medium',
};

interface IProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'dangerouslySetInnerHTML'> {
  children: ReactNode;
  className?: string;
  size?: TSize;
}

export const Paragraph = memo<IProps>(function Paragraph(props) {
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
});
