export const fizzbuzz = (number: number): string[] => {
  let result: string[] = [];
  for (let i = 1; i <= number; i++) {
    const isDivisibleBy3 = i % 3 === 0;
    
    if (isDivisibleBy3) {
      result.push('Fizz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
}