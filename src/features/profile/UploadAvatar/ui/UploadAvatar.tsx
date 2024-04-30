import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Avatar, Button } from '@/shared/ui';

import classes from './UploadAvatar.module.scss';

interface IProps {
  imageUrl: string;
  className?: string;
}

export const UploadAvatar = memo<IProps>(function UploadAvatar(props) {
  const { imageUrl, className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(classes['upload-avatar'], className)}>
      <Avatar
        imageUrl={imageUrl}
        size="xl"
        alt="Avatar"
      />
      <Button
        className={classes['upload-avatar__btn']}
        variant="filled"
        color="primary"
        full
      >
        {t('Upload')}
      </Button>
    </div>
  );
});
