type TBooleanValueObject = Record<string, boolean>;

const hasOwn = Object.hasOwn;

export function classNames(...args: Array<string | TBooleanValueObject | undefined>): string {
  let classes = '';

  for (const arg of args) {
    // console.log(arg);
    // console.log(Object.prototype.toString.call(arg));
    classes = appendClass(classes, parseValue(arg));
  }

  return classes;
}

function parseValue(val: string | TBooleanValueObject | undefined): string {
  if (typeof val === 'string') {
    return val;
  }

  let classes = '';

  if (Object.prototype.toString.call(val) === '[object Object]') {
    for (const key in val) {
      const value = val[key];
      if (hasOwn(val, key) && typeof value === 'boolean' && Boolean(value)) {
        classes = appendClass(classes, key);
      }
    }
  }

  return classes;
}

function appendClass(classes: string, newClass: string): string {
  if (newClass === '') {
    return classes;
  }

  // for the first item when value is ''
  if (classes === '') {
    return newClass;
  }

  return `${classes} ${newClass}`;
}
