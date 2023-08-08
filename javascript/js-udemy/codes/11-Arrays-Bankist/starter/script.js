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

///////////////////////////////////////
// Coding Challenge #1

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

//Test data
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

//Test data 2
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctArr = function (dogs, start = 0, end = dogs.length) {
    const arr = dogs.slice(start, end);
    return arr;
  }
  //1.
  const correctJulia = correctArr(dogsJulia, 1, -2);
  console.log(correctJulia);
  console.log(dogsJulia);
  //2.
  const combineDogs = correctJulia.concat(dogsKate);
  console.log(combineDogs);
  // console.log([...correctJulia, ...dogsKate]);
  const displayResult = function (arr) {
    arr.forEach(function (dogAge, i) {
      if (dogAge >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
      }
      else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    })
  }
  displayResult(correctJulia);
  displayResult(dogsKate);
}
checkDogs(dogsJulia, dogsKate);





