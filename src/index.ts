import {
  BaseCase,
  CamelCase,
  Case,
  CobolCase,
  FlatCase,
  KebabCase,
  MacroCase,
  PascalCase,
  SentenceCase,
  SnakeCase,
  TitleCase,
  TrainCase,
  UpperFlatCase
} from './cases';

// - Case management

const cases: Record<Case, BaseCase> = {
  [Case.CAMEL_CASE]: new CamelCase(),
  [Case.PASCAL_CASE]: new PascalCase(),
  [Case.TRAIN_CASE]: new TrainCase(),
  [Case.COBOL_CASE]: new CobolCase(),
  [Case.KEBAB_CASE]: new KebabCase(),
  [Case.SNAKE_CASE]: new SnakeCase(),
  [Case.TITLE_CASE]: new TitleCase(),
  [Case.SENTENCE_CASE]: new SentenceCase(),
  [Case.MACRO_CASE]: new MacroCase(),
  [Case.FLAT_CASE]: new FlatCase(),
  [Case.UPPER_FLAT_CASE]: new UpperFlatCase()
};

export { Case };

// - Conversion

export function convert(text: string, toCase: Case, fromCase?: Case): string {
  let words: string[];
  if (fromCase) {
    if (!cases[fromCase].validate(text)) {
      throw new Error(`The source text does not appear to be valid ${fromCase}`);
    }
    words = cases[fromCase].splitter.split(text);
  } else {
    const sanitized = String(text)
      .replace(/^[^A-Za-z0-9]*$/g, '')
      .replace(/[^A-Za-z0-9]+/g, ' ') // any non alpha-numeric character will be considered a separator
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a} ${b}`) // lowercase -> uppercase as a separator
      .trim();
    words = sanitized.split(' ');
  }

  return cases[toCase].join(words);
}

export function toCamelCase(text: string, fromCase?: Case): string {
  return convert(text, Case.CAMEL_CASE, fromCase);
}

export function toPascalCase(text: string, fromCase?: Case): string {
  return convert(text, Case.PASCAL_CASE, fromCase);
}

export function toTrainCase(text: string, fromCase?: Case): string {
  return convert(text, Case.TRAIN_CASE, fromCase);
}

export function toCobolCase(text: string, fromCase?: Case): string {
  return convert(text, Case.COBOL_CASE, fromCase);
}

export function toKebabCase(text: string, fromCase?: Case): string {
  return convert(text, Case.KEBAB_CASE, fromCase);
}

export function toSnakeCase(text: string, fromCase?: Case): string {
  return convert(text, Case.SNAKE_CASE, fromCase);
}

export function toTitleCase(text: string, fromCase?: Case): string {
  return convert(text, Case.TITLE_CASE, fromCase);
}

export function toSentenceCase(text: string, fromCase?: Case): string {
  return convert(text, Case.SENTENCE_CASE, fromCase);
}

export function toMacroCase(text: string, fromCase?: Case): string {
  return convert(text, Case.MACRO_CASE, fromCase);
}

export function toFlatCase(text: string, fromCase?: Case): string {
  return convert(text, Case.FLAT_CASE, fromCase);
}

export function toUpperFlatCase(text: string, fromCase?: Case): string {
  return convert(text, Case.UPPER_FLAT_CASE, fromCase);
}

// - Validation

export function validate(text: string, caseToValidate: Case): boolean {
  const textCase = cases[caseToValidate];
  return textCase.validate(text);
}

export function isValidCamelCase(text: string): boolean {
  return validate(text, Case.CAMEL_CASE);
}

export function isValidCobolCase(text: string): boolean {
  return validate(text, Case.COBOL_CASE);
}

export function isValidFlatCase(text: string): boolean {
  return validate(text, Case.FLAT_CASE);
}

export function isValidPascalCase(text: string): boolean {
  return validate(text, Case.PASCAL_CASE);
}

export function isValidSnakeCase(text: string): boolean {
  return validate(text, Case.SNAKE_CASE);
}

export function isValidKebabCase(text: string): boolean {
  return validate(text, Case.KEBAB_CASE);
}

export function isValidTrainCase(text: string): boolean {
  return validate(text, Case.TRAIN_CASE);
}

export function isValidMacroCase(text: string): boolean {
  return validate(text, Case.MACRO_CASE);
}

export function isValidTitleCase(text: string): boolean {
  return validate(text, Case.TITLE_CASE);
}

export function isValidSentenceCase(text: string): boolean {
  return validate(text, Case.SENTENCE_CASE);
}

export function isValidUpperFlatCase(text: string): boolean {
  return validate(text, Case.UPPER_FLAT_CASE);
}
