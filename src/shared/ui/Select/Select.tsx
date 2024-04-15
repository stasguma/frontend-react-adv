import type { SelectHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { memo } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Select.module.scss';

type TSelectSizes = keyof typeof SelectSizesMap;

const SelectSizesMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

export interface ISelectOption {
  label: string;
  value: string | number;
}

interface IProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  register: () => UseFormRegisterReturn<any>; /* eslint-disable-line @typescript-eslint/no-explicit-any */
  options: ISelectOption[];
  className?: string;
  size?: TSelectSizes;
  label?: string;
  // defaultValue?: string;
}

export const Select = memo<IProps>(function Select(props) {
  const {
    register,
    options,
    className,
    disabled = false,
    size = 'md',
    label,
    name,
    id,
    // defaultValue,
    ...otherProps
  } = props;

  // console.log('register', {...register()})

  // const isSelectedOption = (value: string | number): boolean => {
  //   if (defaultValue) {
  //     const re = new RegExp(defaultValue, 'gi');
  //     return re.test(String(value));
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div className={classNames(
      classes.select,
      // classes[`select--${validateStatus}`],
      className
    )}
    >
      {label ? <label className={classes.select__label} htmlFor={id ?? name}>{label}</label> : null}
      <select
        {...otherProps}
        {...register()}
        className={
          classNames(classes.select__field,
            classes[`select__field--${SelectSizesMap[size]}`],
            className)
          }
        id={id ?? name}
        disabled={disabled}
      >
        {options.map(({ label, value }) => (
          <option
            key={label}
            value={value}
            // selected={isSelectedOption(value)}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
});
