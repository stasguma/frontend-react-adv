import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Loader.module.scss';

interface IProps {
  className?: string;
};

export const Loader = memo<IProps>(function Loader(props) {
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
});
