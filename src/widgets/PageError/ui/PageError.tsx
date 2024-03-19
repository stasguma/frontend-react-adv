import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PageError.module.scss';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';

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
      <Button
        variant="filled"
        color="primary"
        onClick={clickHandler}
      >
        {t('reload')}
      </Button>
    </div>
  );
};
