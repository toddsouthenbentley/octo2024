toddsouthenbentley: Write a  function that takes an array of lines and an array of search letters and returns the case insensitive count of the search letters in the line. 

GitHub Copilot: Sure, here is a function that takes an array of lines and an array of search letters, and returns the case-insensitive count of the search letters in the lines.

```typescript
function countSearchLetters(lines: string[], searchLetters: string[]): number {
    let count = 0;
    const searchSet = new Set(searchLetters.map(letter => letter.toLowerCase()));

    for (const line of lines) {
        for (const char of line.toLowerCase()) {
            if (searchSet.has(char)) {
                count++;
            }
        }
    }

    return count;
}

// Example usage:
const lines = ["Hello World", "TypeScript is great"];
const searchLetters = ["h", "e", "t"];
console.log(countSearchLetters(lines, searchLetters)); // Output: 5
```

This function converts both the lines and search letters to lowercase to ensure case-insensitive comparison. It then counts the occurrences of the search letters in the lines.

toddsouthenbentley: Write a function that reads an input file and returns it as an array of lines

GitHub Copilot: Sure, here is a function that reads an input file and returns it as an array of lines using Node.js:

```typescript
import * as fs from 'fs';

function readFileAsLines(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent.split('\n');
}

// Example usage:
const filePath = 'path/to/your/file.txt';
const lines = readFileAsLines(filePath);
console.log(lines);
```

This function uses the `fs` module to read the file content synchronously and then splits the content by newline characters to return an array of lines.

toddsouthenbentley: write an assert that calls the count function looking for "r's" in "strawberry" expecting it to be 3

GitHub Copilot: Sure, here is an assertion using the 

countSearchLetters

 function to check for the count of "r's" in the word "strawberry", expecting it to be 3:

```typescript
import * as assert from 'assert';

const lines = ["strawberry"];
const searchLetters = ["r"];
const expectedCount = 3;

const actualCount = countSearchLetters(lines, searchLetters);
assert.strictEqual(actualCount, expectedCount, `Expected ${expectedCount} but got ${actualCount}`);

console.log("Assertion passed!");
```

This code uses Node.js's built-in `assert` module to perform the assertion. If the count is not as expected, it will throw an error with the provided message.

toddsouthenbentley: read the day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt file as lines and output the number of r's in it

GitHub Copilot: Sure, here is the code to read the file 

OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt

 as lines and output the number of "r's" in it:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

const filePath = "day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt";
const lines = readFileAsLines(filePath);
const searchLetters = ["r"];
const count = countSearchLetters(lines, searchLetters);

console.log(`The number of 'r's in the file is: ${count}`);
```

This code reads the specified file, counts the number of "r's" in it, and outputs the result.

toddsouthenbentley: just pass the parameters to the funciton don't introduce local variables

GitHub Copilot: Sure, here is the updated code where the parameters are passed directly to the function without introducing local variables:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(file

Path

: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

assert.strictEqual(
  countSearchLetters(["strawberry"], ["r"]),
  3,
  "Expected 3 but got a different count"
);

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);
```

toddsouthenbentley: add a function that calls countSearchLetters to count the vowels in an array of lines

GitHub Copilot: Sure, here is the updated code with a function that calls 

countSearchLetters

 to count the vowels in an array of lines:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(file

Path

: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);
```

This code adds the `countVowels` function, which uses 

countSearchLetters

 to count the number of vowels in an array of lines.

toddsouthenbentley: enhance countSearchLetters so that the lines parameter can be a single string or an array

GitHub Copilot: Sure, here is the enhanced 

countSearchLetters

 function that can handle both a single string and an array of strings for the 

lines

 parameter:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);
```

This enhancement allows the 

countSearchLetters

 function to accept either a single string or an array of strings for the 

lines

 parameter. If a single string is provided, it is converted into an array with one element.

toddsouthenbentley: add a function that finds the line with the most vowels in it

GitHub Copilot: Sure, here is the updated code with a function that finds the line with the most vowels in it:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): string {
  let maxVowels = 0;
  let lineWithMostVowels = "";

  for (const line of lines) {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineWithMostVowels = line;
    }
  }

  return lineWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The line with the most vowels is: "${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}"`
);
```

This code adds the `findLineWithMostVowels` function, which iterates through each line, counts the vowels, and keeps track of the line with the most vowels. It then prints the line with the most vowels.

toddsouthenbentley: the findLineWithMostVowels function should return the line index not the line

GitHub Copilot: Sure, here is the updated code where the `findLineWithMostVowels` function returns the index of the line with the most vowels instead of the line itself:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(file

Path

: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);
```

This code updates the `findLineWithMostVowels` function to return the index of the line with the most vowels.

toddsouthenbentley: Add an assertion that finds the line with the most vowels using this input is 2:

Bentley Systems, a name so grand,
In the world of software, they firmly stand.
With tools for infrastructure, so vast and wide,
They help engineers, with pride.

GitHub Copilot: Sure, here is the updated code with an assertion that finds the line with the most vowels using the provided input:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines

(file

Path: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");
```

This code adds an assertion to check that the line with the most vowels in the provided input is at index 2.

toddsouthenbentley: now log the line index with the most vowels in this input file: day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt

GitHub Copilot: Sure, here is the updated code that logs the line index with the most vowels in the input file 

OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt

:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines

(file

Path: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

// Log the line index with the most vowels in the new input file
const part2FilePath = "day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt";
const part2Lines = readFileAsLines(part2FilePath);
const lineIndexWithMostVowels = findLineWithMostVowels(part2Lines);

console.log(`The index of the line with the most vowels in Part 2 input file is: ${lineIndexWithMostVowels}`);
```

This code reads the input file 

OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt

, finds the line index with the most vowels, and logs the result.

toddsouthenbentley: again don't introduce new variables for that new findLineWithMostVowels call

GitHub Copilot: Sure, here is the updated code without introducing new variables for the 

findLineWithMostVowels

 call:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string

):

 string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code directly calls 

findLineWithMostVowels

 with the result of 

readFileAsLines

 for the new input file and logs the index of the line with the most vowels.

toddsouthenbentley: vowels must include the letter y

GitHub Copilot: Sure, here is the updated code with the letter "y" included in the vowels:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code includes "y" in the list of vowels and updates the 

countVowels

 function accordingly.

toddsouthenbentley: when the vowelCount is equal the maxVowels, take the current index

GitHub Copilot: Sure, here is the updated code where the 

findLineWithMostVowels

 function takes the current index when the 

vowelCount

 is equal to 

maxVowels

:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount >= maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

console.log(
  `The number of vowels in the file is: ${countVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

console.log(
  `The index of the line with the most vowels is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt")
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code updates the 

findLineWithMostVowels

 function to take the current index when the 

vowelCount

 is equal to 

maxVowels

.

toddsouthenbentley: remove the logs showing the number of vowels in the part 1 file and the line with the most vowels in the part 1 file

GitHub Copilot: Sure, here is the updated code with the logs showing the number of vowels in the Part 1 file and the line with the most vowels in the Part 1 file removed:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines

(file

Path: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount >= maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code removes the logs that show the number of vowels in the Part 1 file and the line with the most vowels in the Part 1 file.

toddsouthenbentley: no, I still need log that show's the number of r's in the part 1 file

GitHub Copilot: Understood. Here is the updated code that retains the log showing the number of "r's" in the Part 1 file, while removing the logs for the number of vowels and the line with the most vowels in the Part 1 file:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines(file

Path

: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount >= maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion passed!");

console.log(
  `The number of 'r's in the Part 1 file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride.",
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code retains the log showing the number of "r's" in the Part 1 file and removes the other logs related to the Part 1 file.

toddsouthenbentley: change the first assertion passed message to say: Assertion for the number of r's in strawberry passed!

GitHub Copilot: Sure, here is the updated code with the modified assertion message:

```typescript
import * as fs from "fs";
import * as assert from "assert";

function countSearchLetters(lines: string | string[], searchLetters: string[]): number {
  let count = 0;
  const searchSet = new Set(searchLetters.map((letter) => letter.toLowerCase()));

  if (typeof lines === "string") {
    lines = [lines];
  }

  for (const line of lines) {
    for (const char of line.toLowerCase()) {
      if (searchSet.has(char)) {
        count++;
      }
    }
  }

  return count;
}

function readFileAsLines

(file

Path: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

function countVowels(lines: string | string[]): number {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return countSearchLetters(lines, vowels);
}

function findLineWithMostVowels(lines: string[]): number {
  let maxVowels = 0;
  let lineIndexWithMostVowels = -1;

  lines.forEach((line, index) => {
    const vowelCount = countVowels(line);
    if (vowelCount >= maxVowels) {
      maxVowels = vowelCount;
      lineIndexWithMostVowels = index;
    }
  });

  return lineIndexWithMostVowels;
}

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion for the number of r's in strawberry passed!");

console.log(
  `The number of 'r's in the Part 1 file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"]
  )}`
);

// Test input
const testLines = [
  "Bentley Systems, a name so grand,",
  "In the world of software, they firmly stand.",
  "With tools for infrastructure, so vast and wide,",
  "They help engineers, with pride."
];

assert.strictEqual(findLineWithMostVowels(testLines), 2, "Expected line index 2 but got a different index");

console.log("Assertion for finding the line with the most vowels passed!");

console.log(
  `The index of the line with the most vowels in Part 2 input file is: ${findLineWithMostVowels(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt")
  )}`
);
```

This code updates the first assertion message to say: "Assertion for the number of r's in strawberry passed!".