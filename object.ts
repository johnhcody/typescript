const obj1: object = undefined; // also could assign {} or null..... cannot assign NaN

const obj2: Object = NaN; // this is allowed

const obj3: {} = "string"; // this works, but you will never be able to assign a value to the object