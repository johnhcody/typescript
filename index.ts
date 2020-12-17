// Best not to use 'any'
// create an explicit type...multiple types can be declared


const arr: number[] = [1, 2, 3, 4, 5];

// below are explicit types

let example1: boolean = true;

let example2: number = 42;

let example3: string = "test";

let example4: number | boolean = 5;

let strExample = "string";

let sum = arr.reduce((a, b) => a + b);

let arrCopy = arr;
