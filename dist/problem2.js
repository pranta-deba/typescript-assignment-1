"use strict";
{
    /*
      Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
    */
    const findLargestNumber = (arr) => {
        const largeNumber = Math.max(...arr);
        return largeNumber;
    };
    console.log(findLargestNumber([10, 5, 8, 20, 3]));
}
