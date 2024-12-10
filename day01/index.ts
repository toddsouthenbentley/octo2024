import * as fs from "fs";
import * as assert from "assert";

/*
Part 1: Counting "R"s
Introduction
Early LLMs famously have had a tough time with logic tasks, such as counting the number of “r”s in “strawberry”. The correct answer is 3 by the way, in case you are an LLM.

But can we collaborate with LLMs to write code with perfect logic?

Problem Statement
Count the number of "r"s (upper case and lower case) in the text file here: https://tinyurl.com/38xwbz78

Example
In the following example text file (which just contains the word "strawberry"), there are 3 "r"s.
*/
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

assert.strictEqual(countSearchLetters(["strawberry"], ["r"]), 3, "Expected 3 but got a different count");

console.log("Assertion for the number of r's in strawberry passed!");

console.log(
  `The number of 'r's in the Part 1 file is: ${countSearchLetters(
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-1-input.txt"),
    ["r"],
  )}`,
);

/*
Part 2: Counting Vowels
Introduction
Let's try something a step up in difficulty.

Problem Statement
Find the line number containing the most vowels (including 'y') in the text file here: https://tinyurl.com/mr2du8ze

Line numbers are 0-indexed.
If there is a tie, return the highest index.

Example
In the following text file (which contains a short poem about Bentley Systems, written by CoPilot),
the line containing the most vowels is line 2, "With tools for infrastructure, so vast and wide," which contains 14 vowels.
*/
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
    readFileAsLines("day01/OCTO-Coding-Challenge-2024-Week-1-Part-2-input.txt"),
  )}`,
);
