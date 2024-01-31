import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PageError.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui';
import { EButtonVariants } from '@/shared/ui/Button/Button';

interface IProps {
  className?: string;
}

export const PageError: FC<IProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const clickHandler = (): void => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes['page-error'], className)}>
      <p className={classes['page-error__text']}>{t('errorBoundaryText')}</p>
      <Button onClick={clickHandler} variant={EButtonVariants.PRIMARY}>{t('reload')}</Button>
    </div>
  );
};
