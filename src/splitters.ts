export class Splitter {
  constructor(private pattern?: RegExp) {}

  split(text: string): string[] {
    if (this.pattern) {
      return text.split(this.pattern);
    } else {
      return [text];
    }
  }
}

export class DashSplitter extends Splitter {
  constructor() {
    super(new RegExp('-', 'u'));
  }
}

export class UnderscoreSplitter extends Splitter {
  constructor() {
    super(new RegExp('_', 'u'));
  }
}

export class SpaceSplitter extends Splitter {
  constructor() {
    super(new RegExp(' ', 'u'));
  }
}

export class UpperCaseSplitter extends Splitter {
  constructor() {
    super(new RegExp('(?=[A-Z])', 'u'));
  }
}

export class DoNothingSplitter extends Splitter {}
