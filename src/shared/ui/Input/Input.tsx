import type { InputHTMLAttributes, FC, ChangeEvent } from 'react';
import { useState } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import classes from './Input.module.scss';

type TInputValidate = 'danger' | 'warning';
type TInputSizes = 'sm' | 'md' | 'lg';

const InputSizesMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  label?: string;
  validateStatus?: TInputValidate;
  size?: TInputSizes;
}

export const Input: FC<IProps> = (props) => {
  const {
    className,
    size = 'md',
    id,
    name,
    label,
    type = 'text',
    validateStatus,
    ...otherProps
  } = props;

  const [value, setValue] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={classNames(
        classes.input,
        classes[`input--${validateStatus}`],
        className
      )}
    >
      {label ? <label className={classes.input__label} htmlFor={id ?? name}>{label}</label> : null}
      <input
        className={classNames(
          classes.input__field,
          { [classes[`input__field--${InputSizesMap[size]}`]]: size !== 'md' }
        )}
        id={id ?? name}
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
        {...otherProps}
      />
    </div>
  );
};
