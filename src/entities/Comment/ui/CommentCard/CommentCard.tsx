import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { classNames } from '@/shared/lib';

import classes from './CommentCard.module.scss';
import { Avatar, Typography } from '@/shared/ui';

interface IProps {
  className?: string;
  data: IComment;
}

export const CommentCard = memo<IProps>(function CommentCard(props) {
  const { Text, Title } = Typography;
  const { className, data } = props;
  const { text, user } = data;

  return (
    <div className={classNames(classes['comment-card'], className)}>
      <div>
        <Avatar imageUrl={user?.avatarUrl} alt="User avatar" />
      </div>
      <div>
        <Title variant="4">{user?.username}</Title>
        <Text>{text}</Text>
      </div>
    </div>
  );
});
