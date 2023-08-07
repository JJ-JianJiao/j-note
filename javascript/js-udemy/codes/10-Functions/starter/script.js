'use strict';

/*Default parameters and passing values vs. Reference
 **************
 */
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(bookings);
//   console.log(booking);
// };

// createBooking('LH123');

// const flight = 'LH234';
// const jian = {
//   name: 'Jian Jiao',
//   passport: 4105231989,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 4105231989) {
//     alert('Checked in');
//   } else {
//     alert('wrong passport!');
//   }
// };

// checkIn(flight, jian);
// console.log(flight);
// console.log(jian);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jian);
// console.log(jian);
// checkIn(flight, jian);

/*First-class and higher-order functiions
 **************
 */
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

//higher-order function
// const transformer = function (str, fn) {
//   console.log(str);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Trahnsfomred by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jian', 'Xueyan', 'Haha'].forEach(high5);

/*functions return functions - closures
 **************
 */
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jian');
// greeterHey('Seb');

// greet('Hello')('Xueyan');
// greet('hi')('Jian');

/* The call and apply methods
 **************
 */
// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book,
// };

// lufthansa.book(999, 'Jian');
// lufthansa.book(345, 'John');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurrowngs',
//   iataCode: 'EW',
//   bookings: [],
// };

// book(23, 'Seb'); //Uncaught TypeError: Cannot read properties of undefined (reading 'airline')

//Call method
// book.call(eurowings, 23, 'Seb');
// book.call(lufthansa, 59, 'Qin');

// const swiss = {
//   airline: 'Swiss Air line',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 584, 'marry');
// console.log(swiss);

//Apply method
// const flightData = [584, 'Xianfa'];
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData);

/* bind
 ***********
 */
// const bookEW = book.bind(eurowings);
// const bookLU = book.bind(lufthansa);
// const bookSW = book.bind(swiss);
// bookEW(23, 'JianJiao');
// bookLU(23, 'JianJiao');
// bookSW(23, 'JianJiao');
// console.log(eurowings);
// console.log(lufthansa);
// console.log(swiss);

// const bookEW23 = book.bind(eurowings, 23);
// const bookEW46 = book.bind(eurowings, 46);
// bookEW23('Xueyan');
// bookEW23('Lianye');
// bookEW23('Xianfa');
// bookEW46('Xiaoliu');
// bookEW46('Wangyu');
// console.log(eurowings);

//with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlance = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlance.bind(lufthansa));

//partial application
// const addTax = (rate, value) => value + (value * rate) / 100;
// console.log(addTax(10, 200));

// const addVAT = addTax.bind(null, 15);
// console.log(addVAT(200));

//challenge
// const addVTaxRate = rate => value => value + (value * rate) / 100;
// console.log(addVAT2(200)(15));
// const addVAT2 = addVTaxRate(15);
// console.log(addVAT2(200));

/* Immediately invoked function expressions
 ***********
 */
// const runOnce = function () {
//   console.log('this will never run again!');
// };
// runOnce();

// (function () {
//   console.log('this will never run again!');
// })();

// (() => console.log('this will never run again!'))();

/* closures
 *****
 */
// const secureBooking = function () {
//   let passengercount = 0;

//   return function () {
//     passengercount++;
//     console.log(`${passengercount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// booker();
// console.dir(booker);

/* more closures
 ******
 */

//example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

// //2 example
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`There are  3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`will start borading in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answer: new Array(4).fill(0),
// };
// const displayResults = function (type = 'array') {
//   //   console.log(type);
//   if (type === 'array') {
//     console.log(this.answer);
//   } else if (type === 'string') {
//     console.log(`Poll results are ${this.answer.join(', ')}`);
//   }
// };

// const registerNewAnswer = function () {
//   //display the quesitons
//   let answer = -1;
//   let notQualified = false;
//   do {
//     // answer = prompt(`${this.question}
//     //                 ${this.options[0]}
//     //                 ${this.options[1]}
//     //                 ${this.options[2]}
//     //                 ${this.options[3]}
//     //                 (Write option number)
//     //                 `);
//     answer = prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     );
//     notQualified =
//       answer === '' ||
//       isNaN(answer) ||
//       !(
//         Number(answer) === 0 ||
//         Number(answer) === 1 ||
//         Number(answer) === 2 ||
//         Number(answer) === 3
//       );
//   } while (notQualified);
//   if (answer && !notQualified) {
//     this.answer[Number(answer)]++;
//   }
//   //   console.log(this);
//   displayResults.call(this);
//   displayResults.call(this, 'string');
// };
// const registerNewAnswerPoll = registerNewAnswer.bind(poll);
// registerNewAnswerPoll();

// poll.registerNewAnswer = registerNewAnswer;
// poll.registerNewAnswer();
// console.log(poll);
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// displayResults([5, 2, 3]);
// displayResults([1, 5, 3, 9, 6, 1]);
// displayResults.call({ answer: [5, 2, 3] }, 'string');
// displayResults.call({ answer: [5, 2, 3] });
// displayResults.call({ answer: [1, 5, 3, 9, 6, 1] }, 'string');
// displayResults.call({ answer: [1, 5, 3, 9, 6, 1] });

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
