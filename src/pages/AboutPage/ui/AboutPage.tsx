import type { FC } from 'react';

import { memo } from 'react';

import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation();

  return <div>{t('about')}</div>;
};

export default memo(AboutPage);
