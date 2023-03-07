import { Case, isValidMacroCase, toMacroCase } from '../src';

describe('the macro case', () => {
  it('should validate input strings', () => {
    expect(isValidMacroCase('helloWorld')).toBe(false);
    expect(isValidMacroCase('HelloWorld')).toBe(false);
    expect(isValidMacroCase('Hello-World')).toBe(false);
    expect(isValidMacroCase('HELLO-WORLD')).toBe(false);
    expect(isValidMacroCase('hello-world')).toBe(false);
    expect(isValidMacroCase('hello_world')).toBe(false);
    expect(isValidMacroCase('Hello World')).toBe(false);
    expect(isValidMacroCase('Hello world')).toBe(false);
    expect(isValidMacroCase('HELLO_WORLD')).toBe(true);
    expect(isValidMacroCase('hello world')).toBe(false);
    expect(isValidMacroCase('hello')).toBe(false);
    expect(isValidMacroCase('HELLO')).toBe(true);
    expect(isValidMacroCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toMacroCase('helloWorld')).toEqual('HELLO_WORLD');
    expect(toMacroCase('HelloWorld')).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello-World')).toEqual('HELLO_WORLD');
    expect(toMacroCase('HELLO-WORLD')).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello-world')).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello_world')).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello World')).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello world')).toEqual('HELLO_WORLD');
    expect(toMacroCase('HELLO_WORLD')).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello world')).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello')).toEqual('HELLO');
    expect(toMacroCase('HELLO')).toEqual('HELLO');
    expect(toMacroCase('Hello')).toEqual('HELLO');
  });

  it('should convert when source case is provided', () => {
    expect(toMacroCase('helloWorld', Case.CAMEL_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('HelloWorld', Case.PASCAL_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello-World', Case.TRAIN_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello-world', Case.KEBAB_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello_world', Case.SNAKE_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello World', Case.TITLE_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('Hello world', Case.SENTENCE_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('HELLO_WORLD');
    expect(toMacroCase('hello', Case.FLAT_CASE)).toEqual('HELLO');
    expect(toMacroCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('HELLO');
  });
});
