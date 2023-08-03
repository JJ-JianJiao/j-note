'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before es6
  // openingHours:openingHours,

  //es6 enhanced object literals
  openingHours,

  //before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //after ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(starterIndex);
    // console.log(mainIndex);
    // console.log(time);
    // console.log(address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPaster(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time:"22:30",
//   address:"via del sole,21",
//   mainIndex:2,
//   starterIndex:2
// });

// restaurant.orderDelivery({
//   address:"via del sole,21",
//   starterIndex:1
// });

// //destructuring objects
// const {name, openingHours, categories} = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// //rename
// const {name:restaurantName, openingHours:hours, categories:tags} = restaurant;
// console.log(restaurantName);
// console.log(hours);
// console.log(tags);

// //default
// const {menu = [], starterMenu:starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};

// ({a, b} = obj);
// console.log(a);
// console.log(b);

// //nested obj
// const {fri: {open:o, close:c}} = openingHours;
// // console.log(fri);
// console.log(o,c);

// //destructruing array
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// //receive 2 return values from a funtion
// const [starter, mainFood] = restaurant.order(2, 0);
// console.log(starter, mainFood);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

//spread operator
// const newArr = [1,2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

//shallow copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//merge 2 or more array
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);

//iterable: arrays, strings, maps, sets. NOT objects
// const str = 'jian';
// const letters = [...str, " ", "S."];
// console.log(letters);

//real world example
// const ingredients = [prompt('Lets\'s make pasta! Ingredient 1?'),prompt('Ingredient 2?'),prompt('Ingredient 3?')];
// restaurant.orderPaster(ingredients[0],ingredients[1],ingredients[2],);
// restaurant.orderPaster(...ingredients);

//objects
// const newResaurant = {...restaurant, founder:"Seb", foundedIn:1989};
// console.log(newResaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Seb chinese food";
// console.log(restaurant);
// console.log(restaurantCopy);

/*
rest pattern : opposite spread
*/

// //Spread, because on Right side of =
// const arr = [1,2, ...[3,4]];

// //Rest, because on Left side of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //Objects
// const {sat:weekend, ...weekdays} = restaurant.openingHours;
// console.log(weekend, weekdays);

// //2) functions
// const add = function (...nums) {
//   let sum = 0;
//   nums.forEach(e => {
//     sum += e;
//   });
//   console.log(sum);
//   return sum;
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spanish");
// restaurant.orderPizza("mushrooms");
// restaurant.orderPizza();

// use any data type, return any data type, short-circuiting
//如果第一个是真，马上返回真。从而不判断后面的属性
// console.log(3 || "Jian"); //3
// console.log("" || "Jian"); // Jian
// console.log(true || 0); // true
// console.log(undefined || null); // null

// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests :10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("-----------AND--------------");
// console.log(0 && "Jian"); //0
// console.log(7 && "Jian"); // jian
// console.log(7 && "Jian" && null && "jiao"); // null

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms',"spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms',"spinach");

//?? operator
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests :10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // Nullish: null and undefined (Not o or "")  //ES2020
// const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

//Logical Assignment Operators ES2021
// const rest1 = {
//   name: "Jian",
//   // numGuests: 20,
//   numGuests: 0
// };

// const rest2 = {
//   name: "seb",
//   owner: "xueYan"
// }

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && "<ANONYMOUS>";//{name: 'Jian', numGuests: 0, owner: undefined}
// // rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner &&=  "<ANONYMOUS>"; //{name: 'Jian', numGuests: 0}
// rest2.owner &&=  "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

//11. looping arrays: the for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for(const [i,e] of menu.entries()){
//   // console.log(item);
//   console.log(`${i + 1}: ${e}`);
// }

// console.log([...menu.entries()]);
// console.log(...menu.entries());

//12. enhanced object literals
//already updated in the resturant object

//13. Optinal chaining (?.) ES2020
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(restaurant.openingHours[day]?.open);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//Method`
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderJian?.(0, 1) ?? 'Method does not exist');

//Array
const users = [{ name: 'Jian', email: 'jj.jianjiao@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
const users2 = [];
console.log(users2[0]?.name ?? 'User array empty');
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//1.
// const [players1,players2] = [...game.players];
const [players1,players2] = game.players;
console.log(players1);
console.log(players2);

//2
const [team1_gk,...team1_fieldPlayers] = [...players1];
const [team2_gk,...team2_fieldPlayers] = [...players2];
// console.log(team1_gk,team1_fieldPlayers);
// console.log(team2_gk,team2_fieldPlayers);

//3
const allPlayers = [...players1,...players2];
// console.log(allPlayers);

//4
const players1Fianl = [...players1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Fianl);

//5
// const {team1, x:draw, team2} = {...game.odds};
const {odds:{team1, x:draw, team2},} = game;
console.log(team1);
console.log(draw);
console.log(team2);

//6
const printGoals = function (...names) {  
  names.forEach(name => {
    console.log(name);
  });
  console.log(names.length);
}

console.log("---------------test 6 -------------");
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
console.log("-----------------------------------");

//7
// console.log(`${} is more likely to win!`);
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
