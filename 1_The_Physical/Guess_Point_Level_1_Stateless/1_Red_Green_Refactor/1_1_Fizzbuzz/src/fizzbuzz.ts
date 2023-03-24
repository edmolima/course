export const fizzbuzz = (number: number): string[] => {
  let result: string[] = [];
  for (let i = 1; i <= number; i++) {
    const isDivisibleByThree = i % 3 === 0;
    const isDivisibleByFive = i % 5 === 0;
    
    switch (true) {
      case isDivisibleByThree && isDivisibleByFive:
        result.push("FizzBuzz");
        break;
      case isDivisibleByThree:
        result.push("Fizz");
        break;
      case isDivisibleByFive:
        result.push("Buzz");
        break;
      default:
        result.push(i.toString());
        break;
    }
  }

  return result;
}