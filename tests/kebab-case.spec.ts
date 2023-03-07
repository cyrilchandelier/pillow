import { Case, isValidKebabCase, toKebabCase } from '../src';

describe('the kebab case', () => {
  it('should validate input strings', () => {
    expect(isValidKebabCase('helloWorld')).toBe(false);
    expect(isValidKebabCase('HelloWorld')).toBe(false);
    expect(isValidKebabCase('Hello-World')).toBe(false);
    expect(isValidKebabCase('HELLO-WORLD')).toBe(false);
    expect(isValidKebabCase('hello-world')).toBe(true);
    expect(isValidKebabCase('hello_world')).toBe(false);
    expect(isValidKebabCase('Hello World')).toBe(false);
    expect(isValidKebabCase('Hello world')).toBe(false);
    expect(isValidKebabCase('HELLO_WORLD')).toBe(false);
    expect(isValidKebabCase('hello world')).toBe(false);
    expect(isValidKebabCase('hello')).toBe(true);
    expect(isValidKebabCase('HELLO')).toBe(false);
    expect(isValidKebabCase('Hello')).toBe(false);
  });

  test('conversion when auto-detecting source case', () => {
    expect(toKebabCase('helloWorld')).toEqual('hello-world');
    expect(toKebabCase('HelloWorld')).toEqual('hello-world');
    expect(toKebabCase('Hello-World')).toEqual('hello-world');
    expect(toKebabCase('HELLO-WORLD')).toEqual('hello-world');
    expect(toKebabCase('hello-world')).toEqual('hello-world');
    expect(toKebabCase('hello_world')).toEqual('hello-world');
    expect(toKebabCase('Hello World')).toEqual('hello-world');
    expect(toKebabCase('Hello world')).toEqual('hello-world');
    expect(toKebabCase('HELLO_WORLD')).toEqual('hello-world');
    expect(toKebabCase('hello world')).toEqual('hello-world');
    expect(toKebabCase('hello')).toEqual('hello');
    expect(toKebabCase('HELLO')).toEqual('hello');
    expect(toKebabCase('Hello')).toEqual('hello');
  });

  it('should convert when source case is provided', () => {
    expect(toKebabCase('helloWorld', Case.CAMEL_CASE)).toEqual('hello-world');
    expect(toKebabCase('HelloWorld', Case.PASCAL_CASE)).toEqual('hello-world');
    expect(toKebabCase('Hello-World', Case.TRAIN_CASE)).toEqual('hello-world');
    expect(toKebabCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('hello-world');
    expect(toKebabCase('hello-world', Case.KEBAB_CASE)).toEqual('hello-world');
    expect(toKebabCase('hello_world', Case.SNAKE_CASE)).toEqual('hello-world');
    expect(toKebabCase('Hello World', Case.TITLE_CASE)).toEqual('hello-world');
    expect(toKebabCase('Hello world', Case.SENTENCE_CASE)).toEqual('hello-world');
    expect(toKebabCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('hello-world');
    expect(toKebabCase('hello', Case.FLAT_CASE)).toEqual('hello');
    expect(toKebabCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('hello');
  });
});
