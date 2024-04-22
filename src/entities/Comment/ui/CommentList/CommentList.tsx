import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { CommentCard } from '@/entities/Comment/ui/CommentCard/CommentCard';

import classes from './CommentList.module.scss';
import { Typography } from '@/shared/ui';

interface IProps {
  className?: string;
  data: IComment[];
}

export const CommentList = memo<IProps>(function CommentList(props) {
  const { Paragraph } = Typography;
  const { className, data = [] } = props;

  if (!data.length) {
    return (
      <div className={classes['comment-list']}>
        <Paragraph>There are no comments yet!</Paragraph>
      </div>
    );
  }

  return (
    <div className={classNames(classes['comment-list'], className)}>
      {data.map(comment => <CommentCard data={comment} />)}
    </div>
  );
});
