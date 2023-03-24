export const palindrome = (word: string) => {
  const reversed = word.split('').reverse().join('')
  if(reversed === word) {
    return true
  }

  if(reversed !== word) {
    return false
  }
}