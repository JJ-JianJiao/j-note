'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//display the movments in the containerMovements block
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (movement, i) {
    //Method 1: using document.createElement() and append()
    // const movementRow = document.createElement("div");
    // movementRow.classList.add("movements__row");
    // const movementType = document.createElement('div');
    // movementType.classList.add("movements__type");
    // if (movement > 0) {
    //   movementType.classList.add("movements__type--deposit");
    //   movementType.textContent = `${i + 1} DEPOSIT`;
    // }
    // else {
    //   movementType.classList.add("movements__type--withdrawal");
    //   movementType.textContent = `${i + 1} WITHDRAWAL`;
    // }

    // const movementDate = document.createElement('div');
    // movementDate.classList.add("movements__date");
    // movementDate.textContent = `24/01/2037`;
    // const movementValue = document.createElement('div');
    // movementValue.classList.add("movements__value");
    // movementValue.textContent = movement;
    // movementRow.append(movementType);
    // movementRow.append(movementDate);
    // movementRow.append(movementDate);
    // movementRow.append(movementValue);
    // containerMovements.insertBefore(movementRow, containerMovements.firstChild);

    //Method 2: using html content
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class= "movements__date" > 3 days ago</div >
        <div class="movements__value">${movement}€</div>
      </div >
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
const init = function () {
  // while (containerMovements.firstChild) {
  //   containerMovements.firstChild.remove();
  // }
  containerMovements.innerHTML = "";
}
// init();
displayMovements(account1.movements);

//create username property in each account object
const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner.toLowerCase().split(' ').map(value => value.at(0)).join("");
  });
}
createUsernames(accounts);
// console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc += mov, 0);
  labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);

//display summary
const calcDisplaySummary = function (movements) {
  const summaryIn = movements
    .filter(mov => mov > 0)
    .reduce((preMov, curMov) => preMov + curMov, 0);
  labelSumIn.textContent = `${summaryIn}€`;
  const summaryOut = movements
    .filter(mov => mov < 0)
    .reduce((pre, cur) => pre + cur, 0);
  labelSumOut.textContent = `${Math.abs(summaryOut)}€`;
  const intrest = movements
    .filter(mov => mov > 0)
    .map((mov, _, arr) => {
      console.log(arr);
      console.log(mov * account1.interestRate);
      return mov * account1.interestRate;
    })
    .reduce((pre, cur) => pre + cur, 0);
  console.log(intrest);
}
calcDisplaySummary(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
// console.log(arr.slice(2)); //(3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); //(2) ['c', 'd']
// console.log(arr.slice(-2)); //(2) ['d', 'e']
// console.log(arr.slice(-1)); //(2) ['e']
// console.log(arr.slice(1, -2)); //(2) ['b', 'c']
// console.log(arr.slice()); //shallow copy
// console.log([...arr]); //shallow copy

// console.log('------SPLICE--------');
//SPLICE
// console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
// console.log(arr); //(2) ['a', 'b']
// arr.splice(-1);
// console.log(arr);

// arr.splice(1, 2);

// console.log(arr);

//REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //(5) ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); //(5) ['f', 'g', 'h', 'i', 'j']

//CONCAT
// const letters = arr.concat(arr2);
// console.log(letters); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]);

//JOIN
// console.log(letters.join(' - '));

//AT
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

//getting last array element
// console.log(arr.slice(-1)[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// console.log('Jin Jio'.at(0));
// console.log('Jin Jio'.at(-1));

//FOR-OF. FOREACH
// for (const movement of account1.movements) {
// for (const [index, movement] of account1.movements.entries()) {
//   // console.log(index);
//   if (movement > 0) {
//     console.log(`Movement ${ index + 1 }: you deposited ${ movement } `);
//   } else {
//     console.log(`Movement ${ index + 1 }: you withdrew ${ Math.abs(movement) } `);
//   }
// }

// console.log('----------FOREACH----------');
// account1.movements.forEach(function (movement, index, array) {
//   // console.log(this);//undefined
//   // console.log(array);
//   if (movement > 0) {
//     console.log(`Movement ${ index + 1 }: you deposited ${ movement } `);
//   } else {
//     console.log(`Movement ${ index + 1 }: you withdrew ${ Math.abs(movement) } `);
//   }
// });
//

// console.log("-------------FOREACH-MAP-----------");
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${ key }: ${ value } `, map);
// })

// //KEY == value
// console.log("-------------FOREACH-SET-----------");
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR',])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`value: ${ value } `, set)
// })


// console.log("-------------------Map Array ------------------");
// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return (mov * eurToUsd).toFixed(2);
// // });
// const movementsUSD = movements.map(mov => (mov * eurToUsd).toFixed(2)
// );
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDforOf = [];
// for (const mov of movements) {
//   movementsUSDforOf.push((mov * eurToUsd).toFixed(2));
// }
// console.log(movementsUSDforOf);

// const temp = movements.map((move, i) =>
//   `Movement ${i + 1}: you ${move > 0 ? "deposited" : "withdrew"} ${Math.abs(move)}`
// );
// console.log(temp);

///////////////////////////////////////
// Coding Challenge #1
// console.log("-------------------FILTER Array ------------------");
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// })
// console.log(movements);
// console.log(deposits);

// const depositForOf = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositForOf.push(mov);
//   }
// }
// console.log(depositForOf);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// console.log("-------------------REDUCE Array ------------------");
// console.log(movements);
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc += cur;
// // }, 0);
// const balance = movements.reduce((acc, cur) =>
//   acc += cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// const maxBalance = movements.reduce((acc, mov) => {
//   // console.log(acc);
//   if (acc < mov)
//     acc = mov
//   return acc;
// }, movements[0]);
// console.log(maxBalance);

// console.log("-------------------Chaining method Array ------------------");
// const eurToUsd = 1.1;
// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0)
//   .toFixed(2);
// console.log(totalDepositsUSD);
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// //Test data
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// //Test data 2
// // const dogsJulia = [9, 16, 6, 8, 3];
// // const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctArr = function (dogs, start = 0, end = dogs.length) {
//     const arr = dogs.slice(start, end);
//     return arr;
//   }
//   //1.
//   const correctJulia = correctArr(dogsJulia, 1, -2);
//   console.log(correctJulia);
//   console.log(dogsJulia);
//   //2.
//   const combineDogs = correctJulia.concat(dogsKate);
//   console.log(combineDogs);
//   // console.log([...correctJulia, ...dogsKate]);
//   const displayResult = function (arr) {
//     arr.forEach(function (dogAge, i) {
//       if (dogAge >= 3) {
//         console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
//       }
//       else {
//         console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//       }
//     })
//   }
//   displayResult(correctJulia);
//   displayResult(dogsKate);
// }
// checkDogs(dogsJulia, dogsKate);


///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calsAverageHumanAge = function (ages) {
//   console.log(ages.map(function (age) {
//     if (age <= 2)
//       return 2 * age;
//     else
//       return 16 + age * 4;
//   }));
//   console.log(ages.map(function (age) {
//     if (age <= 2)
//       return 2 * age;
//     else
//       return 16 + age * 4;
//   }).filter(age => age >= 18));
//   return ages.map(function (age) {
//     if (age <= 2)
//       return 2 * age;
//     else
//       return 16 + age * 4;
//   }).filter(age => age >= 18).reduce(function (acc, age, _, ages) {
//     return acc + age / ages.length;
//   }, 0)
// }
// console.log(calsAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calsAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

