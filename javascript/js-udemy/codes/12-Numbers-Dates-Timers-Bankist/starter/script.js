'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-08-10T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-08-10T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

//not use international api
const now = new Date();
const day = now.getDate().toString().padStart(2, '0');
const month = (now.getMonth(0) + 1).toString().padStart(2, '0');
const year = now.getFullYear();
const hour = now.getHours().toString().padStart(2, '0');
const min = now.getMinutes().toString().padStart(2, '0');
/////////////////////////////////////////////////
// Functions

const displayMainPageDate = function (acc) {
  // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long'
  };

  // const locale = navigator.language;
  // console.log(locale);
  labelDate.textContent = new Intl.DateTimeFormat(acc.locale, options).format(
    new Date()
  );
};
//update lable date
// displayMainPageDate();

const calsDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const formatMovementDate = function (date, locale) {
  const movYear = new Date(date).getFullYear();
  const movMonth = (new Date(date).getMonth() + 1).toString().padStart(2, 0);
  const movDay = new Date(date).getDate().toString().padStart(2, 0);

  // let date = `${movDay}/${movMonth}/${movYear}`;
  // if (new Date(acc.movementsDates[i]).getDate().toString().padStart(2, '0') === day && (new Date(acc.movementsDates[i]).getMonth() + 1).toString().padStart(2, '0') === month && new Date(acc.movementsDates[i]).getFullYear() === year)
  //   date = 'today';
  const daysGap = calsDaysPassed(
    new Date(movYear, movMonth, movDay),
    new Date(year, month, day)
  );
  if (daysGap === 0) {
    return 'today';
  } else if (daysGap === 1) {
    return 'yesterday';
  } else if (daysGap < 7) {
    return `${daysGap} days ago`;
  } else {
    // return `${movDay}/${movMonth}/${movYear}`;
    // const options = {
    //   // hour: 'numeric',
    //   // minute: 'numeric',
    //   day: 'numeric',
    //   month: 'numeric',
    //   year: 'numeric',
    //   // weekday: 'long'
    // }
    return new Intl.DateTimeFormat(locale).format(new Date(date));
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const formatMov = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: acc.currency,
    }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${formatMovementDate(
          acc.movementsDates[i],
          acc.locale
        )}</div>
        <div class="movements__value">${formatMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(acc.balance)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(incomes)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(Math.abs(out))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(interest)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  displayMainPageDate(acc);
};

const timeConvert = function (num) {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return (
    hours.toString().padStart(2, 0) + ':' + minutes.toString().padStart(2, 0)
  );
};
const startLogOutTimer = function () {
  //set the time to 1 mins
  let timer = 10;
  labelTimer.textContent = timeConvert(timer);

  //call the timer every second
  const timerCount = setInterval(() => {
    timer -= 1;
    labelTimer.textContent = timeConvert(timer);
    if (timer === 0) {
      currentAccount = '';
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started.😏';
      clearInterval(timerCount);
    }
  }, 1000);
  return timerCount;
};

///////////////////////////////////////
// Event handlers
let currentAccount;
let timerLogin;
//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timerLogin) clearInterval(timerLogin);
    timerLogin = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    receiverAcc.movementsDates.push(now.toISOString());
    currentAccount.movementsDates.push(now.toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timerLogin);
    timerLogin = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    const processTime = function () {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(now.toISOString());
      // Update UI
      updateUI(currentAccount);
    };
    inputLoanAmount.value = '';
    setTimeout(processTime, 5000);
    //reset timer
    clearInterval(timerLogin);
    timerLogin = startLogOutTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log("--------------Converting and chekcing numbers--------------");
// console.log(23 === 23.000000000000000000001); //true
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(3 / 10); //0.3
// console.log(1 / 10);//0.1
// console.log(0.1 + 0.2 === 0.3); //false

// console.log(Number('23'));
// console.log(+'23');

// //parsing
// console.log(Number.parseInt('345daewq'));//345
// console.log(Number.parseFloat('a345gweqeqweq.0sa'));//NaN

// console.log(Number.parseInt('2.5rem', 10)); //2
// console.log(Number.parseFloat('2.5rem', 10));//2.5

// //check if value is NaN
// console.log(Number.isNaN(23)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20x')); //false
// console.log(Number.isNaN('20x')); //false
// console.log(Number.isNaN(20 / 0)); //false  == Infinity

// //checking if value is number
// console.log(Number.isFinite(20));//true
// console.log(Number.isFinite('20'));//false
// console.log(Number.isFinite(+'20'));//false
// console.log(Number.isFinite(20 / 0));//false

// console.log(Number.isInteger(23));//true
// console.log(Number.isInteger(23.0));//true
// console.log(Number.isInteger(23.0 / 0));//false

// console.log("--------------Math and Rounding--------------");
// console.log(Math.sqrt(25)); //5
// console.log(25 ** (1 / 2)); //5
// console.log(8 ** (1 / 3)); //5

// console.log(Math.max(5, 18, 23, 11, 2, 3, 6));//23
// console.log(Math.max(5, 18, '23', 11, 2, 3, 6));//23
// console.log(Math.max(5, 18, '23px', 11, 2, 3, 6));//NaN

// console.log(Math.min(5, 18, 23, 11, 2, 3, 6, 1.9)); //1.9

// console.log(Math.PI);
// console.log(Math.PI * Number.parseFloat('10px') ** 2);// PI * r power 2

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);

// console.log(randomInt(10, 29));

// console.log(Math.trunc(23.3));//23

// console.log(Math.round(23.9));//24
// console.log(Math.round(23.4));//23

// console.log(Math.ceil(23.9)); //24
// console.log(Math.floor(23.9)); //23

// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// //Rounding decimals, return string
// console.log((2.8).toFixed(0)); //3 : string
// console.log((2.33333).toFixed(3)); //2.333 : string
// console.log(+(2.33333).toFixed(3)); //2.333 : number

// console.log("--------------Remainder operator--------------");
// console.log(5 % 2); //1
// console.log(5 / 2); //2

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     else {
//       row.style.backgroundColor = 'blue';
//     }
//     // if (i % 3 === 0) {
//     //   row.style.backgroundColor = 'blue';
//     // }
//   })
// })

//or using: Array.from()
// [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//   if (i % 2 === 0) {
//     row.style.backgroundColor = 'orangered';
//   }
// })

// console.log("--------------Numeric separators--------------");
//287,460,000,000
// const diameter = 287460000000;
// const diameter2 = 287_460_000_000;
// console.log(diameter); //287460000000
// console.log(diameter2); //287460000000

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1);
// console.log(transferFee2);

// const PI = 3.14_15926;
// console.log(PI);

// console.log(Number('230000'));//230000
// console.log(Number('230_000'));//NaN

// console.log("--------------Working with Bigint--------------");
//es 2020

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 1); //9007199254740992
// console.log(2 ** 53 + 0); //9007199254740992
// console.log(2 ** 53 + 3); //9007199254740996

// console.log(649879831649879832123165798765135465798156); //6.498798316498798e+41

// console.log(649879831649879832123165798765135465798156n);//649879831649879832123165798765135465798156n
// console.log(BigInt(649879831649879832123165798765135465798156));//649879831649879806124910062977274693550080n

// console.log(10000n * 100000n);

// const huge = 15646535489761616n;
// const num = 23;
// // console.log(huge * num); //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// console.log(20n > 15); //true
// console.log(20n === 20); //false
// console.log(typeof 20n); //bigint

// console.log("--------------Creating Date and time--------------");
// const now = new Date();
// console.log(now); //Fri Aug 11 2023 13:24:03 GMT-0600 (Mountain Daylight Time)

// console.log(new Date('Aug 02 2020 18:05:53')); //Sun Aug 02 2020 18:05:53 GMT-0600 (Mountain Daylight Time)
// console.log(new Date('December 24, 2012')); //Mon Dec 24 2012 00:00:00 GMT-0700 (Mountain Standard Time)

// console.log(account1);
// console.log(new Date(account1.movementsDates[0])); //Mon Nov 18 2019 14:31:17 GMT-0700 (Mountain Standard Time)

// console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT-0700 (Mountain Standard Time)
// console.log(new Date(2037, 10, 32)); //Wed Dec 02 2037 00:00:00 GMT-0700 (Mountain Standard Time)

// console.log(new Date(0));//Wed Dec 31 1969 17:00:00 GMT-0700 (Mountain Standard Time)
// console.log(new Date(3 * 24 * 60 * 60 * 1000));//Wed Dec 31 1969 17:00:00 GMT-0700 (Mountain Standard Time)

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); //2037
// console.log(future.getYear()); //137
// console.log(future.getMonth() + 1);
// console.log(future.getDate()); //19
// console.log(future.getDay()); //4
// console.log(future.getHours()); //15
// console.log(future.getMinutes()); //23
// console.log(future.getSeconds()); //0
// console.log(future.toISOString()); //2037-11-19T22:23:00.000Z

// console.log(future.getTime());//2142282180000
// console.log(new Date(2142282180000));

// console.log(Date.now());

// future.setFullYear(2040);//setMonth, ..... etc.
// console.log(future);

// console.log("--------------Operations with dates--------------");
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calsDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const dayGap01 = calsDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(dayGap01);
// console.log("--------------Internationalizing Dates--------------");
//
// new Intl.DateTimeFormat().format()
// console.log("--------------Internationalizing Number--------------");
// const num = 3884764.23;

// // const options = {
// //   style: 'unit',
// //   unit: 'mile-per-hour'
// // }

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR'
// }
// console.log("US: " + new Intl.NumberFormat('en-US', options).format(num));
// console.log("Germany: " + new Intl.NumberFormat('de-DE', options).format(num));
// console.log("Chinese: " + new Intl.NumberFormat('zh-CN', options).format(num));

// console.log("--------------Timers: set time out and set interval--------------");

// //Set time out
// const ingredients = ['olives', 'spinach'];

// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);
// console.log("Waiting");

// if (ingredients.includes('spinach'))
//   clearTimeout(pizzaTimer);

// //Set interval
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);
