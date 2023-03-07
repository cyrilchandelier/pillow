import { Case, isValidUpperFlatCase, toUpperFlatCase } from '../src';

describe('the upper flat case', () => {
  it('should validate input strings', () => {
    expect(isValidUpperFlatCase('helloWorld')).toBe(false);
    expect(isValidUpperFlatCase('HelloWorld')).toBe(false);
    expect(isValidUpperFlatCase('Hello-World')).toBe(false);
    expect(isValidUpperFlatCase('HELLO-WORLD')).toBe(false);
    expect(isValidUpperFlatCase('hello-world')).toBe(false);
    expect(isValidUpperFlatCase('hello_world')).toBe(false);
    expect(isValidUpperFlatCase('Hello World')).toBe(false);
    expect(isValidUpperFlatCase('Hello world')).toBe(false);
    expect(isValidUpperFlatCase('HELLO_WORLD')).toBe(false);
    expect(isValidUpperFlatCase('hello world')).toBe(false);
    expect(isValidUpperFlatCase('hello')).toBe(false);
    expect(isValidUpperFlatCase('HELLO')).toBe(true);
    expect(isValidUpperFlatCase('Hello')).toBe(false);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toUpperFlatCase('helloWorld')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HelloWorld')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello-World')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HELLO-WORLD')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello-world')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello_world')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello World')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello world')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HELLO_WORLD')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello world')).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello')).toEqual('HELLO');
    expect(toUpperFlatCase('HELLO')).toEqual('HELLO');
    expect(toUpperFlatCase('Hello')).toEqual('HELLO');
  });

  it('should convert when source case is provided', () => {
    expect(toUpperFlatCase('helloWorld', Case.CAMEL_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HelloWorld', Case.PASCAL_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello-World', Case.TRAIN_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello-world', Case.KEBAB_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello_world', Case.SNAKE_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello World', Case.TITLE_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('Hello world', Case.SENTENCE_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('HELLOWORLD');
    expect(toUpperFlatCase('hello', Case.FLAT_CASE)).toEqual('HELLO');
    expect(toUpperFlatCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('HELLO');
  });
});
