import { Case, isValidCamelCase, toCamelCase } from '../src';

describe('the camel case', () => {
  it('should validate input string', () => {
    expect(isValidCamelCase('helloWorld')).toBe(true);
    expect(isValidCamelCase('HelloWorld')).toBe(false);
    expect(isValidCamelCase('Hello-World')).toBe(false);
    expect(isValidCamelCase('HELLO-WORLD')).toBe(false);
    expect(isValidCamelCase('hello-world')).toBe(false);
    expect(isValidCamelCase('hello_world')).toBe(false);
    expect(isValidCamelCase('Hello World')).toBe(false);
    expect(isValidCamelCase('Hello world')).toBe(false);
    expect(isValidCamelCase('HELLO_WORLD')).toBe(false);
    expect(isValidCamelCase('hello')).toBe(true);
    expect(isValidCamelCase('hello world')).toBe(false);
    expect(isValidCamelCase('HELLO')).toBe(false);
    expect(isValidCamelCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toCamelCase('helloWorld')).toEqual('helloWorld');
    expect(toCamelCase('HelloWorld')).toEqual('helloWorld');
    expect(toCamelCase('Hello-World')).toEqual('helloWorld');
    expect(toCamelCase('HELLO-WORLD')).toEqual('helloWorld');
    expect(toCamelCase('hello-world')).toEqual('helloWorld');
    expect(toCamelCase('hello_world')).toEqual('helloWorld');
    expect(toCamelCase('Hello World')).toEqual('helloWorld');
    expect(toCamelCase('Hello world')).toEqual('helloWorld');
    expect(toCamelCase('HELLO_WORLD')).toEqual('helloWorld');
    expect(toCamelCase('hello world')).toEqual('helloWorld');
    expect(toCamelCase('hello')).toEqual('hello');
    expect(toCamelCase('HELLO')).toEqual('hello');
    expect(toCamelCase('Hello')).toEqual('hello');
  });

  it('should convert when source case is provided', () => {
    expect(toCamelCase('helloWorld', Case.CAMEL_CASE)).toEqual('helloWorld');
    expect(toCamelCase('HelloWorld', Case.PASCAL_CASE)).toEqual('helloWorld');
    expect(toCamelCase('Hello-World', Case.TRAIN_CASE)).toEqual('helloWorld');
    expect(toCamelCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('helloWorld');
    expect(toCamelCase('hello-world', Case.KEBAB_CASE)).toEqual('helloWorld');
    expect(toCamelCase('hello_world', Case.SNAKE_CASE)).toEqual('helloWorld');
    expect(toCamelCase('Hello World', Case.TITLE_CASE)).toEqual('helloWorld');
    expect(toCamelCase('Hello world', Case.SENTENCE_CASE)).toEqual('helloWorld');
    expect(toCamelCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('helloWorld');
    expect(toCamelCase('hello', Case.FLAT_CASE)).toEqual('hello');
    expect(toCamelCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('hello');
  });
});
