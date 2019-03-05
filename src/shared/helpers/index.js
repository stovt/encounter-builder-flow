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

export const isIE = (() => {
  const ua = window.navigator.userAgent;
  return (ua.indexOf('MSIE ') > 0) || (ua.indexOf('Trident/') > 0);
})();

export const scrollbarWidth = (function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  // $FlowFixMe
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  // $FlowFixMe
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  // remove divs $FlowFixMe
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}());
