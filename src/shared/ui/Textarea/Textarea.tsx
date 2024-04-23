import type { TextareaHTMLAttributes, ReactElement } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Textarea.module.scss';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: () => UseFormRegisterReturn<any>; /* eslint-disable-line @typescript-eslint/no-explicit-any */
  className?: string;
  label?: string;
  errorEl?: ReactElement;
}

export const Textarea = memo<IProps>(function Textarea(props) {
  const {
    register,
    className,
    id,
    name,
    label,
    errorEl,
    ...otherProps
  } = props;

  return (
    <div className={classNames(classes.textarea, className)}>
      {label ? <label className={classes.textarea__label} htmlFor={id ?? name}>{label}</label> : null}
      <textarea
        {...otherProps}
        {...register()}
        className={classNames(classes.textarea__field)}
        id={id ?? name}
      >
      </textarea>
      {errorEl
        ? <div role="alert" className={classes.textarea__error}>{errorEl}</div>
        : null}
    </div>
  );
});
