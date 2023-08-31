'strict mode';

// const { result } = require("lodash");

const budget =Object.freeze(  [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
// console.log(spendingLimits); // nothing change

const getLimit = (limits, user) =>  limits?.[user] ?? 0;

//Pure function 
const addExpense = function (state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser) ? [...state, {value: -value, description, user: cleanUser}]: state;
    // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//   return state.map(entry =>{
//     return entry.value < -getLimit(limits, entry.user) ? {...entry, flag:'limit'} : entry;
//     // entry.value < -getLimit(limits, entry.user) ? entry.flag = 'limit' :'';
//   })
//   // for (const entry of newBudget3) 
//   // if (entry.value < -getLimit(limits, entry.user)) 
//   // entry.flag = 'limit';
// };
const checkExpenses = (state, limits) => 
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user) ? {...entry, flag:'limit'} : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);
console.log(finalBudget);

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const entry of budget) 
//     output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };


const logBigExpenses = function (state,bigLimit) {
  return state.filter(entry=>entry.value <= -bigLimit ).map(entry=>entry.description.slice(-2)).join(' / ');
  // console.log(bigExpenses);
  // return bigExpenses.reduce((result,entry) => result += entry.description.slice(-2), "")
};

const results = logBigExpenses(finalBudget, 1000);
console.log(results);