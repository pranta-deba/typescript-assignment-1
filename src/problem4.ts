{
    /*
        Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
    */

        const reverseArray = (arr:any[]) : any[] =>  {
            const reverseArr : any[] = arr.reverse();
            return reverseArr
        }

        console.log(reverseArray(["apple", "banana", "cherry"]))
        console.log(reverseArray([10, 20, 30]))
}