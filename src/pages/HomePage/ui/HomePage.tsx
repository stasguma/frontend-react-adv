import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('home')}</h1>
      <h2>{t('home')}</h2>
      <h3>{t('home')}</h3>
      <h4>{t('home')}</h4>
    </>
  );
};

export default HomePage;
