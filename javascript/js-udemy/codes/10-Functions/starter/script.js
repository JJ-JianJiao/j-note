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
const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book,
};

lufthansa.book(999, 'Jian');
lufthansa.book(345, 'John');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurrowngs',
  iataCode: 'EW',
  bookings: [],
};

// book(23, 'Seb'); //Uncaught TypeError: Cannot read properties of undefined (reading 'airline')

//Call method
book.call(eurowings, 23, 'Seb');
book.call(lufthansa, 59, 'Qin');

const swiss = {
  airline: 'Swiss Air line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 584, 'marry');
console.log(swiss);

//Apply method
const flightData = [584, 'Xianfa'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
