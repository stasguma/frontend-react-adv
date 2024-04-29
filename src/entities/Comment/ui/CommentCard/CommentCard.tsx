import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { formatDate } from '@/shared/lib';

import classes from './CommentCard.module.scss';
import { Avatar, Typography } from '@/shared/ui';
import { Link } from 'react-router-dom';

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
        <Link to={`/profile/${user?.id}`}>
          <Avatar imageUrl={user!.avatarUrl} alt="User avatar" />
        </Link>
      </div>
      <div>
        <div className={classes['comment-card__author']}>
          <Title variant="4" className={classes['comment-card__username']}>
            <Link to={`/profile/${user?.id}`}>{user!.username}</Link>
          </Title>
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
