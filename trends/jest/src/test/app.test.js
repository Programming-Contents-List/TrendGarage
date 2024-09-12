const { sum, print } = require('../js/app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('prints Hello', () => {
  expect(print()).toBe('Hello');
});
