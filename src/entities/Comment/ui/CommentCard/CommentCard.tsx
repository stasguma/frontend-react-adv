import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { formatDate } from '@/shared/lib';

import classes from './CommentCard.module.scss';
import { Avatar, Typography } from '@/shared/ui';

interface IProps {
  data: IComment;
}

export const CommentCard = memo<IProps>(function CommentCard(props) {
  const { Text, Title } = Typography;
  const { data } = props;
  const { text, user, createdAt } = data;

  return (
    <div className={classes['comment-card']}>
      <div>
        <Avatar imageUrl={user!.avatarUrl} alt="User avatar" />
      </div>
      <div>
        <div className={classes['comment-card__author']}>
          <Title variant="4">{user!.username}</Title>
          <Text className={classes['comment-card__date']}>
            ●
            {' '}
            {formatDate(createdAt)}
          </Text>
        </div>
        <Text>{text}</Text>
      </div>
    </div>
  );
});
