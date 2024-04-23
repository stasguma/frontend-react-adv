import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import { CommentCard } from '@/entities/Comment/ui/CommentCard/CommentCard';

import classes from './CommentList.module.scss';

interface IProps {
  className?: string;
  comments: IComment[];
}

export const CommentList = memo<IProps>(function CommentList(props) {
  const { Paragraph } = Typography;
  const { t } = useTranslation();
  const { className, comments = [] } = props;

  if (!comments.length) {
    return (
      <div className={classes['comment-list']}>
        <Paragraph className={classes['comment-list__empty']}>
          {t('There are no comments yet')}
          !
        </Paragraph>
      </div>
    );
  }

  return (
    <div className={classNames(classes['comment-list'], className)}>
      {comments.map(comment => <CommentCard key={comment.id} data={comment} />)}
    </div>
  );
});
