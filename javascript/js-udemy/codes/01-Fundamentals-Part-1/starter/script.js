/*
//Lecture: values and variables
const countryCN = "China";
const continentCN = "Asia";
let polulationCN = "1.4 billion";

console.log(countryCN + " is in " + continentCN + " which has " + polulationCN + " people.");
*/

/*
//data type
console.log(typeof true);

console.log(typeof null);

const isIsLand = false;
let language;
console.log(isIsLand);
console.log(polulationCN);
console.log(countryCN);
console.log(language);
*/

//let, const, and var
// const languageCN = "Chinese";


//basic operators
// console.log(2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const halfPopulation = 1.4 / 2;
// const plusOnePopulation = 1400000000 + 1;
// const comparePupulationFinland = 1400000000 > 6000000;
// const compareAverage = plusOnePopulation > 330000000;
// const description = "Portugal is in Eurpe, and its 11 million people speak portuguese.";


/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/* Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn ? BMIMark : BMIJohn;
// console.log(markHigherBMI);


//string and Tempalte Literals
// const firstName = "Jian";
// const job = "programmer";
// const birthYear = 1989;
// const year = 2037;

// const description = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(description);

// console.log(`just a regular string`);

// console.log("string with \n\
// multiple \n\
// lines");

// console.log(`string with
// multiple
// lines`);
// const countryCN = "China";
// const continentCN = "Asia";
// let populationCN = "1.4 billion";

// console.log(`${countryCN} is in ${continentCN}, which has ${populationCN} people and they speak Chinese`);


//taking decision: if / else statements
// const age = 17;
// if(age >= 18) {
// 	console.log("Sarah can start driving license 👍");
// }
// else {
// 	console.log("Sarh can not start driving license 🤦‍♂️")
// }




//Type Conversion and Coercion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 10);
// console.log(Number("JJ"));
// console.log(typeof NaN);

// console.log(String(23));

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log('19' - '13' + 17); //23
// console.log('123' < 57); //false
// console.log(5 + 6 +'4' + 9 - 4 -2); //1143


//Truthy and Falsy values
//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('JJ')); //string
// console.log(Boolean({})); //object
// console.log(Boolean('')); //

// const age = 18;
// if (age == '18')
// 	console.log("you just become an adult :D (loose)");

// if(age === 18)
// 	console.log("you just become an adult (strict)");

// const favourite = prompt("what is your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
// 'use strict';
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if(numNeighbours === 1){
// 	console.log("Only 1 border! 🤣");
// }
// else if(numNeighbours >= 1 ){
// 	console.log("More than 1 border");
// }
// else {
// 	console.log("No borders");
// }


// const isLand = false;
// const countryCN = "China";
// const continentCN = "Asia";
// const populationCN = 1400;
// const language = "Chinese";`

// if(language === "English" && populationCN < 50 && !isLand){
// 	console.log("You should live in here");
// }
// else {
// 	console.log("China does not meet your criteria");
// }


const bill = 430;

/* Write your code below. Good luck! 🙂 */

let tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);