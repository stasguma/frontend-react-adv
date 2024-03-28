import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';

import classes from './PageLoader.module.scss';

interface IProps {
  className?: string;
};

export const PageLoader = memo<IProps>(function PageLoader(props) {
  const { className } = props;

  return (
    <div className={classNames(classes['page-loader'], className)}>
      <Loader />
    </div>
  );
});
