import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Loader, Typography } from '@/shared/ui';
import { useProfileQuery } from '@/entities/Profile';
import { UploadAvatar } from '@/features/profile/UploadAvatar';
import { EditProfileForm } from '@/features/profile/EditProfileForm';

import classes from './ProfileSettings.module.scss';

interface IProps {
  className?: string;
}

export const ProfileSettings = memo<IProps>(function ProfileSettings(props) {
  const { className } = props;
  const { Title } = Typography;
  const { t } = useTranslation();

  const { data, isLoading } = useProfileQuery();

  return (
    <div className={classNames(classes['profile-settings'], className)}>
      <Title variant="3">{t('My Profile')}</Title>
      <div className={classNames(classes['profile-settings__section'])}>
        {isLoading
          ? <Loader />
          : (
            <div className="row">
              <div className="col-auto">
                <UploadAvatar imageUrl={data?.avatarUrl ?? ''} />
              </div>
              <div className="col">
                <EditProfileForm data={data} />
              </div>
            </div>
            )}
      </div>
    </div>
  );
});
