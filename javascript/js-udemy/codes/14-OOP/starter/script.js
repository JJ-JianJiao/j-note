'use strict';
console.log("--------------Constructure---------");
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never to this
    // this.calsAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const jian = new Person('Jian', 1989);
console.log(jian);

//behind the scene
//1. new {} is created
//2. function is called, this = {}
//3. {} linked to protoType
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jian instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);


//prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jian.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(Person.prototype);
console.log(jian.__proto__);
console.log(jian.__proto__ === Person.prototype);
console.log(jian);

console.log(Person.prototype.isPrototypeOf(jian));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapines';
console.log(jian, matilda);
console.log(jian.species, matilda.species);

console.log(jian.hasOwnProperty('firstName'));
console.log(jian.hasOwnProperty('species'));

// const testA = function () {
//     console.log("this is the test");
// }
// const testB = new testA();
// console.log(testA);
// console.log(testB);

console.log(jian);

console.log("---------Prototype inheritance------");
console.log(jian.__proto__); //Person.prototype
console.log(jian.__proto__.__proto__); //object.prototype
console.log(jian.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 7, 6, 5, 4, 3, 3]; // new Array ==== [....]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype);