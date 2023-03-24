import { describe, test, expect } from "@jest/globals"
import { palindrome } from "./index"

describe('Palindrome checker', () => {
  test('should return true for a palindrome', () => {
    const given = "racecar"

    const actual = palindrome(given)
    
    expect(actual).toBe(true)
  });
})