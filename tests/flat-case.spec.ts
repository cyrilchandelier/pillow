import { Case, isValidFlatCase, toFlatCase } from '../src';

describe('the flat case', () => {
  it('should validate input strings', () => {
    expect(isValidFlatCase('helloWorld')).toBe(false);
    expect(isValidFlatCase('HelloWorld')).toBe(false);
    expect(isValidFlatCase('Hello-World')).toBe(false);
    expect(isValidFlatCase('HELLO-WORLD')).toBe(false);
    expect(isValidFlatCase('hello-world')).toBe(false);
    expect(isValidFlatCase('hello_world')).toBe(false);
    expect(isValidFlatCase('Hello World')).toBe(false);
    expect(isValidFlatCase('Hello world')).toBe(false);
    expect(isValidFlatCase('HELLO_WORLD')).toBe(false);
    expect(isValidFlatCase('hello world')).toBe(false);
    expect(isValidFlatCase('hello')).toBe(true);
    expect(isValidFlatCase('HELLO')).toBe(false);
    expect(isValidFlatCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toFlatCase('helloWorld')).toEqual('helloworld');
    expect(toFlatCase('HelloWorld')).toEqual('helloworld');
    expect(toFlatCase('Hello-World')).toEqual('helloworld');
    expect(toFlatCase('HELLO-WORLD')).toEqual('helloworld');
    expect(toFlatCase('hello-world')).toEqual('helloworld');
    expect(toFlatCase('hello_world')).toEqual('helloworld');
    expect(toFlatCase('Hello World')).toEqual('helloworld');
    expect(toFlatCase('Hello world')).toEqual('helloworld');
    expect(toFlatCase('HELLO_WORLD')).toEqual('helloworld');
    expect(toFlatCase('hello world')).toEqual('helloworld');
    expect(toFlatCase('hello')).toEqual('hello');
    expect(toFlatCase('HELLO')).toEqual('hello');
    expect(toFlatCase('Hello')).toEqual('hello');
  });

  it('should convert when source case is provided', () => {
    expect(toFlatCase('helloWorld', Case.CAMEL_CASE)).toEqual('helloworld');
    expect(toFlatCase('HelloWorld', Case.PASCAL_CASE)).toEqual('helloworld');
    expect(toFlatCase('Hello-World', Case.TRAIN_CASE)).toEqual('helloworld');
    expect(toFlatCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('helloworld');
    expect(toFlatCase('hello-world', Case.KEBAB_CASE)).toEqual('helloworld');
    expect(toFlatCase('hello_world', Case.SNAKE_CASE)).toEqual('helloworld');
    expect(toFlatCase('Hello World', Case.TITLE_CASE)).toEqual('helloworld');
    expect(toFlatCase('Hello world', Case.SENTENCE_CASE)).toEqual('helloworld');
    expect(toFlatCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('helloworld');
    expect(toFlatCase('hello', Case.FLAT_CASE)).toEqual('hello');
    expect(toFlatCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('hello');
  });
});
