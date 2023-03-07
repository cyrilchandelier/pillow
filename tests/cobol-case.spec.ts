import { Case, isValidCobolCase, toCobolCase } from '../src';

describe('the cobol case', () => {
  it('should validate input strings', () => {
    expect(isValidCobolCase('helloWorld')).toBe(false);
    expect(isValidCobolCase('HelloWorld')).toBe(false);
    expect(isValidCobolCase('Hello-World')).toBe(false);
    expect(isValidCobolCase('HELLO-WORLD')).toBe(true);
    expect(isValidCobolCase('hello-world')).toBe(false);
    expect(isValidCobolCase('hello_world')).toBe(false);
    expect(isValidCobolCase('Hello World')).toBe(false);
    expect(isValidCobolCase('Hello world')).toBe(false);
    expect(isValidCobolCase('HELLO_WORLD')).toBe(false);
    expect(isValidCobolCase('hello world')).toBe(false);
    expect(isValidCobolCase('hello')).toBe(false);
    expect(isValidCobolCase('HELLO')).toBe(true);
    expect(isValidCobolCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toCobolCase('helloWorld')).toEqual('HELLO-WORLD');
    expect(toCobolCase('HelloWorld')).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello-World')).toEqual('HELLO-WORLD');
    expect(toCobolCase('HELLO-WORLD')).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello-world')).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello_world')).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello World')).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello world')).toEqual('HELLO-WORLD');
    expect(toCobolCase('HELLO_WORLD')).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello world')).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello')).toEqual('HELLO');
    expect(toCobolCase('HELLO')).toEqual('HELLO');
    expect(toCobolCase('Hello')).toEqual('HELLO');
  });

  it('should convert when source case is provided', () => {
    expect(toCobolCase('helloWorld', Case.CAMEL_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('HelloWorld', Case.PASCAL_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello-World', Case.TRAIN_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello-world', Case.KEBAB_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello_world', Case.SNAKE_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello World', Case.TITLE_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('Hello world', Case.SENTENCE_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('HELLO-WORLD');
    expect(toCobolCase('hello', Case.FLAT_CASE)).toEqual('HELLO');
    expect(toCobolCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('HELLO');
  });
});
