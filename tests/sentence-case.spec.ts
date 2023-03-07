import { Case, isValidSentenceCase, toSentenceCase } from '../src';

describe('the sentence case', () => {
  it('should validate input strings', () => {
    expect(isValidSentenceCase('helloWorld')).toBe(false);
    expect(isValidSentenceCase('HelloWorld')).toBe(false);
    expect(isValidSentenceCase('Hello-World')).toBe(false);
    expect(isValidSentenceCase('HELLO-WORLD')).toBe(false);
    expect(isValidSentenceCase('hello-world')).toBe(false);
    expect(isValidSentenceCase('hello_world')).toBe(false);
    expect(isValidSentenceCase('Hello World')).toBe(false);
    expect(isValidSentenceCase('Hello world')).toBe(true);
    expect(isValidSentenceCase('HELLO_WORLD')).toBe(false);
    expect(isValidSentenceCase('hello world')).toBe(false);
    expect(isValidSentenceCase('hello')).toBe(false);
    expect(isValidSentenceCase('HELLO')).toBe(false);
    expect(isValidSentenceCase('Hello')).toBe(true);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toSentenceCase('helloWorld')).toEqual('Hello world');
    expect(toSentenceCase('HelloWorld')).toEqual('Hello world');
    expect(toSentenceCase('Hello-World')).toEqual('Hello world');
    expect(toSentenceCase('HELLO-WORLD')).toEqual('Hello world');
    expect(toSentenceCase('hello-world')).toEqual('Hello world');
    expect(toSentenceCase('hello_world')).toEqual('Hello world');
    expect(toSentenceCase('Hello World')).toEqual('Hello world');
    expect(toSentenceCase('Hello world')).toEqual('Hello world');
    expect(toSentenceCase('HELLO_WORLD')).toEqual('Hello world');
    expect(toSentenceCase('hello world')).toEqual('Hello world');
    expect(toSentenceCase('hello')).toEqual('Hello');
    expect(toSentenceCase('HELLO')).toEqual('Hello');
    expect(toSentenceCase('Hello')).toEqual('Hello');
  });

  it('should convert when source case is provided', () => {
    expect(toSentenceCase('helloWorld', Case.CAMEL_CASE)).toEqual('Hello world');
    expect(toSentenceCase('HelloWorld', Case.PASCAL_CASE)).toEqual('Hello world');
    expect(toSentenceCase('Hello-World', Case.TRAIN_CASE)).toEqual('Hello world');
    expect(toSentenceCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('Hello world');
    expect(toSentenceCase('hello-world', Case.KEBAB_CASE)).toEqual('Hello world');
    expect(toSentenceCase('hello_world', Case.SNAKE_CASE)).toEqual('Hello world');
    expect(toSentenceCase('Hello World', Case.TITLE_CASE)).toEqual('Hello world');
    expect(toSentenceCase('Hello world', Case.SENTENCE_CASE)).toEqual('Hello world');
    expect(toSentenceCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('Hello world');
    expect(toSentenceCase('hello', Case.FLAT_CASE)).toEqual('Hello');
    expect(toSentenceCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('Hello');
  });
});
