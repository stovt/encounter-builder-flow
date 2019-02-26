// @flow
export const flattenObject = (
  obj: { [string]: string | {} }, prefix: string = ''
): { [string]: string } => Object.keys(obj)
  .reduce((acc, key: string) => {
    const value = obj[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      acc[prefixedKey] = value;
    } else {
      Object.assign(acc, flattenObject(value, prefixedKey));
    }

    return acc;
  }, {});

export const numberWithCommas = (number: number) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const noop = (): void => {};
