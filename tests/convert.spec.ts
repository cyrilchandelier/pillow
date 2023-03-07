import { Case, convert } from '../src';

describe('the convert function', () => {
  it('should throw when source case is invalid', () => {
    expect(() => convert('camelCase', Case.KEBAB_CASE, Case.PASCAL_CASE)).toThrow();
  });
});
