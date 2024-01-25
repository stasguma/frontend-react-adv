import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './LangSwitcher.module.scss';

import { Button } from '@/shared/ui';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface IProps {
  className?: string;
}

export const LangSwitcher: FC<IProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLang = (): void => {
    /* eslint-disable-next-line */
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      className={classNames(classes['btn-lang'], className)}
      onClick={toggleLang}
    >
      {t('language')}
    </Button>
  );
};
