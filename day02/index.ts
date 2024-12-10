import * as fs from "fs";

/*
Part 1: Map, Filter and Reduce
(20 Points)
Introduction
Big data tasks often involve mapping, filtering and aggregating (reducing) large arrays of data.
Lets practice this in our language of choice!

Problem Statement
Sum the squares of the non-negative integers in this newline-separated text file.

You don't need to use the map, filter or reduce functions specifically for any language, you can solve it any way you'd like.

Example
In the following example text file (which just contains the integers -3 to 3), the sum of the squares of the non-negative values is 0^2+1^2+2^2+3^2 = 14
*/

class NumberArray {
  private _data: number[] = [];

  constructor(...values: number[]) {
    this._data = values;
  }
  public get length(): number {
    return this._data.length;
  }
  public set length(value: number) {
    this._data.length = value;
  }
  public get(index: number): number {
    return this._data[index];
  }
  public set(index: number, value: number) {
    this._data[index] = value;
  }

  static fromStrings(...values: string[]): NumberArray {
    return new NumberArray(...values.map(Number));
  }

  static fromFile(filePath: string): NumberArray {
    return NumberArray.fromStrings(...fs.readFileSync(filePath, "utf-8").split("\n"));
  }

  sum(callback = (n: number) => n): number {
    return this._data.reduce((sum, n) => (sum += callback(n)), 0);
  }

  filter(callback: (n: number) => boolean): NumberArray {
    return new NumberArray(...this._data.filter(callback));
  }
}

function partOne(filePath: string) {
  // return fs
  //   .readFileSync(filePath, "utf-8")
  //   .split("\n")
  //   .map(Number)
  //   .filter((n) => n > 0)
  //   .reduce((sum, n) => (sum += n * n), 0);
  return NumberArray.fromFile(filePath)
    .filter((n) => n >= 0)
    .sum((n) => n * n);
}

console.log("Part 1 test:", partOne("day02/OCTO-Coding-Challenge-2024-Week-2-Part-1-test-input.txt"));
console.log("Part 1:", partOne("day02/OCTO-Coding-Challenge-2024-Week-2-Part-1-input.txt"));

/*
Part 2: Counting Primes
(30 Points)
Introduction
Let's try something a step up in difficulty. What if we have to work with more fickle numbers which are harder to filter?

Prime numbers are numbers which are only evenly divisible by themselves and 1. There are many methods for checking if a number is prime, referred to as "primality tests". Prime numbers have important applications in cryptography.

Problem Statement
Sum all the prime numbers in the text file.

Remember, 1 does not count as a prime number!

Example
In the following example text file (which just contains the integers 1 to 10), the sum of the prime numbers is 2+3+5+7 = 17
*/
function partTwo(filePath: string): number {
  // return fs
  //   .readFileSync(filePath, "utf-8")
  //   .split("\n")
  //   .map(Number)
  //   .filter((n) => isPrime(n))
  //   .reduce((sum, n) => (sum += n), 0);
  return NumberArray.fromFile(filePath)
    .filter((n) => isPrime(n))
    .sum();
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
