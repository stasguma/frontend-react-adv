import type { ReactElement } from 'react';
import type { IComment } from '../../model/types/commentSchema';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/shared/ui';
import { CommentList } from '@/entities/Comment/ui/CommentList/CommentList';

import classes from './CommentSection.module.scss';

interface IProps {
  comments: IComment[];
  addCommentSlot?: ReactElement;
}

export const CommentSection = memo<IProps>(function CommentSection(props) {
  const { Title } = Typography;
  const { comments = [], addCommentSlot } = props;
  const { t } = useTranslation();

  return (
    <section className={classes['comment-section']}>
      <Title variant="3">
        {t('Comments')}
        {' '}
        (
        {comments.length}
        )
      </Title>
      {addCommentSlot ? addCommentSlot : null}
      <CommentList comments={comments} />
    </section>
  );
});
