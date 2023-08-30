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

// console.log('start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {  
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     return {title: data.at(-1).title, text:data.at(-1).body};
// }

// const lastPost = await getLastPost();
// console.log(lastPost);



//modules pattern

// const ShoppingCartIIFE =  (function () {  
//     const cart = [];
//     const shippingCost = 10;
//     const taotalPrice = 237;
//     const totalQuantity =23;
//     const addToCart = function (product, quantity) {  
//         cart.push({product,quantity});
//         console.log(`${quantity} ${product} added to cart`);
//     };
//     const orderStock = function (product, quantity) {  
//         cart.push({product,quantity});
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         taotalPrice,
//         totalQuantity,
//     }
// })();


// ShoppingCartIIFE.addToCart('apple',4);
// ShoppingCartIIFE.addToCart('pizza',2);
// console.log(ShoppingCartIIFE);



//CommonJS modules
//Export
// export.addToCart =  function (product, quantity) {  
//     cart.push({product,quantity});
//     console.log(`${quantity} ${product} added to cart`);
// };

// //Inport
// const {addToCart} = require('./shoppingCart.js');

///////////////////////////////////////
// Introduction to NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);