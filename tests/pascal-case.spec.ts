import { Case, isValidPascalCase, toPascalCase } from '../src';

describe('the pascal case', () => {
  it('should validate input strings', () => {
    expect(isValidPascalCase('helloWorld')).toBe(false);
    expect(isValidPascalCase('HelloWorld')).toBe(true);
    expect(isValidPascalCase('Hello-World')).toBe(false);
    expect(isValidPascalCase('HELLO-WORLD')).toBe(false);
    expect(isValidPascalCase('hello-world')).toBe(false);
    expect(isValidPascalCase('hello_world')).toBe(false);
    expect(isValidPascalCase('Hello World')).toBe(false);
    expect(isValidPascalCase('Hello world')).toBe(false);
    expect(isValidPascalCase('HELLO_WORLD')).toBe(false);
    expect(isValidPascalCase('hello world')).toBe(false);
    expect(isValidPascalCase('hello')).toBe(false);
    expect(isValidPascalCase('HELLO')).toBe(false);
    expect(isValidPascalCase('Hello')).toBe(true);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toPascalCase('helloWorld')).toEqual('HelloWorld');
    expect(toPascalCase('HelloWorld')).toEqual('HelloWorld');
    expect(toPascalCase('Hello-World')).toEqual('HelloWorld');
    expect(toPascalCase('HELLO-WORLD')).toEqual('HelloWorld');
    expect(toPascalCase('hello-world')).toEqual('HelloWorld');
    expect(toPascalCase('hello_world')).toEqual('HelloWorld');
    expect(toPascalCase('Hello World')).toEqual('HelloWorld');
    expect(toPascalCase('Hello world')).toEqual('HelloWorld');
    expect(toPascalCase('HELLO_WORLD')).toEqual('HelloWorld');
    expect(toPascalCase('hello world')).toEqual('HelloWorld');
    expect(toPascalCase('hello')).toEqual('Hello');
    expect(toPascalCase('HELLO')).toEqual('Hello');
    expect(toPascalCase('Hello')).toEqual('Hello');
  });

  it('should convert when source case is provided', () => {
    expect(toPascalCase('helloWorld', Case.CAMEL_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('HelloWorld', Case.PASCAL_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('Hello-World', Case.TRAIN_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('hello-world', Case.KEBAB_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('hello_world', Case.SNAKE_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('Hello World', Case.TITLE_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('Hello world', Case.SENTENCE_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('HelloWorld');
    expect(toPascalCase('hello', Case.FLAT_CASE)).toEqual('Hello');
    expect(toPascalCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('Hello');
  });
});
