import type { IProfile } from '@/entities/Profile';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Avatar, Typography } from '@/shared/ui';

import classes from './UserProfileCard.module.scss';

interface IProps {
  className?: string;
  data: IProfile;
}

export const UserProfileCard = memo<IProps>(function UserProfileCard(props) {
  const { className, data } = props;
  const { Text } = Typography;
  const { t } = useTranslation();

  return (
    <div className={classNames(classes['user-profile-card'], className)}>
      <div className="row">
        <div className="col-auto">
          <Avatar imageUrl={data?.avatarUrl ?? ''} size="xl" />
        </div>
        <div className="col">
          <div className="">
            <Text bold>
              {t('Username')}
              :
              {' '}
            </Text>
            <Text>{data.username}</Text>
          </div>
          <div className="">
            <Text bold>
              {t('Email')}
              :
              {' '}
            </Text>
            <Text>{data.email}</Text>
          </div>
          <div className="">
            <Text bold>
              {t('Country')}
              :
              {' '}
            </Text>
            <Text>{data.country}</Text>
          </div>
          <div className="">
            <Text bold>
              {t('City')}
              :
              {' '}
            </Text>
            <Text>{data.city}</Text>
          </div>
          <div className="">
            <Text bold>
              {t('Currency')}
              :
              {' '}
            </Text>
            <Text>{data.currency}</Text>
          </div>
        </div>
      </div>
    </div>
  );
});
