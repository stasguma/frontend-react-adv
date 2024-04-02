import { classNames } from './classNames';

describe('classNames', () => {
  test('should accept a string argument', () => {
    expect(classNames('dog')).toBe('dog');
  });

  test('should accept a string argument and an undefined value', () => {
    expect(classNames('dog', undefined, 'cat')).toBe('dog cat');
  });

  test('should accept an object argument', () => {
    expect(classNames({ dog: true, cat: false })).toBe('dog');
  });

  test('should accept mixed arguments', () => {
    expect(classNames('dog', { cat: true, mouse: false }, 'bird')).toBe('dog cat bird');
  });
});
