# Textcases

Validate text case and convert strings from a case to another. Useful to validate/enforce naming conventions, convert names into code, and more.

Supported formats:
| Case | Validation | Conversion | Output |
|------|------------|------------|--------|
| Camel case | `isValidCamelCase` | `toCamelCase` | `helloWorld` |
| Cobol case | `isValidCobolCase` | `toCobolCase` | `HELLO-WORLD` |
| Flat case | `isValidFlatCase` | `toFlatCase` | `helloworld` |
| Kebab case | `isValidKebabCase` | `toKebabCase` | `hello-world` |
| Macro case | `isValidMacroCase` | `toMacroCase` | `HELLO_WORLD` |
| Pascal case | `isValidPascalCase` | `toPascalCase` | `HelloWorld` |
| Sentence case | `isValidSentenceCase` | `toSentenceCase` | `Hello world` |
| Snake case | `isValidSnakeCase` | `toSnakeCase` | `hello_world` |
| Title case | `isValidTitleCase` | `toTitleCase` | `Hello World` |
| Train case | `isValidTrainCase` | `toTrainCase` | `Hello-World` |
| Upper flat case | `isValidUpperFlatCase` | `toUpperFlatCase` | `HELLOWORLD` |

## Installation

```
npm install textcases
```

## Usage

### Case validation

Use any of the shorthand validation function, for example:

```typescript
import { isValidCamelCase } from 'textcases';

isValidCamelCase('helloWorld'); // true
isValidCamelCase('HelloWorld'); // false
```

Or use the generic `validate` function, for example:

```typescript
import { validate, Case } from 'textcases';

validate('helloWorld', Case.CAMEL_CASE); // true
validate('HelloWorld', Case.CAMEL_CASE); // false
```

### Case conversion

Use any of the shorthand conversion function, for example:

```typescript
import { toCamelCase } from 'textcases';

toCamelCase('hello world'); // helloWorld
```

Or use the generic `convert` function:

```typescript
import { convert, Case } from 'textcases';

convert('hello world', Case.CAMEL_CASE); // helloWorld
```

If you know the source case, you can add it as the second parameter of either shorthands or generic functions:

```typescript
import { toCamelCase, convert, Case } from 'textcases';

toCamelCase('HelloWorld', Case.PASCAL_CASE);
convert('HelloWorld', Case.CAMEL_CASE, Case.PASCAL_CASE);
```

Note that if you pass the source case, the source string will be validated against this case and an error can be thrown if it doesn't match.
