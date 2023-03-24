import { expect, describe, test } from '@jest/globals';
import { fizzbuzz } from "./fizzbuzz";

describe('FizzBuzz', () => {
  test("should replace fizz whenever there is a number that is divisible by 3", () => {
    const given = 3;

    const expectedValue = ["1", "2", "Fizz"];

    const actual = fizzbuzz(given);

    expect(actual).toEqual(expectedValue);
  });
});