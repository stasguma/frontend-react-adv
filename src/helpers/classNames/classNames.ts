interface IAnyObject {
  [key: string]: boolean;
}

const hasOwn = Object.hasOwn;

export function classNames(...args: Array<string | IAnyObject>): string {
  let classes: string = "";

  for (const arg of args) {
    console.log(arg);
    console.log(Object.prototype.toString.call(arg));
    classes = appendClass(classes, parseValue(arg));
  }

  return classes;
}

function parseValue(val: string | IAnyObject) {
  if (typeof val === "string") {
    return val;
  }

  let classes: string = "";

  if (Object.prototype.toString.call(val) === "[object Object]") {
    for (const key in val) {
      const value = val[key];
      if (hasOwn(val, key) && typeof value === "boolean" && Boolean(value)) {
        classes = appendClass(classes, key);
      }
    }
  }

  return classes;
}

function appendClass(classes: string, newClass: string): string {
  let result: string = "";

  // for the first item
  if (!classes) {
    result = newClass;
  }

  if (classes) {
    result = `${classes} ${newClass}`;
  }

  return result;
}
