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

let notAString: any = "I am a string";

// let strLength = notAString.length;
// ^ this will error out
// solution for casting it as a string below

// solution 1

let strLength = (notAString as string).length;

// OR....

let strlength = (<string> notAString).length;

// ^ ideally you would declare the variable with an explicit type, but if that cannot be done, then casting it as a certain type is possible




