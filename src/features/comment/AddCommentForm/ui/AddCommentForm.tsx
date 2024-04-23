import type { SubmitHandler } from 'react-hook-form';
import { type IAddCommentForm, AddCommentFormSchema } from '../model/types/types';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';

import { classNames } from '@/shared/lib';
import { useAppDispatch } from '@/shared/model';
import { Button, Textarea, Typography } from '@/shared/ui';

import classes from './AddCommentForm.module.scss';

interface IProps {
  onAddComment: (data: IAddCommentForm) => void;
}

export const AddCommentForm = memo<IProps>(function AddCommentForm(props) {
  const { onAddComment } = props;
  const { Text } = Typography;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<IAddCommentForm>({
    defaultValues: {
      text: '',
    },

    resolver: valibotResolver(AddCommentFormSchema),
  });

  const submitHandler: SubmitHandler<IAddCommentForm> = useCallback((data) => {
    onAddComment(data);
    reset();
  }, [dispatch]);

  return (
    <form className={classNames(classes.form)} onSubmit={handleSubmit(submitHandler)}>
      <Textarea
        register={() => register('text')}
        id="text"
        placeholder={t('Leave your comment here')}
        errorEl={errors.text ? <Text color="danger">{errors.text?.message}</Text> : undefined}
      />
      <div className={classes['bottom-actions']}>
        <Button
          variant="filled"
          size="lg"
          disabled={!isDirty || isSubmitting}
          type="submit"
        >
          {t('Submit')}
        </Button>
      </div>
    </form>
  );
});
