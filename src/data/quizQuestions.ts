export interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizLevel {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}

export const quizQuestions: QuizLevel = {
  easy: [
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["variable x = 5;", "let x = 5;", "v x = 5;", "declare x = 5;"],
      correctAnswer: 1,
      explanation: "In JavaScript, 'let' is used to declare a block-scoped variable. 'var' is also valid but 'let' is preferred in modern JavaScript due to its block scoping behavior, which helps prevent common bugs related to variable hoisting."
    },
    {
      id: 2,
      question: "What will be the output of: console.log(typeof [])?",
      code: "console.log(typeof []);",
      options: ["'array'", "'object'", "'list'", "'undefined'"],
      correctAnswer: 1,
      explanation: "In JavaScript, arrays are actually objects. The typeof operator returns 'object' for arrays. To check if something is an array, use Array.isArray() method instead."
    },
    {
      id: 3,
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0,
      explanation: "push() adds one or more elements to the end of an array and returns the new length. pop() removes from end, shift() removes from beginning, and unshift() adds to the beginning."
    },
    {
      id: 4,
      question: "What is the result of: 2 + '2'?",
      code: "2 + '2'",
      options: ["4", "'22'", "22", "NaN"],
      correctAnswer: 1,
      explanation: "JavaScript performs type coercion. When adding a number to a string, the number is converted to a string and concatenation occurs. So 2 becomes '2' and '2' + '2' = '22'."
    },
    {
      id: 5,
      question: "How do you write a single-line comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
      correctAnswer: 1,
      explanation: "Single-line comments in JavaScript start with //. Multi-line comments use /* */. HTML comments use <!-- -->, and # is used in languages like Python."
    },
    {
      id: 6,
      question: "What does the === operator check?",
      options: ["Only value", "Only type", "Value and type", "Reference"],
      correctAnswer: 2,
      explanation: "The strict equality operator (===) checks both value and type without type coercion. '5' === 5 is false because one is a string and one is a number. Use === over == for more predictable behavior."
    },
    {
      id: 7,
      question: "Which is NOT a JavaScript data type?",
      options: ["undefined", "boolean", "float", "symbol"],
      correctAnswer: 2,
      explanation: "JavaScript has: string, number, boolean, undefined, null, symbol, bigint, and object. 'float' is not a separate type - all numbers in JavaScript are of type 'number' (64-bit floating-point)."
    },
    {
      id: 8,
      question: "What will console.log(Boolean('')) output?",
      code: "console.log(Boolean(''))",
      options: ["true", "false", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "An empty string is a 'falsy' value in JavaScript. Other falsy values include: 0, null, undefined, NaN, and false. All other values are 'truthy'."
    },
    {
      id: 9,
      question: "How do you create a function in JavaScript?",
      options: ["function = myFunc() {}", "function myFunc() {}", "create myFunc() {}", "def myFunc() {}"],
      correctAnswer: 1,
      explanation: "Functions are declared using the 'function' keyword followed by the function name and parentheses. You can also use arrow functions: const myFunc = () => {} or function expressions."
    },
    {
      id: 10,
      question: "What is the result of: typeof null?",
      code: "typeof null",
      options: ["'null'", "'undefined'", "'object'", "'boolean'"],
      correctAnswer: 2,
      explanation: "This is a known JavaScript bug that exists since the first version. typeof null returns 'object' even though null is a primitive value. This behavior is kept for backwards compatibility."
    },
    {
      id: 11,
      question: "Which method converts a string to uppercase?",
      options: ["toUpper()", "uppercase()", "toUpperCase()", "upper()"],
      correctAnswer: 2,
      explanation: "The toUpperCase() method returns the calling string value converted to uppercase. Similarly, toLowerCase() converts to lowercase. These methods don't modify the original string."
    },
    {
      id: 12,
      question: "What is the index of the first element in an array?",
      options: ["1", "0", "-1", "undefined"],
      correctAnswer: 1,
      explanation: "JavaScript arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. This is common in most programming languages."
    },
    {
      id: 13,
      question: "Which keyword is used to declare a constant?",
      options: ["var", "let", "const", "constant"],
      correctAnswer: 2,
      explanation: "The 'const' keyword declares a block-scoped constant. The value cannot be reassigned after initialization. However, if the constant is an object or array, its properties can still be modified."
    },
    {
      id: 14,
      question: "What will [1, 2, 3].length return?",
      code: "[1, 2, 3].length",
      options: ["2", "3", "4", "undefined"],
      correctAnswer: 1,
      explanation: "The length property returns the number of elements in an array. Since the array [1, 2, 3] has three elements, it returns 3. Length is always one more than the highest index."
    },
    {
      id: 15,
      question: "How do you check if a variable x is undefined?",
      options: ["x == undefined", "typeof x === 'undefined'", "x === void", "isUndefined(x)"],
      correctAnswer: 1,
      explanation: "Using typeof x === 'undefined' is the safest way to check for undefined. It works even if x hasn't been declared. Direct comparison (x === undefined) can throw an error if x isn't declared."
    },
    {
      id: 16,
      question: "What does NaN stand for?",
      options: ["Not a Node", "Null and None", "Not a Number", "New Array Notation"],
      correctAnswer: 2,
      explanation: "NaN stands for 'Not a Number'. It represents a value that is not a valid number. Interestingly, typeof NaN returns 'number', and NaN === NaN is false! Use isNaN() or Number.isNaN() to check for NaN."
    },
    {
      id: 17,
      question: "Which method removes the last element from an array?",
      options: ["pop()", "push()", "shift()", "slice()"],
      correctAnswer: 0,
      explanation: "pop() removes and returns the last element of an array. It modifies the original array. push() adds to end, shift() removes from beginning, and slice() returns a portion without modifying."
    },
    {
      id: 18,
      question: "What is the output of: console.log(1 == '1')?",
      code: "console.log(1 == '1')",
      options: ["true", "false", "undefined", "Error"],
      correctAnswer: 0,
      explanation: "The loose equality operator (==) performs type coercion before comparing. The string '1' is converted to number 1, then 1 == 1 is true. Use === to avoid type coercion."
    },
    {
      id: 19,
      question: "How do you write an arrow function?",
      options: ["function => () {}", "() => {}", "=> function() {}", "() -> {}"],
      correctAnswer: 1,
      explanation: "Arrow functions use the syntax: (parameters) => { body }. For single expressions, you can omit braces: (x) => x * 2. Arrow functions don't have their own 'this' binding."
    },
    {
      id: 20,
      question: "What does JSON stand for?",
      options: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Online Notation", "Java Syntax Object Network"],
      correctAnswer: 0,
      explanation: "JSON stands for JavaScript Object Notation. It's a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate."
    },
    {
      id: 21,
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "^^", "pow"],
      correctAnswer: 1,
      explanation: "The ** operator performs exponentiation. For example, 2 ** 3 equals 8. The ^ operator in JavaScript is actually the bitwise XOR operator, not exponentiation."
    },
    {
      id: 22,
      question: "What is the purpose of the 'return' statement?",
      options: ["To print output", "To exit a function and return a value", "To declare variables", "To import modules"],
      correctAnswer: 1,
      explanation: "The 'return' statement ends function execution and specifies a value to be returned to the function caller. If no return statement is used, the function returns undefined."
    },
    {
      id: 23,
      question: "How do you concatenate two strings in JavaScript?",
      options: ["concat()", "Using + operator", "Both A and B", "Using & operator"],
      correctAnswer: 2,
      explanation: "You can concatenate strings using the + operator ('Hello' + 'World') or the concat() method ('Hello'.concat('World')). Template literals with backticks also work: `${str1}${str2}`."
    },
    {
      id: 24,
      question: "What is the result of: Boolean(0)?",
      code: "Boolean(0)",
      options: ["true", "false", "0", "undefined"],
      correctAnswer: 1,
      explanation: "0 is a falsy value in JavaScript. When converted to boolean, it becomes false. Other falsy values are: '', null, undefined, NaN, and false itself."
    },
    {
      id: 25,
      question: "Which method finds the index of an element in an array?",
      options: ["findIndex()", "indexOf()", "getIndex()", "Both A and B"],
      correctAnswer: 3,
      explanation: "indexOf() returns the first index of a value, or -1 if not found. findIndex() takes a callback function and returns the index of the first element that satisfies it. Both are valid approaches."
    },
    {
      id: 26,
      question: "What is a template literal in JavaScript?",
      options: ["A string in single quotes", "A string in double quotes", "A string in backticks", "A string in parentheses"],
      correctAnswer: 2,
      explanation: "Template literals use backticks (`) and allow embedded expressions using ${expression} syntax. They also support multi-line strings without escape characters."
    },
    {
      id: 27,
      question: "What does the 'this' keyword refer to?",
      options: ["The current function", "The current object", "The global object", "Depends on context"],
      correctAnswer: 3,
      explanation: "'this' refers to different objects depending on how it's used: in a method it's the owner object, alone it's the global object, in a function it's the global object (or undefined in strict mode), in an event it's the element that received the event."
    },
    {
      id: 28,
      question: "How do you declare an object literal?",
      options: ["object = {}", "{} = object", "new Object[]", "Object({})"],
      correctAnswer: 0,
      explanation: "An object literal is created using curly braces: const obj = { key: value }. This is the most common and preferred way to create objects in JavaScript."
    },
    {
      id: 29,
      question: "What is the output of: typeof function(){}?",
      code: "typeof function(){}",
      options: ["'object'", "'function'", "'undefined'", "'method'"],
      correctAnswer: 1,
      explanation: "Functions in JavaScript have their own type. typeof returns 'function' for any function. Even though functions are objects, they get special treatment with typeof."
    },
    {
      id: 30,
      question: "Which loop is best for iterating over array elements?",
      options: ["for...in", "for...of", "while", "do...while"],
      correctAnswer: 1,
      explanation: "for...of is designed for iterating over iterable objects like arrays. It gives you the values directly. for...in iterates over property names (including inherited ones) and is better for objects."
    }
  ],
  medium: [
    {
      id: 1,
      question: "What is the output of this code?",
      code: "console.log([...'hello']);",
      options: ["['hello']", "['h', 'e', 'l', 'l', 'o']", "'hello'", "Error"],
      correctAnswer: 1,
      explanation: "The spread operator (...) can spread a string into an array of its characters. 'hello' becomes ['h', 'e', 'l', 'l', 'o']. This is because strings are iterable in JavaScript."
    },
    {
      id: 2,
      question: "What does Array.prototype.map() return?",
      options: ["The original array", "A new array", "undefined", "The first element"],
      correctAnswer: 1,
      explanation: "map() creates a new array with the results of calling a function on every element. It doesn't mutate the original array. This is a key principle of functional programming in JavaScript."
    },
    {
      id: 3,
      question: "What is a closure in JavaScript?",
      options: ["A way to close the browser", "A function with access to its outer scope", "A method to end loops", "A type of error"],
      correctAnswer: 1,
      explanation: "A closure is a function that remembers variables from its outer (enclosing) scope even after the outer function has returned. Closures are fundamental to JavaScript and enable private variables and data encapsulation."
    },
    {
      id: 4,
      question: "What will this code output?",
      code: "const arr = [1, 2, 3];\narr[10] = 11;\nconsole.log(arr.length);",
      options: ["3", "4", "10", "11"],
      correctAnswer: 3,
      explanation: "When you assign a value to an index beyond the array's length, JavaScript creates 'empty slots' for the missing indices. The length becomes the highest index + 1, so arr.length is 11."
    },
    {
      id: 5,
      question: "What is the difference between 'let' and 'var'?",
      options: ["No difference", "let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "let is faster"],
      correctAnswer: 1,
      explanation: "'let' is block-scoped (limited to the block, statement, or expression where it's defined). 'var' is function-scoped. Also, 'let' doesn't get hoisted in the same way as 'var', preventing the Temporal Dead Zone issues."
    },
    {
      id: 6,
      question: "What does the 'use strict' directive do?",
      options: ["Makes code run faster", "Enables stricter parsing and error handling", "Disables console.log", "Enables TypeScript"],
      correctAnswer: 1,
      explanation: "'use strict' enables strict mode, which catches common coding mistakes and unsafe actions. It prevents using undeclared variables, eliminates silent errors, and disables some problematic features."
    },
    {
      id: 7,
      question: "What is the output?",
      code: "console.log(0.1 + 0.2 === 0.3);",
      options: ["true", "false", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004 in JavaScript. This is not a JavaScript bug but a representation issue in binary floating-point numbers."
    },
    {
      id: 8,
      question: "What is event bubbling?",
      options: ["Events only fire once", "Events propagate from child to parent", "Events propagate from parent to child", "Events are cancelled"],
      correctAnswer: 1,
      explanation: "Event bubbling is when an event triggers on the innermost element first, then bubbles up to outer elements. The opposite is event capturing, where events go from outer to inner. Use stopPropagation() to stop bubbling."
    },
    {
      id: 9,
      question: "What does Object.freeze() do?",
      options: ["Deletes an object", "Prevents adding/removing/modifying properties", "Copies an object", "Converts object to string"],
      correctAnswer: 1,
      explanation: "Object.freeze() makes an object immutable. You cannot add, remove, or modify its properties. It's a shallow freeze, so nested objects can still be modified unless also frozen."
    },
    {
      id: 10,
      question: "What is the output?",
      code: "console.log(typeof NaN === 'number');",
      options: ["true", "false", "undefined", "Error"],
      correctAnswer: 0,
      explanation: "Surprisingly, NaN (Not a Number) is of type 'number' in JavaScript. This is because NaN is a special value representing an undefined or unrepresentable numerical result, but it's still a numeric type."
    },
    {
      id: 11,
      question: "What does the spread operator do with objects?",
      code: "const obj1 = { a: 1, b: 2 };\nconst obj2 = { ...obj1, c: 3 };",
      options: ["Creates a reference to obj1", "Creates a shallow copy and adds c", "Creates a deep copy", "Throws an error"],
      correctAnswer: 1,
      explanation: "The spread operator creates a shallow copy of an object's enumerable properties. { ...obj1, c: 3 } copies all properties from obj1 and adds a new property c. Nested objects are still references."
    },
    {
      id: 12,
      question: "What is the purpose of Promise.all()?",
      options: ["Runs promises sequentially", "Runs promises in parallel and waits for all", "Returns the first resolved promise", "Cancels all promises"],
      correctAnswer: 1,
      explanation: "Promise.all() takes an array of promises and returns a single promise that resolves when all input promises resolve, or rejects if any promise rejects. It's useful for parallel async operations."
    },
    {
      id: 13,
      question: "What is destructuring in JavaScript?",
      options: ["Deleting objects", "Extracting values from arrays/objects", "Creating new variables", "Memory management"],
      correctAnswer: 1,
      explanation: "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables. Example: const {name, age} = person; or const [first, second] = array;"
    },
    {
      id: 14,
      question: "What will this output?",
      code: "console.log([] == ![]);",
      options: ["true", "false", "undefined", "Error"],
      correctAnswer: 0,
      explanation: "This is a tricky type coercion case. ![] is false (arrays are truthy, negated to false). [] == false involves converting both to numbers: [] becomes 0, false becomes 0. So 0 == 0 is true."
    },
    {
      id: 15,
      question: "What is the difference between null and undefined?",
      options: ["They are the same", "null is assigned, undefined is default", "undefined is assigned, null is default", "null is for objects only"],
      correctAnswer: 1,
      explanation: "undefined means a variable has been declared but not assigned. null is an intentional assignment of 'no value'. Variables are undefined by default; null must be explicitly assigned."
    },
    {
      id: 16,
      question: "What does Array.prototype.reduce() do?",
      options: ["Removes elements", "Reduces array to a single value", "Creates a new array", "Sorts the array"],
      correctAnswer: 1,
      explanation: "reduce() executes a reducer function on each element, resulting in a single output value. Common uses: summing numbers, flattening arrays, grouping data. It takes an accumulator and current value."
    },
    {
      id: 17,
      question: "What is hoisting in JavaScript?",
      options: ["Moving code to the top of file", "Variable/function declarations moved to top of scope", "A way to optimize code", "An error handling method"],
      correctAnswer: 1,
      explanation: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Functions are fully hoisted; var declarations are hoisted but not their assignments; let/const are hoisted but in a 'temporal dead zone'."
    },
    {
      id: 18,
      question: "What is the output?",
      code: "const x = [1, 2, 3];\nconst y = x;\ny.push(4);\nconsole.log(x.length);",
      options: ["3", "4", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "Arrays are reference types. When y = x, both variables point to the same array in memory. Modifying y also modifies x. To create an independent copy, use [...x] or x.slice()."
    },
    {
      id: 19,
      question: "What is the purpose of async/await?",
      options: ["To make code run faster", "To write asynchronous code in synchronous style", "To pause JavaScript execution", "To handle errors"],
      correctAnswer: 1,
      explanation: "async/await is syntactic sugar over Promises, making asynchronous code easier to read and write. 'async' declares an async function, 'await' pauses execution until a Promise resolves."
    },
    {
      id: 20,
      question: "What will this code return?",
      code: "const arr = [1, 2, 3, 4, 5];\narr.filter(x => x > 2).map(x => x * 2);",
      options: ["[6, 8, 10]", "[2, 4, 6, 8, 10]", "[3, 4, 5]", "[1, 2]"],
      correctAnswer: 0,
      explanation: "filter(x => x > 2) returns [3, 4, 5]. Then map(x => x * 2) doubles each: [6, 8, 10]. Method chaining allows multiple array operations in one expression."
    },
    {
      id: 21,
      question: "What is the event loop?",
      options: ["A loop that runs forever", "A mechanism handling async callbacks", "A type of for loop", "An error handler"],
      correctAnswer: 1,
      explanation: "The event loop is JavaScript's runtime model for handling asynchronous operations. It continuously checks the call stack and callback queue, pushing callbacks to the stack when it's empty."
    },
    {
      id: 22,
      question: "What does Object.keys() return?",
      options: ["Object values", "Array of property names", "Number of properties", "Boolean"],
      correctAnswer: 1,
      explanation: "Object.keys() returns an array of a given object's own enumerable property names. Object.values() returns values, and Object.entries() returns [key, value] pairs."
    },
    {
      id: 23,
      question: "What is the output?",
      code: "console.log('5' - 3);",
      options: ["'53'", "2", "'2'", "NaN"],
      correctAnswer: 1,
      explanation: "Unlike +, the - operator only works with numbers, so JavaScript converts '5' to 5. Then 5 - 3 = 2. This is implicit type coercion at work."
    },
    {
      id: 24,
      question: "What is a callback function?",
      options: ["A function that calls itself", "A function passed as an argument", "A function that returns another function", "A built-in JavaScript function"],
      correctAnswer: 1,
      explanation: "A callback is a function passed to another function as an argument, which is then invoked inside the outer function. Callbacks are fundamental for async programming and event handling."
    },
    {
      id: 25,
      question: "What does the 'new' keyword do?",
      options: ["Creates a new variable", "Creates an instance of an object", "Imports a module", "Declares a constant"],
      correctAnswer: 1,
      explanation: "The 'new' keyword creates an instance of an object from a constructor function. It creates a new object, sets the prototype, binds 'this' to the new object, and returns it."
    },
    {
      id: 26,
      question: "What is the output?",
      code: "console.log([1, 2, 3].includes(2));",
      options: ["true", "false", "2", "1"],
      correctAnswer: 0,
      explanation: "The includes() method determines whether an array contains a specified value, returning true or false. It's simpler than indexOf() when you just need to check existence."
    },
    {
      id: 27,
      question: "What is a higher-order function?",
      options: ["A function defined at the top of a file", "A function that takes/returns functions", "A function with many parameters", "An async function"],
      correctAnswer: 1,
      explanation: "A higher-order function either takes one or more functions as arguments, returns a function, or both. Examples: map, filter, reduce. They enable functional programming patterns."
    },
    {
      id: 28,
      question: "What is the prototype chain?",
      options: ["A linked list", "Inheritance mechanism for objects", "A way to chain methods", "Array of prototypes"],
      correctAnswer: 1,
      explanation: "The prototype chain is JavaScript's inheritance mechanism. When accessing a property, JavaScript looks up the chain of prototypes until it finds the property or reaches null."
    },
    {
      id: 29,
      question: "What does setTimeout return?",
      options: ["undefined", "The callback result", "A timer ID", "A Promise"],
      correctAnswer: 2,
      explanation: "setTimeout returns a numeric timer ID that can be used with clearTimeout() to cancel the scheduled callback. It doesn't return the result of the callback function."
    },
    {
      id: 30,
      question: "What is the output?",
      code: "const obj = { a: 1 };\nObject.freeze(obj);\nobj.b = 2;\nconsole.log(obj.b);",
      options: ["2", "undefined", "null", "Error"],
      correctAnswer: 1,
      explanation: "Object.freeze() prevents modifications to an object. In non-strict mode, adding obj.b silently fails (no error, but property isn't added). In strict mode, it would throw an error."
    }
  ],
  hard: [
    {
      id: 1,
      question: "What is the output of this code?",
      code: "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\na[b] = 123;\na[c] = 456;\nconsole.log(a[b]);",
      options: ["123", "456", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "When objects are used as keys, they're converted to strings. Both b and c become '[object Object]'. So a[b] and a[c] reference the same property, and the second assignment overwrites the first."
    },
    {
      id: 2,
      question: "What does this Promise code output?",
      code: "Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw new Error('error') })\n  .catch(e => 1)\n  .then(x => x + 1)\n  .then(x => console.log(x));",
      options: ["1", "2", "3", "Error"],
      correctAnswer: 1,
      explanation: "The promise resolves to 1, becomes 2 after first then, throws error (caught by catch which returns 1), then 1+1=2. The catch() returns a resolved promise with value 1, allowing the chain to continue."
    },
    {
      id: 3,
      question: "What is the output?",
      code: "console.log(typeof typeof 1);",
      options: ["'number'", "'string'", "1", "undefined"],
      correctAnswer: 1,
      explanation: "typeof 1 returns 'number' (a string). typeof 'number' returns 'string'. So typeof typeof 1 is 'string'. The typeof operator always returns a string."
    },
    {
      id: 4,
      question: "What happens with this code?",
      code: "(function() {\n  var a = b = 5;\n})();\nconsole.log(b);",
      options: ["5", "undefined", "ReferenceError", "null"],
      correctAnswer: 0,
      explanation: "This is a common gotcha. 'var a = b = 5' is equivalent to 'b = 5; var a = b;'. Since 'b' is not declared with var, it becomes a global variable. Outside the function, b is accessible and equals 5."
    },
    {
      id: 5,
      question: "What is the output?",
      code: "const obj = {\n  a: 'foo',\n  b: function() { console.log(this.a) }\n};\nconst c = obj.b;\nc();",
      options: ["'foo'", "undefined", "null", "Error"],
      correctAnswer: 1,
      explanation: "When c() is called, 'this' refers to the global object (or undefined in strict mode), not obj. The method loses its context when assigned to a variable. Use .bind(obj) or arrow functions to preserve 'this'."
    },
    {
      id: 6,
      question: "What does this generator yield?",
      code: "function* gen() {\n  yield 1;\n  yield 2;\n  return 3;\n}\nconst g = gen();\nconsole.log([...g]);",
      options: ["[1, 2, 3]", "[1, 2]", "[1]", "Error"],
      correctAnswer: 1,
      explanation: "The spread operator iterates until done is true. 'return 3' sets done to true but the returned value is not included in iteration. Only yielded values (1, 2) are spread into the array."
    },
    {
      id: 7,
      question: "What is the output?",
      code: "const arr = [10, 12, 15, 21];\nfor (var i = 0; i < arr.length; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
      options: ["0, 1, 2, 3", "10, 12, 15, 21", "4, 4, 4, 4", "undefined, undefined, undefined, undefined"],
      correctAnswer: 2,
      explanation: "var is function-scoped, so all callbacks share the same i. By the time the callbacks execute, the loop has finished and i is 4. Use 'let' instead of 'var' to get 0, 1, 2, 3."
    },
    {
      id: 8,
      question: "What is the output?",
      code: "console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);",
      options: ["true, true", "true, false", "false, true", "false, false"],
      correctAnswer: 1,
      explanation: "1 < 2 is true, true < 3 converts true to 1, 1 < 3 is true. For 3 > 2 > 1: 3 > 2 is true, true > 1 converts true to 1, 1 > 1 is false. Comparisons are evaluated left to right."
    },
    {
      id: 9,
      question: "What does this WeakMap feature enable?",
      code: "const wm = new WeakMap();",
      options: ["Faster lookups", "Keys can be garbage collected", "Infinite storage", "String keys only"],
      correctAnswer: 1,
      explanation: "WeakMap holds weak references to its keys (which must be objects). If there are no other references to a key object, it can be garbage collected even if it's in the WeakMap. This prevents memory leaks."
    },
    {
      id: 10,
      question: "What is the output?",
      code: "console.log(+'2' + +'3' === 5);",
      options: ["true", "false", "'23'", "Error"],
      correctAnswer: 0,
      explanation: "The unary + operator converts strings to numbers. +'2' is 2, +'3' is 3. So 2 + 3 === 5 is true. This is a common trick for quick string-to-number conversion."
    },
    {
      id: 11,
      question: "What is the output?",
      code: "let x = 1;\nswitch(x) {\n  case 1:\n  case 2:\n    console.log('A');\n  default:\n    console.log('B');\n}",
      options: ["A", "B", "A B", "Error"],
      correctAnswer: 2,
      explanation: "Without 'break' statements, switch cases fall through. x matches case 1, executes 'A', then falls through to default and executes 'B'. Always use break unless intentional fall-through."
    },
    {
      id: 12,
      question: "What is printed?",
      code: "const a = [1, 2, 3];\nconst b = [1, 2, 3];\nconsole.log(a == b, a === b);",
      options: ["true, true", "true, false", "false, false", "false, true"],
      correctAnswer: 2,
      explanation: "Arrays are objects, and objects are compared by reference, not value. a and b are different objects in memory, so both == and === return false, even though they contain the same values."
    },
    {
      id: 13,
      question: "What is the purpose of Symbol in JavaScript?",
      options: ["To create strings", "To create unique identifiers", "To define numbers", "To create arrays"],
      correctAnswer: 1,
      explanation: "Symbols are unique, immutable primitive values used as object keys. Every Symbol() call creates a unique symbol. They're useful for adding properties without risking name collisions."
    },
    {
      id: 14,
      question: "What is the output?",
      code: "const x = new Boolean(false);\nif (x) {\n  console.log('truthy');\n} else {\n  console.log('falsy');\n}",
      options: ["truthy", "falsy", "undefined", "Error"],
      correctAnswer: 0,
      explanation: "new Boolean(false) creates an object wrapper, not a primitive. All objects are truthy in JavaScript, even if they wrap a falsy value. Use Boolean(false) without 'new' for the primitive."
    },
    {
      id: 15,
      question: "What does this code demonstrate?",
      code: "function Foo() {\n  return this;\n}\nFoo.prototype.bar = 'hello';\nconsole.log(Foo().bar);",
      options: ["'hello'", "undefined", "Error", "null"],
      correctAnswer: 1,
      explanation: "When called without 'new', 'this' refers to the global object (or undefined in strict mode). The global object doesn't have 'bar' property. With 'new Foo()', it would work correctly."
    },
    {
      id: 16,
      question: "What is the output?",
      code: "console.log(\n  Math.max() < Math.min()\n);",
      options: ["true", "false", "Error", "NaN"],
      correctAnswer: 0,
      explanation: "Math.max() with no arguments returns -Infinity, Math.min() with no arguments returns Infinity. -Infinity < Infinity is true. These are the identity values for max/min operations."
    },
    {
      id: 17,
      question: "What happens with this code?",
      code: "const obj = { a: 1 };\nObject.defineProperty(obj, 'b', {\n  value: 2,\n  writable: false\n});\nobj.b = 3;\nconsole.log(obj.b);",
      options: ["3", "2", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "defineProperty with writable: false makes the property read-only. In non-strict mode, the assignment silently fails. In strict mode, it would throw a TypeError."
    },
    {
      id: 18,
      question: "What is the output?",
      code: "console.log([,,,].length);",
      options: ["0", "3", "4", "undefined"],
      correctAnswer: 1,
      explanation: "The array [,,,] has 3 empty slots (trailing comma doesn't add an element). Array length is the highest index + 1. Empty slots are different from undefined - they're truly empty."
    },
    {
      id: 19,
      question: "What does this Proxy do?",
      code: "const handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 'default'\n};\nconst p = new Proxy({}, handler);\nconsole.log(p.anything);",
      options: ["undefined", "'anything'", "'default'", "Error"],
      correctAnswer: 2,
      explanation: "A Proxy can intercept operations on an object. The get trap intercepts property access. Since 'anything' isn't in the empty object, it returns 'default'. Proxies enable metaprogramming."
    },
    {
      id: 20,
      question: "What is the output?",
      code: "async function foo() {\n  return 1;\n}\nconsole.log(foo() instanceof Promise);",
      options: ["true", "false", "1", "Error"],
      correctAnswer: 0,
      explanation: "async functions always return a Promise. Even if you return a plain value, it's automatically wrapped in a resolved Promise. foo() returns Promise.resolve(1), which is a Promise instance."
    },
    {
      id: 21,
      question: "What is the output?",
      code: "const a = { b: 1 };\nconst c = Object.assign({}, a);\nc.b = 2;\nconsole.log(a.b);",
      options: ["1", "2", "undefined", "Error"],
      correctAnswer: 0,
      explanation: "Object.assign creates a shallow copy. Since b is a primitive (number), it's copied by value. Changes to c.b don't affect a.b. However, nested objects would still share references."
    },
    {
      id: 22,
      question: "What concept does this illustrate?",
      code: "function outer() {\n  let count = 0;\n  return function inner() {\n    return ++count;\n  };\n}\nconst counter = outer();\nconsole.log(counter(), counter());",
      options: ["1, 1", "1, 2", "0, 1", "undefined, undefined"],
      correctAnswer: 1,
      explanation: "This is a closure creating private state. inner() has access to count in outer's scope. Each call increments the same count variable because it's closed over. This is a common pattern for encapsulation."
    },
    {
      id: 23,
      question: "What is the output?",
      code: "console.log([] + {});",
      options: ["'[object Object]'", "'{}'", "NaN", "Error"],
      correctAnswer: 0,
      explanation: "When + is used with non-numbers, JavaScript converts operands to primitives. [] becomes '' (empty string), {} becomes '[object Object]'. String concatenation: '' + '[object Object]' = '[object Object]'."
    },
    {
      id: 24,
      question: "What does this code output?",
      code: "const fn = (a, b = a * 2) => a + b;\nconsole.log(fn(2));",
      options: ["4", "6", "NaN", "Error"],
      correctAnswer: 1,
      explanation: "Default parameters can reference previous parameters. b defaults to a * 2. When fn(2) is called, a=2, b=2*2=4, so the result is 2+4=6."
    },
    {
      id: 25,
      question: "What is the output?",
      code: "const arr = [1, 2, 3];\narr.length = 0;\nconsole.log(arr);",
      options: ["[1, 2, 3]", "[]", "undefined", "Error"],
      correctAnswer: 1,
      explanation: "Setting array.length to a smaller value truncates the array. Setting it to 0 removes all elements. This is a quick way to empty an array while keeping the same reference."
    },
    {
      id: 26,
      question: "What is the output?",
      code: "console.log(String.raw`Hello\\nWorld`);",
      options: ["Hello\\nWorld", "Hello\nWorld", "HelloWorld", "Error"],
      correctAnswer: 0,
      explanation: "String.raw returns a raw string where escape sequences are not processed. \\n is kept as literal backslash-n, not converted to a newline. Useful for regex and file paths."
    },
    {
      id: 27,
      question: "What is the output?",
      code: "const a = [1, 2, 3];\nconst b = a.splice(1, 1, 4, 5);\nconsole.log(a, b);",
      options: ["[1, 4, 5, 3], [2]", "[2], [1, 4, 5, 3]", "[1, 2, 3], [4, 5]", "Error"],
      correctAnswer: 0,
      explanation: "splice(1, 1, 4, 5) removes 1 element at index 1, and inserts 4, 5. It returns removed elements [2]. The original array becomes [1, 4, 5, 3]. splice modifies the original array."
    },
    {
      id: 28,
      question: "What does this code demonstrate?",
      code: "function* idGen() {\n  let id = 0;\n  while(true) yield id++;\n}\nconst gen = idGen();\nconsole.log(gen.next().value, gen.next().value);",
      options: ["0, 0", "0, 1", "1, 2", "undefined, undefined"],
      correctAnswer: 1,
      explanation: "Generators maintain their state between calls. Each next() resumes from where it paused (at yield). First call yields 0 (then increments to 1), second yields 1 (then increments to 2)."
    },
    {
      id: 29,
      question: "What is the output?",
      code: "const obj = {\n  name: 'obj',\n  greet: () => console.log(this.name)\n};\nobj.greet();",
      options: ["'obj'", "undefined", "''", "Error"],
      correctAnswer: 1,
      explanation: "Arrow functions don't have their own 'this'. They inherit 'this' from the enclosing scope (in this case, the global scope or module scope). Arrow functions shouldn't be used as object methods when you need 'this'."
    },
    {
      id: 30,
      question: "What is the output?",
      code: "const p1 = Promise.resolve('resolved');\nconst p2 = new Promise(r => setTimeout(r, 100, 'timeout'));\nPromise.race([p1, p2]).then(console.log);",
      options: ["'resolved'", "'timeout'", "['resolved', 'timeout']", "Error"],
      correctAnswer: 0,
      explanation: "Promise.race returns a promise that resolves/rejects as soon as the first promise settles. p1 is already resolved, so it wins the race immediately. p2 with setTimeout never gets a chance to resolve first."
    }
  ]
};

export const getQuestions = (level: 'easy' | 'medium' | 'hard', count: 10 | 20 | 30): Question[] => {
  const questions = quizQuestions[level];
  return questions.slice(0, count);
};
