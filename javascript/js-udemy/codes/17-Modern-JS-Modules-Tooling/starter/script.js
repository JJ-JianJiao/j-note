 //Importing module
//  import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('milk',5);
// console.log(price,tq);
console.log(`Importing module`);


//  import * as ShoppingCart from './shoppingCart.js';
//  ShoppingCart.addToCart('bread',5);
//  console.log(ShoppingCart.totalPrice);
//  console.log(ShoppingCart.tq);

//  import add ,{addToCart, totalPrice as price, tq}from './shoppingCart.js';
// add('steak',6);
// console.log(price,tq);

import add, {cart} from './shoppingCart.js';
 add('steak',6);
 add('milk',2);
 add('apple',4);
 add('banana',10);

console.log(cart);

