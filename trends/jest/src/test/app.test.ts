import { add, print } from '../ts/app';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('prints Hello', () => {
  expect(print('Hello')).toBe('Hello');
});