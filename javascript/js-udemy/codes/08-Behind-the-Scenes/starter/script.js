'use strict';


//let and const are the block scope variables. var is global variables

// const year = prompt("enter a year");

// function first(){
//     if (year >- 1989 && year <2021) {
//         const millenial = true;
//         const food = "Avocado toast";
//         return false;
//     }
//     return true;
// }
// console.log(first());
// console.log(food);

// const a = "jJ";
// first();
// function first() {  
//     const b = "Hello";
//     second();

//     function second() {  
//         const c = "Hi";
//         third();
//     }
// }

// function third() {
//     const d = "heyD";
//     console.log(d  + c + b + a); //has no access to b and c
// }

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     // console.log(firstName);//firstName is the global variable.
//     function printAge(){
//         const outPut = `${firstName}, Your are ${age}, born in ${birthYear}`;
//         console.log(outPut);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true;
//             const str = `Oh, and you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }

//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2,3)); // if not in the strict mode, it will print 5.
//     }
//     printAge();
//     // console.log(millenial);
//     return age;
// }

// const firstName = "Jian";
// calcAge(1989);
// console.log(millenial);


//variables
// console.log(me);
// // console.log(job); // Cannot access 'job' before initializatio
// // console.log(year); //Cannot access 'year' before initialization

// var me = 'jian';
// let job = 'programmer';
// const year = 1989;


// console.log(addDecl(2,3));
// // console.log(addExpr);
// console.log(addExpr(2,3)); //Cannot access 'addExpr' before initialization
// //if addExpr and addArrow are var : addExpr is not a function
// // console.log(addArrow(2,3));

// //fucntions
// function addDecl(a,b) {
//     return a + b;
// }

// var addExpr = function (a, b) {  
//     return a+b;
// }

// const addArrow = (a, b) => a + b;


//Example not use var
// if(!numProducts) deleteShoppingCart();

// let numProducts = 10;

// function deleteShoppingCart() {
//     console.log("All products deleted!");
// }


// var x = 1;
// // will not create property in window object
// let y = 2; 
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAge(1989);

// const calcAgeArrow =  (birthYear) => {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAgeArrow(1989);

// const jian = {
//     year: 1989,
//     calcAge : function (birthYear) {
//         console.log(this);
//     }
// }

// jian.calcAge();

// const seb = {
//     year: 2017
// }

// seb.calcAge = jian.calcAge; //mathod borrowing
// seb.calcAge();

// const f = jian.calcAge;
// f();

// var firstName = "Seb";

// const jian = {
//     firstName: 'Jian',
//     year: 1989,
//     calcAge : function (birthYear) {
//         // console.log(this);
//         console.log(2037 - this.year);

//         //self solution: before ES6
//         // const self = this;
//         // const isMillenial = function(){
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // }
//         // isMillenial();

//         //modern ES6:
//         const isMillenial = () =>{
//             console.log(this);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         }
//         isMillenial();

//         // const isMillenial = function(){
//         //     console.log(this.year >= 1981 && this.year <= 1996); //Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//         //     //how to solve this? set a const self = this, and use self in the function.
//         // }
//         // isMillenial();
//     },
//     greet:() => console.log(`Hey ${this.firstName}`)
// }

// jian.greet(); //Hey undefined, whichi will use the global scope.
// console.log(this.firstName);//undefined,
// jian.calcAge();




//arguments keyword
// var addExpr = function (a, b) {  
//     console.log(arguments);
//     return a+b;
// }
// addExpr(2,5);
// addExpr(2,5, 9, 8);
// console.log( addExpr(2,5, 9, 8));
// const addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b
// };
// addArrow(2,3,4); //Uncaught ReferenceError: arguments is not defined


//Primitives and objects in Memory
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: "jian",
//     age:30
// }

// const friend = me;
// friend.age = 27;
// console.log(friend);
// console.log(me);

//primitive types
let lastName = "will";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

//reference type
const jess = {
    firstName : "Jessica",
    lastName:"Williams",
    age:27
}
const marriedJessica = jess;
marriedJessica.lastName = 'Davis';
console.log("before marriage", jess);
console.log("after marriage", marriedJessica);

// marriedJessica = {};

//copying objects
const jess2 = {
    firstName : "Jessica",
    lastName:"Williams",
    age:27,
    family:["Jian","Seb"]
}


//object.assign will work for the first-level. means, if the object has nested object, which will still point to the same place in memory. (Shallow copy)
const jessciaCopy = Object.assign({}, jess2);
jessciaCopy.lastName = "Davis";
jessciaCopy.family.push("haha");
console.log("before marriage", jess2);
console.log("after marriage", jessciaCopy);


