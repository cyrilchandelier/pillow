import { DashJoiner, EmptyJoiner, Joiner, SpaceJoiner, UnderscoreJoiner } from './joiners';
import {
  DashSplitter,
  DoNothingSplitter,
  SpaceSplitter,
  Splitter,
  UnderscoreSplitter,
  UpperCaseSplitter
} from './splitters';

export enum WordCase {
  CAPITALIZED = 'CAPITALIZED',
  LOWERCASED = 'LOWERCASED',
  UPPERCASED = 'UPPERCASED'
}

export enum Case {
  CAMEL_CASE = 'CAMEL_CASE',
  PASCAL_CASE = 'PASCAL_CASE',
  TRAIN_CASE = 'TRAIN_CASE',
  COBOL_CASE = 'COBOL_CASE',
  KEBAB_CASE = 'KEBAB_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  TITLE_CASE = 'TITLE_CASE',
  SENTENCE_CASE = 'SENTENCE_CASE',
  MACRO_CASE = 'MACRO_CASE',
  FLAT_CASE = 'FLAT_CASE',
  UPPER_FLAT_CASE = 'UPPER_FLAT_CASE'
}

export abstract class BaseCase {
  constructor(
    public splitter: Splitter,
    public joiner: Joiner,
    private regex: RegExp,
    private mode: WordCase,
    private firstWordMode?: WordCase
  ) {}

  join(words: string[]): string {
    return this.joiner.join(words, this.mode, this.firstWordMode);
  }

  validate(text: string): boolean {
    return this.regex.test(text);
  }
}

export class CamelCase extends BaseCase {
  constructor() {
    super(
      new UpperCaseSplitter(),
      new EmptyJoiner(),
      new RegExp('^[a-z]+([A-Z]+[a-z0-9]*)*$', 'u'),
      WordCase.CAPITALIZED,
      WordCase.LOWERCASED
    );
  }
}

export class PascalCase extends BaseCase {
  constructor() {
    super(
      new UpperCaseSplitter(),
      new EmptyJoiner(),
      new RegExp('^(?:[A-Z][a-z0-9]+)(?:[A-Z]+[a-z0-9]*)*$', 'u'),
      WordCase.CAPITALIZED
    );
  }
}

export class TrainCase extends BaseCase {
  constructor() {
    super(
      new DashSplitter(),
      new DashJoiner(),
      new RegExp('^[A-Z][a-z0-9]+(?:-[A-Z]+[a-z0-9]*)*$', 'u'),
      WordCase.CAPITALIZED
    );
  }
}

export class CobolCase extends BaseCase {
  constructor() {
    super(new DashSplitter(), new DashJoiner(), new RegExp('^[A-Z0-9]+(?:-[A-Z0-9]+)*$', 'u'), WordCase.UPPERCASED);
  }
}

export class KebabCase extends BaseCase {
  constructor() {
    super(new DashSplitter(), new DashJoiner(), new RegExp('^[a-z0-9]+(?:-[a-z0-9]+)*$', 'u'), WordCase.LOWERCASED);
  }
}

export class SnakeCase extends BaseCase {
  constructor() {
    super(
      new UnderscoreSplitter(),
      new UnderscoreJoiner(),
      new RegExp('^[a-z0-9]+(?:_[a-z0-9]+)*$', 'u'),
      WordCase.LOWERCASED
    );
  }
}

export class TitleCase extends BaseCase {
  constructor() {
    super(
      new SpaceSplitter(),
      new SpaceJoiner(),
      new RegExp('^[A-Z][a-z]*( [A-Z][a-z]+)*$', 'u'),
      WordCase.CAPITALIZED
    );
  }
}

export class SentenceCase extends BaseCase {
  constructor() {
    super(
      new SpaceSplitter(),
      new SpaceJoiner(),
      new RegExp('^[A-Z][a-z]*( [a-z]+)*$', 'u'),
      WordCase.LOWERCASED,
      WordCase.CAPITALIZED
    );
  }
}

export class MacroCase extends BaseCase {
  constructor() {
    super(
      new UnderscoreSplitter(),
      new UnderscoreJoiner(),
      new RegExp('^[A-Z0-9]+(?:_[A-Z0-9]+)*$', 'u'),
      WordCase.UPPERCASED
    );
  }
}

export class FlatCase extends BaseCase {
  constructor() {
    super(new DoNothingSplitter(), new EmptyJoiner(), new RegExp('^[a-z0-9]+$', 'u'), WordCase.LOWERCASED);
  }
}

export class UpperFlatCase extends BaseCase {
  constructor() {
    super(new DoNothingSplitter(), new EmptyJoiner(), new RegExp('^[A-Z0-9]+$', 'u'), WordCase.UPPERCASED);
  }
}
