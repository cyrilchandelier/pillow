import { Case, isValidTitleCase, toTitleCase } from '../src';

describe('the title case', () => {
  it('should validate input strings', () => {
    expect(isValidTitleCase('helloWorld')).toBe(false);
    expect(isValidTitleCase('HelloWorld')).toBe(false);
    expect(isValidTitleCase('Hello-World')).toBe(false);
    expect(isValidTitleCase('HELLO-WORLD')).toBe(false);
    expect(isValidTitleCase('hello-world')).toBe(false);
    expect(isValidTitleCase('hello_world')).toBe(false);
    expect(isValidTitleCase('Hello World')).toBe(true);
    expect(isValidTitleCase('Hello world')).toBe(false);
    expect(isValidTitleCase('HELLO_WORLD')).toBe(false);
    expect(isValidTitleCase('hello world')).toBe(false);
    expect(isValidTitleCase('hello')).toBe(false);
    expect(isValidTitleCase('HELLO')).toBe(false);
    expect(isValidTitleCase('Hello')).toBe(true);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toTitleCase('helloWorld')).toEqual('Hello World');
    expect(toTitleCase('HelloWorld')).toEqual('Hello World');
    expect(toTitleCase('Hello-World')).toEqual('Hello World');
    expect(toTitleCase('HELLO-WORLD')).toEqual('Hello World');
    expect(toTitleCase('hello-world')).toEqual('Hello World');
    expect(toTitleCase('hello_world')).toEqual('Hello World');
    expect(toTitleCase('Hello World')).toEqual('Hello World');
    expect(toTitleCase('Hello world')).toEqual('Hello World');
    expect(toTitleCase('HELLO_WORLD')).toEqual('Hello World');
    expect(toTitleCase('hello world')).toEqual('Hello World');
    expect(toTitleCase('hello')).toEqual('Hello');
    expect(toTitleCase('HELLO')).toEqual('Hello');
    expect(toTitleCase('Hello')).toEqual('Hello');
  });

  it('should convert when source case is provided', () => {
    expect(toTitleCase('helloWorld', Case.CAMEL_CASE)).toEqual('Hello World');
    expect(toTitleCase('HelloWorld', Case.PASCAL_CASE)).toEqual('Hello World');
    expect(toTitleCase('Hello-World', Case.TRAIN_CASE)).toEqual('Hello World');
    expect(toTitleCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('Hello World');
    expect(toTitleCase('hello-world', Case.KEBAB_CASE)).toEqual('Hello World');
    expect(toTitleCase('hello_world', Case.SNAKE_CASE)).toEqual('Hello World');
    expect(toTitleCase('Hello World', Case.TITLE_CASE)).toEqual('Hello World');
    expect(toTitleCase('Hello world', Case.SENTENCE_CASE)).toEqual('Hello World');
    expect(toTitleCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('Hello World');
    expect(toTitleCase('hello', Case.FLAT_CASE)).toEqual('Hello');
    expect(toTitleCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('Hello');
  });
});
