import { WordCase } from './cases';

export abstract class Joiner {
  constructor(public delimiter: string) {}

  public join(words: string[], mode: WordCase, firstWordMode?: WordCase): string {
    let convertedWords = words.map((word) => this.convertCase(word, mode));
    if (firstWordMode && convertedWords.length > 0) {
      convertedWords[0] = this.convertCase(convertedWords[0], firstWordMode);
    }
    return convertedWords.join(this.delimiter);
  }

  private convertCase(word: string, mode: WordCase): string {
    switch (mode) {
      case WordCase.LOWERCASED:
        return word.toLowerCase();
      case WordCase.UPPERCASED:
        return word.toUpperCase();
      case WordCase.CAPITALIZED:
        let lowercased = this.convertCase(word, WordCase.LOWERCASED);
        if (lowercased.length) {
          return lowercased.slice(0, 1).toUpperCase() + lowercased.slice(1);
        } else {
          return lowercased;
        }
      default:
        return word;
    }
  }
}

export class UnderscoreJoiner extends Joiner {
  constructor() {
    super('_');
  }
}

export class SpaceJoiner extends Joiner {
  constructor() {
    super(' ');
  }
}

export class DashJoiner extends Joiner {
  constructor() {
    super('-');
  }
}

export class EmptyJoiner extends Joiner {
  constructor() {
    super('');
  }
}
