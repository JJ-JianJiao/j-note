'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }
// if(hasDriversLicense) {
//      console.log('I can drive :)');
// }

// const interface = 'Audio';
// const private = 331;


// functions
// function logger(){
//     console.log('my name is jj');
// }

//calling / running / invoking
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} orranges`;
//     return juice;
// }

// const applceJuice = fruitProcessor(5, 0);
// console.log(applceJuice);

//function declaration
// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }

//function expression
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// console.log(typeof calAge1);
// console.log(typeof calAge2);

//What the different: we can call function declaration before it.

//ES6 => Arrow function
// const calAgeArrowFunc = birthYear => 2037 - birthYear;

// calAgeArrowFunc(1991);

// const yearUntlRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntlRetirement(1989, "Jian"));

//arrow does not have 'this' keyword

//function calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     return `Juice with ${applePieces} apples and ${orangePieces} orranges`;
// }

// console.log(fruitProcessor(2, 3));


// const calAge = birthYear => new Date().getFullYear() - birthYear;

// const retireYearLeft = age => 60 - age;

// const yearUntlRetirement = (birthYear, firstName) => {
//     const age = calAge(birthYear);
//     const retirement = retireYearLeft(age);
//     // return retirement;
//     return retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is already retired.`;
// }

// console.log(yearUntlRetirement(1989, "Jian"));
// console.log(yearUntlRetirement(1950, "Jian Dada"));


/* Write your code below. Good luck! 🙂 */

// const calcAverage = (first, second, third) => (first + second + third) / 3;

// const checkWinner = function(avgDolphions, avgKoalas){
//     if(avgDolphions/avgKoalas >= 2){
//         console.log(`Dolphions win (${avgDolphions} vs. ${avgKoalas})`);
//     }
//     else if(avgKoalas/avgDolphions >= 2){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphions})`);
//     }
//     else{
//         console.log(`No team wins...`);
//     }
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

//const scoreDolphins = calcAverage(85, 54, 41);
//const scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);