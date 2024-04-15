// import type { ReadonlySignal } from '@preact/signals-react';
import type { InputHTMLAttributes, ReactElement } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Input.module.scss';

type TInputValidate = 'danger' | 'warning';
type TInputSizes = keyof typeof InputSizesMap;

const InputSizesMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  label?: string;
  validateStatus?: TInputValidate;
  size?: TInputSizes;
  errorEl?: ReactElement;
  register: () => UseFormRegisterReturn<any>; /* eslint-disable-line @typescript-eslint/no-explicit-any */
}

export const Input = memo<IProps>(function Input(props) {
  const {
    className,
    size = 'md',
    id,
    name,
    label,
    type = 'text',
    validateStatus,
    errorEl,
    register,
    ...otherProps
  } = props;

  // const [value, setValue] = useState<string>('');

  // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

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
        {...otherProps}
        {...register()}
        className={classNames(
          classes.input__field,
          classes[`input__field--${InputSizesMap[size]}`]
        )}
        id={id ?? name}
        type={type}
      />
      {errorEl
        ? <div role="alert" className={classes.input__error}>{errorEl}</div>
        : null}
    </div>
  );
});
