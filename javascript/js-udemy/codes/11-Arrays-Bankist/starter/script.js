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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, i) {
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
// displayMovements(account1.movements);

//create username property in each account object
const createUsernames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner.toLowerCase().split(' ').map(value => value.at(0)).join("");
  });
}
createUsernames(accounts);
// console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc += mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
}
// calcDisplayBalance(account1.movements);

//display summary
const calcDisplaySummary = function (acc) {
  const summaryIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((preMov, curMov) => preMov + curMov, 0);
  labelSumIn.textContent = `${summaryIn}€`;
  const summaryOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((pre, cur) => pre + cur, 0);
  labelSumOut.textContent = `${Math.abs(summaryOut)}€`;
  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * acc.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((pre, cur) => pre + cur, 0).toFixed(2);
  // console.log(intrest);
  labelSumInterest.textContent = `${intrest}€`;
}
// calcDisplaySummary(account1.movements);

//Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value.toLowerCase());
  // if (currentAccount && inputLoginPin.value.trim().toLowerCase() === currentAccount.pin.toString()) {
  if (currentAccount?.pin.toString() === inputLoginPin.value.trim().toLowerCase()) {
    //display UI
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ").at(0)}`;
    containerApp.classList.add("opacity100-i");

    //clear input fields
    inputLoginPin.blur();
    inputLoginPin.value = "";
    inputLoginUsername.value = "";
    inputLoginUsername.blur();
    loadAppUI(currentAccount);
  }
});

const loadAppUI = function (account) {
  //display summary
  calcDisplaySummary(account);
  //display Balance
  calcDisplayBalance(account);
  //display movements
  displayMovements(account.movements);
}

inputLoginUsername.addEventListener("focus", function () {
  this.setSelectionRange(0, this.value.length);
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => inputTransferTo.value.trim().toLowerCase() === acc.username);
  // console.log(amount, receiverAcc);
  if (receiverAcc && receiverAcc !== currentAccount && amount > 0 && currentAccount.balance >= amount) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    loadAppUI(currentAccount);
    // console.log('Transfer valid');
  }
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value.trim());
  const loanQualified = currentAccount.movements.some(mov => mov >= loanAmount * 0.1);
  if (loanAmount > 0 && loanQualified) {
    console.log("Bank can borrow money to you");
    currentAccount.movements.push(loanAmount);
    loadAppUI(currentAccount);
  }
  inputLoanAmount.value = "";
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && inputClosePin.value === currentAccount.pin.toString()) {
    // console.log("delete");
    const currentAccPositon = accounts.findIndex(acc => acc.username === inputCloseUsername.value.trim());
    accounts.splice(currentAccPositon, 1);
    containerApp.classList.remove("opacity100-i");
    console.log(accounts);
  }
  inputCloseUsername.blur();
  inputCloseUsername.blur();
  inputCloseUsername.value = inputClosePin.value = "";
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
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
// console.log("-------------------Find  method Array ------------------");

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account);

// let accountForof = {};
// for (const acc of accounts) {
//   if (acc.owner === "Jessica Davis") {
//     accountForof = acc;
//     break;
//   }
// }
// console.log(accountForof);

// console.log("-------------------SOME/EVERY   method Array ------------------");
// console.log(movements);

// //EQUALITY
// console.log(movements.includes(-139));
// console.log(movements.includes(-130));

// //CONDITION
// console.log(movements.some(move => move === -130));
// const anyDeposits = movements.some(mov => mov > 1100);
// console.log(anyDeposits);

// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(movements.every(mov => typeof mov === 'number'));
// console.log(account4.movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//ES 2019
// console.log("-------------------Flat/flatmap   method Array ------------------");
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());//[Array(2), 3, 4, Array(2), 7, 8]
// console.log(arrDeep.flat(2));//(8) [1, 2, 3, 4, 5, 6, 7, 8]

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovemtns = accountMovements.flat();
// console.log(allMovemtns);
// // const overalBalance = allMovemtns.reduce((acc, mov) => acc + mov, 0);
// const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => mov + acc);

// console.log(overalBalance);

// //Flatmap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => mov + acc);

// console.log(overalBalance2);
// console.log("-------------------sorting  method Array ------------------");
// //string
// const owners = ['Jonas', 'Zach', 'Amda', 'Mrtha'];
// console.log(owners.sort());
// console.log(owners);

// //number
// console.log(movements);
// // console.log(movements.sort());
// // console.log(movements);

// //return < 0, A,B
// //return >0, B,A
// //ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   else {
//     return -1;
//   }
// });
// movements.sort((a, b) => a - b);
// console.log(movements);
// //desending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// movements.sort((a, b) => b - a);
// console.log(movements);

// console.log("-------------------CREATE/FILL ARRAY   method Array ------------------");
// console.log([1, 2, 3, 4, 5, 6, 7]);
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// console.log(new Array(3, 3));
// const x = new Array(7);
// console.log(x);
// x.fill(1, 1, 3);
// console.log(x);
// console.log(arr);
// arr.fill(99, 3, 6);
// console.log(arr);

// //Array.from
// const arrFrom = Array.from({ length: 7 }, () => 1);
// console.log(arrFrom);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const randomDiceRolls = Array.from({ length: 10000 }, () => Math.trunc(Math.random() * 6 + 1))
// // console.log(randomDiceRolls);

// labelBalance.addEventListener('click', function () {
//   console.log(document.querySelectorAll(".movements__value"));
//   const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
//   console.log(movementsUI);
//   movementsUI.map(el => el.textContent.replace("€", "💥"));
//   console.log(movementsUI.map(el => el.textContent.replace("€", "💥")));

//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
//   console.log(movementsUI2);
// })

// console.log("-------------------Array Methods practice------------------");
// //1.calculate how much has been deposited in total in the bank.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// //2. count how many deposits there have been in the bank with at least $1000
// const depostsOver1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000);

// const depostsOver1000Reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, curMov) => curMov > 1000 ? ++count : count, 0);
// console.log(depostsOver1000.length);
// console.log(depostsOver1000Reduce);

// //3. to create a object which contains the sum of deposits and withdraws.
// const { sumDeposit: deposits, sumWithDraw: withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sumObj, mov) => {
//     // console.log(sumObj);
//     // console.log(mov > 0 ? sumObj.sumDeposit + mov : sumObj.sumWithDraw + Math.abs(mov));

//     //use ternary operator
//     // mov > 0 ? sumObj.sumDeposit += mov : sumObj.sumWithDraw += Math.abs(mov);
//     // return sumObj;

//     //use if 
//     // if (mov > 0) {
//     //   sumObj.sumDeposit += mov;
//     // }
//     // else {
//     //   sumObj.sumWithDraw += mov;
//     // }
//     // return sumObj;

//     //third way
//     sumObj[mov > 0 ? 'sumDeposit' : 'sumWithDraw'] += mov;
//     return sumObj
//   }, { sumDeposit: 0, sumWithDraw: 0 })
// // console.log(sumDepositWithDraw);
// console.log(deposits, withdrawals);


//4. crate a simple function to convert any string to a title case
//this is a nice title => This Is a Nice Title
// const convertTitleCase = function (title) {
//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   return title
//     .toLowerCase()
//     .split(" ")
//     .map(word => {
//       // word = word.toLowerCase();
//       // console.log(word);
//       // if (word.length === 1)
//       if (expections.includes(word))
//         return word;
//       // console.log(word);
//       return word.split("").map((char, i) => {
//         if (i === 0)
//           return char.toUpperCase();
//         else
//           return char;
//       }).join("");
//     }).join(" ");
// }
// const convertTitleCase = function (title) {
//   const capitalize = word => word[0].toUpperCase() + word.slice(1);
//   const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', ' in ', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map(word => !expections.includes(word) ? capitalize(word) : word)
//     .join(" ");
//   return capitalize(titleCase);
// }
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

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

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calsAverageHumanAge2 = ages => ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0).toFixed(2);
// console.log(calsAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
// console.log(calsAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1.
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2.
dogs.forEach(function (dog) {
  if (dog.owners.includes("Sarah")) {
    if ((dog.curFood - dog.recommendedFood) / dog.recommendedFood > 0.1) {
      console.log(`Sarah's dog eat too much`);
    }
    else if ((dog.curFood - dog.recommendedFood) / dog.recommendedFood < -0.1) {
      cconsole.log(`Sarah's dog eat too little`);
    } else {
      console.log(`Sarah's dog eat healthily`);
    }
  }
})

const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(sarahDog);

//3
const ownersEatTooMuch = dogs.filter(dog => (dog.curFood - dog.recommendedFood) / dog.recommendedFood > 0.1).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => (dog.curFood - dog.recommendedFood) / dog.recommendedFood < -0.1).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
const ownersEatTooMuchStr = ownersEatTooMuch.reduce((str, owner, i, arr) => {
  if (i == arr.length - 1)
    str += owner + "'s dogs eat too much!";
  else
    str += owner + ' and ';
  return str;
}, "");
console.log(ownersEatTooMuchStr);

let ownersEatTooLittleStr = "";
ownersEatTooLittle.forEach(function (owner, i, owners) {
  if (i == owners.length - 1)
    ownersEatTooLittleStr += owner + "'s dogs eat too little!";
  else
    ownersEatTooLittleStr += owner + ' and ';
  // return str;
})
console.log(ownersEatTooLittleStr);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
const resultExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(resultExactly);


//6.
const calcDogEatFoodOK = dog => Math.abs(dog.curFood - dog.recommendedFood) / dog.recommendedFood <= 0.1;
const resultOk = dogs.some(calcDogEatFoodOK);
console.log(resultOk);

//7.
const healthEatDogs = dogs.filter(calcDogEatFoodOK);
console.log(healthEatDogs);

//8.
function compareNumbers(a, b) {
  return a.recommendedFood - b.recommendedFood;
}
const dogsRecommendedFoodSort = dogs.slice().sort(compareNumbers);
console.log(dogsRecommendedFoodSort);

// const dogsRecommendedFoodSort2 = dogs.map(dog => dog.recommendedFood).sort(compareNumbers);
// console.log(dogsRecommendedFoodSort2);