{
  /*
        Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
  */

  const filterEvenNumbers = (arr: number[]): number[] => {
    const evenNumbers: number[] = arr.filter((e) => e % 2 === 0);
    return evenNumbers;
  };

  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
}
