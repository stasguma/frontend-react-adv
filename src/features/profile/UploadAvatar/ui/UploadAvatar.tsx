import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar, Button } from '@/shared/ui';

import classes from './UploadAvatar.module.scss';
import { classNames } from '@/shared/lib';

interface IProps {
  imageUrl: string;
  className?: string;
}

export const UploadAvatar = memo<IProps>(function UploadAvatar(props) {
  const { imageUrl, className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(className)}>
      <Avatar
        imageUrl={imageUrl}
        size="xl"
        alt="Avatar"
      />
      <div>
        <Button
          className={classes['upload-btn']}
          variant="filled"
          color="primary"
          full
        >
          {t('Upload')}
        </Button>
      </div>
    </div>
  );
});
