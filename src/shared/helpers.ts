import { DateTime } from 'luxon';

export const pxToRem = (value: number): string => {
  return `${value / 16}rem`;
};

export const formatDateFromISO = (date: string): string => {
  const engDate = DateTime.fromISO(date).setLocale('en');
  return `${engDate.toLocaleString(
    DateTime.DATE_FULL
  )} - ${engDate.toLocaleString(DateTime.TIME_SIMPLE)}`;
};

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export const toDeepString = (object: { [key: string]: any }): string => {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const keyValArr = (item: { [key: string]: any }): Array<any> => {
    return Object.keys(item).map(key => {
      const val = item[key];
      if (!(val instanceof Array) && val instanceof Object)
        return [key, ':', '{', keyValArr(val), '}'];
      return `${key}:${val}`;
    });
  };
  return keyValArr(object)
    .join('')
    .replace(/,/g, '');
};

export const deepCompareObj = (obj1: object, obj2: object): boolean => {
  return toDeepString(obj1) === toDeepString(obj2);
};

export const handleClickOutside = (
  e: MouseEvent,
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  if (ref.current && !ref.current.contains(e.target as Node)) {
    callback();
  }
};
