// @flow
export const flattenObject = (
  obj: { [string]: string | {} }, prefix: string = ''
): { [string]: string } => Object.keys(obj)
  .reduce((acc, key) => {
    const value = obj[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      acc[prefixedKey] = value;
    } else {
      Object.assign(acc, flattenObject(value, prefixedKey));
    }

    return acc;
  }, {});

export const noop = (): void => {};
