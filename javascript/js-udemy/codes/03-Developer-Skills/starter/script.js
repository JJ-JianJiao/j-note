// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const xaaa = "23";

// const calcAge = birtyYear => 2037 - birtyYear;

// console.log("haha");
// console.log("yadadadadadadadadadadxsasaadaeah");

// const measureKelvin = function () {
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         value: Number(prompt("degrees celsius:")),
//     };

//     // console.table(measurement);
//     return measurement.value + 273;
// };

// console.log(measureKelvin());


// const calcTemAmplituDebug = function(t1,t2){
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 1; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if(typeof currentTemp !== "number") 
//             continue;
//         max = max > currentTemp ? max : currentTemp;
//         min = min < currentTemp ? min : currentTemp;
//     }
    
//     console.log(max, min);
//     return max - min;
// }


// const amplitudeBug = calcTemAmplituDebug([3,5,1], [9,4,5]);

const printForecast = function (arr) {  
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}ºC in ${i+1} days `;
    }
    console.log(str + "...");
}

const testData = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
printForecast(testData);
printForecast(testData2);

