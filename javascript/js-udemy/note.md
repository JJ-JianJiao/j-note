# Course

## set up

1. Theme: Monokai Pro
2. Settings:
   > Auto Save: onFocusChange  
   > Word Wrap: On  
   > Format On Save: enable
3. online Diagrams tool: https://www.drawio.com/

## Note JS

1. Prettier - Code formatter  
   Go to Settings, search "default formatter", and select the "esbenp prettier - vs code" option. Then,Enable format on save.

2. JavaScript is a high-level, object-oriented, muulti-paradigm programming language.
   - high-level: we do not have to worry about complex stuff like memory management.
   - object-oriented: based on objects, for storing most kinds of data
   - multi-paradigm: use different styles of programming. ex: imperative and declarative programming.
3. html - nouns, css - adjectives, js - verbs
4. declare: 声明
5. value:
   1. Object
   2. Primitive
      - number: floaing point numbers `let age = 23;`
      - string: sequene of characters `let firstName = 'Jonas';`
      - boolean: logical type that can only be true or false `let fullAge = true;`
      - undefind: value taken by a variable that is not yet defined ('empty value') `let children;`
      - null: also means 'empty value'
      - symbol(ES2015): value that is unique and cannot be changed [not sueful for now]
      - Bigint(ES2020): larger integers than the Number type can hold
        > !important: Javascript has dynamic typing: we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
6. let and const are introduced in ES6.
7. quotation mark: ', ". Backticks: `.
8. 5 falsy values: 0, '', undefined, null, NaN
9. arrow does not have 'this' keyword
10. What the different: we can call function declaration before it.
11. DOM and DOM methods are Web API.
12. JavaScript is a high-level, prototype-based object-oriented, mutil-paradigm, interpereted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

## High-level Overview JavaScript

1. high-level: like C language has to manage resources manually.
2. prototype-based object-oriented
3. multi-paradigm (多范式): Paradigm (an approach and mindset of structuring code, which will direct your coding style and technique). The three popular paradigms are: 1. procedural programming, 2. Object-oriented programming (OOP) 3. Functional programming (FP)
   > imperative vs declarative
4. interpreted (解释性) or just-in-time (及时) compiled: compile
5. dynamic: means dynamically-typed. 1. No data type definitions. Types becomes known at runtime. 2. Data type of variable is automatically changed.
6. single-threaded
7. garbage-collected: an algorithm inside the JavaScript engin which automatically removes old, unused objects from memory.
8. first-class functions: means the functions are treated as regualr variables. (pass function or return function)
9. event loop concurrency model: concurrency model(并发模型: how the JavaScript engine handles multiple tasks happening at the same time). Concurrency model ---> why do we need this? --> JS is a single thread --> So what about a long-runing task? --> we want non-blocking behavior --> how do we achieve that? --> by using an event loop: takes long runing task, excutes them in the "background", and puts them back in the main thread nonce they are finished.
10. JavaScript engine: excuting JavaScript code is what an engine does. Most popular JS engine is Google V8/Node.JS.
11. JavaScript engine has **CALL STACK** and **HEAP**.
12. CALL STACK is where code is executed using excution context.
13. HEAP stores objects in memory.
14. Compilation: Entire code is converted into machine code at onece, and written to a binary file that can be executed by a computer.
    > > Source code -> step1 Compilation -> Protable file: machine code -> step2 execution -> program running
15. interpretation: interpreter runs through the source code and excutes it line by line.
    > > Source code -> step1 Execution line by line (code still needs to be coverted to machine code) -> program running
16. Just-in-time(JIT) complilation: Entire code is converted into machine code at once, then executed immediately.
    > > Source code -> step1 compilation -> Machine code (not a portable file) -> step2 execution (happens immediately) -> program running
17. JS Engine work process: JS code -> Parsing (generate AST) -> Compilation (Use AST and compiles it into machine code) -> execution -> Optimization -> Complilation -> excution (loop)
18. JavaScript runtime in the Browser
19. Global Scope, Function Scrop, and Block Scope(ES6)
20. key word `var` is the function scoped which is not a block scoped.
21. execution context contains three parts: variable environment, scope chain, this keyword.
22. hoisting(吊装): makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
23. Why (TDZ - Temporal dead zone): 1. Make it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided. 2. Makes const variables actually work.
24. Why Hoisting? 1. using functions before actual declaration 2. var hoisting is just a byproduct.
25. this keyword/variable: special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.
    > > this is **not** Static. It depends on how the function is called, and its value is only assigned when the function is actually called.
26. primitives: number, string, boolean, undefined, null, symbol, bigint. Objects: object literal, arrays, functions, many more..
27. closure: https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
