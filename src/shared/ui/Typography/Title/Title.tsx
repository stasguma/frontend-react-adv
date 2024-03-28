import type { HTMLAttributes, JSX, ReactNode } from 'react';

import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Title.module.scss';

type TTitleVariants = '1' | '2' | '3' | '4';
type THeadings = 'h1' | 'h2' | 'h3' | 'h4';

interface IProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'dangerouslySetInnerHTML'> {
  children: ReactNode;
  className?: string;
  variant?: TTitleVariants;
  as?: THeadings;
}

export const Title = memo<IProps>(function Title(props) {
  const {
    children,
    variant = '1',
    as,
    className,
  } = props;

  const Wrapper = ({ ...rest }) => {
    const Tag: keyof JSX.IntrinsicElements = `h${variant}`;
    return <Tag {...rest}>{children}</Tag>;
  };

  return (
    <Wrapper
      className={classNames(
        { [classes[as!]]: !!as },
        className
      )}
    >
      {children}
    </Wrapper>
  );
});
