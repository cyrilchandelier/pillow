import { Case, isValidTrainCase, toTrainCase } from '../src';

describe('the train case', () => {
  it('should validate input strings', () => {
    expect(isValidTrainCase('helloWorld')).toBe(false);
    expect(isValidTrainCase('HelloWorld')).toBe(false);
    expect(isValidTrainCase('Hello-World')).toBe(true);
    expect(isValidTrainCase('HELLO-WORLD')).toBe(false);
    expect(isValidTrainCase('hello-world')).toBe(false);
    expect(isValidTrainCase('hello_world')).toBe(false);
    expect(isValidTrainCase('Hello World')).toBe(false);
    expect(isValidTrainCase('Hello world')).toBe(false);
    expect(isValidTrainCase('HELLO_WORLD')).toBe(false);
    expect(isValidTrainCase('hello world')).toBe(false);
    expect(isValidTrainCase('hello')).toBe(false);
    expect(isValidTrainCase('HELLO')).toBe(false);
    expect(isValidTrainCase('Hello')).toBe(true);
  });

  it('should convert when auto-detecting source case', () => {
    expect(toTrainCase('helloWorld')).toEqual('Hello-World');
    expect(toTrainCase('HelloWorld')).toEqual('Hello-World');
    expect(toTrainCase('Hello-World')).toEqual('Hello-World');
    expect(toTrainCase('HELLO-WORLD')).toEqual('Hello-World');
    expect(toTrainCase('hello-world')).toEqual('Hello-World');
    expect(toTrainCase('hello_world')).toEqual('Hello-World');
    expect(toTrainCase('Hello World')).toEqual('Hello-World');
    expect(toTrainCase('Hello world')).toEqual('Hello-World');
    expect(toTrainCase('HELLO_WORLD')).toEqual('Hello-World');
    expect(toTrainCase('hello world')).toEqual('Hello-World');
    expect(toTrainCase('hello')).toEqual('Hello');
    expect(toTrainCase('HELLO')).toEqual('Hello');
    expect(toTrainCase('Hello')).toEqual('Hello');
  });

  it('should convert when source case is provided', () => {
    expect(toTrainCase('helloWorld', Case.CAMEL_CASE)).toEqual('Hello-World');
    expect(toTrainCase('HelloWorld', Case.PASCAL_CASE)).toEqual('Hello-World');
    expect(toTrainCase('Hello-World', Case.TRAIN_CASE)).toEqual('Hello-World');
    expect(toTrainCase('HELLO-WORLD', Case.COBOL_CASE)).toEqual('Hello-World');
    expect(toTrainCase('hello-world', Case.KEBAB_CASE)).toEqual('Hello-World');
    expect(toTrainCase('hello_world', Case.SNAKE_CASE)).toEqual('Hello-World');
    expect(toTrainCase('Hello World', Case.TITLE_CASE)).toEqual('Hello-World');
    expect(toTrainCase('Hello world', Case.SENTENCE_CASE)).toEqual('Hello-World');
    expect(toTrainCase('HELLO_WORLD', Case.MACRO_CASE)).toEqual('Hello-World');
    expect(toTrainCase('hello', Case.FLAT_CASE)).toEqual('Hello');
    expect(toTrainCase('HELLO', Case.UPPER_FLAT_CASE)).toEqual('Hello');
  });
});
