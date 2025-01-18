"use strict";
{
    /*
      Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
    */
    const repeatString = (text, times) => {
        let values = "";
        for (let i = 1; i <= times; i++) {
            values += text;
        }
        return values;
    };
    repeatString('Hello', 3);
}
