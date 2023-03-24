export function palindrome(word: string): boolean {
  const regex = /[^0-9a-z]/gi;
  const cleanStr = word.replace(regex, '').toLowerCase();
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}