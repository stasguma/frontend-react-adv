import { FC } from 'react';

import classes from './Loader.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface IProps {
  className?: string;
};

export const Loader: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(classes.loader, className)}>
      <div className={classNames(classes.orbe)}></div>
      <div className={classNames(classes.orbe)}></div>
      <div className={classNames(classes.orbe)}></div>
      <div className={classNames(classes.orbe)}></div>
      <div className={classNames(classes.orbe)}></div>
    </div>
  );
};
