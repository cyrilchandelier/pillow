import { Case, isValidSnakeCase, toSnakeCase } from '../src';

describe('the snake case', () => {
  it('should validate input strings', () => {
    expect(isValidSnakeCase('helloWorld')).toBe(false);
    expect(isValidSnakeCase('HelloWorld')).toBe(false);
    expect(isValidSnakeCase('Hello-World')).toBe(false);
    expect(isValidSnakeCase('HELLO-WORLD')).toBe(false);
    expect(isValidSnakeCase('hello-world')).toBe(false);
    expect(isValidSnakeCase('hello_world')).toBe(true);
    expect(isValidSnakeCase('Hello World')).toBe(false);
    expect(isValidSnakeCase('Hello world')).toBe(false);
    expect(isValidSnakeCase('HELLO_WORLD')).toBe(false);
    expect(isValidSnakeCase('hello world')).toBe(false);
    expect(isValidSnakeCase('hello')).toBe(true);
    expect(isValidSnakeCase('HELLO')).toBe(false);
    expect(isValidSnakeCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toSnakeCase('helloWorld')).toEqual('hello_world');
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
    expect(toSnakeCase('Hello-World')).toEqual('hello_world');
    expect(toSnakeCase('HELLO-WORLD')).toEqual('hello_world');
    expect(toSnakeCase('hello-world')).toEqual('hello_world');
    expect(toSnakeCase('hello_world')).toEqual('hello_world');
    expect(toSnakeCase('Hello World')).toEqual('hello_world');
    expect(toSnakeCase('Hello world')).toEqual('hello_world');
    expect(toSnakeCase('HELLO_WORLD')).toEqual('hello_world');
    expect(toSnakeCase('hello world')).toEqual('hello_world');
    expect(toSnakeCase('hello')).toEqual('hello');
    expect(toSnakeCase('HELLO')).toEqual('hello');
    expect(toSnakeCase('Hello')).toEqual('hello');
  });

  it('should convert when source case is provided', () => {
    expect(toSnakeCase('helloWorld', Case.CAMEL_CASE)).toEqual('hello_world');
    expect(toSnakeCase('HelloWorld', Case.PASCAL_CASE)).toEqual('hello_world');
    expect(toSnakeCase('Hello-World', Case.TRAIN_CASE)).toEqual('hello_world');
    expect(toSnakeCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('hello_world');
    expect(toSnakeCase('hello-world', Case.KEBAB_CASE)).toEqual('hello_world');
    expect(toSnakeCase('hello_world', Case.SNAKE_CASE)).toEqual('hello_world');
    expect(toSnakeCase('Hello World', Case.TITLE_CASE)).toEqual('hello_world');
    expect(toSnakeCase('Hello world', Case.SENTENCE_CASE)).toEqual('hello_world');
    expect(toSnakeCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('hello_world');
    expect(toSnakeCase('hello', Case.FLAT_CASE)).toEqual('hello');
    expect(toSnakeCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('hello');
  });
});
