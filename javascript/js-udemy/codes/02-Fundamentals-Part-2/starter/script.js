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


//Array
// const friends = ['F1', 'F2', 'F3'];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "new F2";
// console.log(friends);

// const jj = ['jian', 'jiao', 2037 - 1989, 'programmer', friends];
// console.log(jj);

//Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1989, 1967, 2022, 2021, 2018];

// const friends = ['F1', 'F2', 'F3'];
// friends.push('Jay');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.unshift('F0');
// console.log(friends);
// friends.shift();
// console.log(friends);

// const years = [1989, 1967, 2022, 2021, 2018];
// console.log(years.pop());

// console.log(years.indexOf(2021));

// console.log(years.includes(1694));
// console.log(years.includes(1967));

/* Write your code below. Good luck! 🙂 */

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300)
//         return bill * 0.15;
//     else
//         return bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }

// console.log(tips);
// console.log(totals);

//Objects
// const JJArray = [
//     'Jian',
//     'Jiao',
//     2037 - 1989,
//     'developer',
//     ['F1', 'F2', 'F3']
// ]

// const JJObj = {
//     firstName: 'Jian',
//     lastName: 'Jiao',
//     birthYear: 1989,
//     job: 'developer',
//     friends: ['F1', 'F2', 'F3'],
//     hasDriverLicense: true,

//     //function
//     // calAge: function (birthYear = this.age) {
//     //     return 2037 - birthYear;
//     // }
//     calAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     summaryInfo: function () {
//         return `${this.firstName} has ${this.friends.length} friends, and his best firend is called ${this.friends[this.friends.length - 1]}`;
//     }
// };

// JJObj.Baby = 'Seb';
// JJObj['wife'] = "Shirley";

// console.log(JJObj.calAge());
// console.log(JJObj.summaryInfo());

// console.log(JJObj);
// console.log(JJObj.firstName);
// console.log(JJObj['firstName']);
// console.log(JJObj.Baby);
// console.log(JJObj.wife);

// const interactWithUser = prompt('What do you want to know about JJ? Choose between firstName, lastName, age, job, and firends');

// if (JJObj[interactWithUser]) {
//     console.log(JJObj[interactWithUser]);
// }

// console.log(`${JJObj.firstName} has ${JJObj.friends.length} friends, and his best firend is called ${JJObj.friends[JJObj.friends.length - 1]}`);
// const mark = {
//     fullName: 'Mark',
//     mass: 78,
//     height: 1.69,

//     //Function
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
//     summary: function () {
//         return `${this.fullName}'s BMI (${this.bmi})`;
//     }
// }

// const john = {
//     fullName: 'John',
//     mass: 92,
//     height: 1.95,

//     //Function
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
//     summary: function () {
//         return `${this.fullName}'s BMI (${this.bmi})`;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// if (mark.bmi > john.bmi) {
//     console.log(mark.summary() + " is higher than " + john.summary());
// } else {
//     console.log(john.summary() + " is higher than " + mark.summary());
// }