'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starterIndex = 1,mainIndex = 0,time = "20:00",address}){
    // console.log(starterIndex);
    // console.log(mainIndex);
    // console.log(time);
    // console.log(address);
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPaster: function (ing1,ing2,ing3) {  
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
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


const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

//spread operator
const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

//merge 2 or more array
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

//iterable: arrays, strings, maps, sets. NOT objects
const str = 'jian';
const letters = [...str, " ", "S."];
console.log(letters);

//real world example
// const ingredients = [prompt('Lets\'s make pasta! Ingredient 1?'),prompt('Ingredient 2?'),prompt('Ingredient 3?')];
// restaurant.orderPaster(ingredients[0],ingredients[1],ingredients[2],);
// restaurant.orderPaster(...ingredients);

//objects
const newResaurant = {...restaurant, founder:"Seb", foundedIn:1989};
console.log(newResaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Seb chinese food";
console.log(restaurant);
console.log(restaurantCopy);