import { type FC } from 'react';

import classes from './PageLoader.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui';

interface IProps {
  className?: string;
};

export const PageLoader: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(classes['page-loader'], className)}>
      <Loader />
    </div>
  );
};
