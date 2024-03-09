import { classNames } from './classNames';

describe('classNames', () => {
  test('test with a string argument', () => {
    expect(classNames('dog')).toBe('dog');
  });

  test('test with a string argument and an undefined value', () => {
    expect(classNames('dog', undefined, 'cat')).toBe('dog cat');
  });

  test('test with an object argument', () => {
    expect(classNames({ dog: true, cat: false })).toBe('dog');
  });

  test('test with mixed arguments', () => {
    expect(classNames('dog', { cat: true, mouse: false }, 'bird')).toBe('dog cat bird');
  });
});
