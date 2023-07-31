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

const a = "jJ";
first();
function first() {  
    const b = "Hello";
    second();

    function second() {  
        const c = "Hi";
        third();
    }
}

function third() {
    const d = "heyD";
    console.log(d  + c + b + a);
}