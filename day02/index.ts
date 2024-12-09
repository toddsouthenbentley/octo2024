import * as fs from "fs";

function partOne(filePath: string): number {
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map(Number)
    .filter((n) => n > 0)
    .reduce((sum, n) => (sum += n * n), 0);
}

console.log("Part 1 test:", partOne("day02/OCTO-Coding-Challenge-2024-Week-2-Part-1-test-input.txt"));
console.log("Part 1:", partOne("day02/OCTO-Coding-Challenge-2024-Week-2-Part-1-input.txt"));

function partTwo(filePath: string): number {
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map(Number)
    .filter((n) => isPrime(n))
    .reduce((sum, n) => (sum += n), 0);
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log("Part 2 test:", partTwo("day02/OCTO-Coding-Challenge-2024-Week-2-Part-2-test-input.txt"));
console.log("Part 2:", partTwo("day02/OCTO-Coding-Challenge-2024-Week-2-Part-2-input.txt"));
