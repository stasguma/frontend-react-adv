import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Button } from '@/shared/ui';
import { selectViewType, toggleViewType } from '@/entities/Article';

import classes from './ArticleListViewTypeToggler.module.scss';

import SquaresIcon from '@/shared/assets/icons/squares.svg';
import RectangleStack from '@/shared/assets/icons/rectange-stack.svg';

interface IProps {
  className?: string;
}

export const ArticleListViewTypeToggler = memo<IProps>(function ArticleListViewTypeToggler(props) {
  const { className } = props;
  const viewType = useAppSelector(selectViewType);
  const dispatch = useAppDispatch();

  const toggleViewTypeHandler = useCallback(
    () => dispatch(toggleViewType())
    , [dispatch, toggleViewType]);

  return (
    <Button className={classNames(classes['article-list-view-type-btn'], className)} onClick={toggleViewTypeHandler}>
      {viewType === 'grid' ? <SquaresIcon /> : <RectangleStack />}
    </Button>
  );
});
