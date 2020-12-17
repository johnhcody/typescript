TypeScript — as its name suggests — is the typed version of JavaScript. This means we can specify types to different variables at the time of declaration. They will always hold the same type of data in that scope.

Typing is a very useful feature to ensure reliability and scalability. Type checking helps to ensure our code works as expected. Also, it helps in hunting down bugs and errors and properly documenting our code.

There are three different types in TypeScript: 
 - any type
 - Built-in type
 - User-defined type

The any data type is the superset of all the data types in TypeScript. Giving any variable the type of any is equivalent to opting out of type checking for a variable.
 - It can do everything JS can do and more
 - created and maintained by microsoft

```let myVariable: any = 'This is a string'```

Built-in Types
 - include number, string, boolean, void, null, and undefined

User-defined Types
 - include enum, class, interface, array, and tuple

OOP
 - typescript supports all the features of OOP (e.g. classes and interfaces)
 - has built in support for classes `class` is a reserved keyword that can declar a class

 Interface
  - allows the programmer to define the structure of variables.
  - is a 'syntactical contract' to which an object should conform
