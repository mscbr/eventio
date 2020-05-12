import { pxToRem, formatDate, toDeepString, deepCompareObj } from './helpers';

test('pxToRem', () => {
  expect(pxToRem(12)).toBe('0.75rem');
  expect(pxToRem(18)).toBe('1.125rem');
});

test('formatDate', () => {
  expect(formatDate('2020-02-18T13:34:49.267Z')).toBe(
    'February 18, 2020 - 2:34 PM'
  );
  expect(formatDate('2020-04-08T05:36:44.905Z')).toBe(
    'April 8, 2020 - 7:36 AM'
  );
});

test('toDeepString', () => {
  expect(toDeepString({ a: { b: { c: 'c', d: { 1: 1 } } } })).toBe(
    'a:{b:{c:cd:{1:1}}}'
  );
});

test('deepCompareObj', () => {
  expect(
    deepCompareObj(
      { a: 1, b: { a: 1, c: 'c', d: { 1: 'a', b: 'b' } } },
      { a: 1, b: { a: 1, c: 'c', d: { 1: 'a', b: 'b' } } }
    )
  ).toBe(true);
  expect(
    deepCompareObj(
      { a: 1, b: { a: 1, c: 'c', d: { 1: 'a', b: 'b' } } },
      { a: 1, b: { a: 1, c: 'c', d: { 2: 'a', b: 'b' } } }
    )
  ).toBe(false);
  expect(
    deepCompareObj(
      { a: 1, b: { a: 1, c: 'c', d: { 1: 'a', b: 'b' } } },
      { a: 1, b: { a: 1, c: 'c', d: { 1: 'b', b: 'b' } } }
    )
  ).toBe(false);
});
