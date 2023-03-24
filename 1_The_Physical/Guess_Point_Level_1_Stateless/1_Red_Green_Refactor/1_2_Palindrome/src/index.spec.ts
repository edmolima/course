import { describe, test, expect } from "@jest/globals"
import { palindrome } from "./index"

describe('Palindrome checker', () => {
  test('should return true for a palindrome', () => {
    const given = "mom"

    const actual = palindrome(given)

    expect(actual).toBe(true)
  });
  test('should return false for a non-palindrome', () => {
    const given = "mommy"

    const actual = palindrome(given)

    expect(actual).toBe(false)
  });
  test('should also be able to detect palindromes in phrases', () => {
    const given = "was it a rat i saw"

    const actual = palindrome(given)

    expect(actual).toBe(true)
  });
})