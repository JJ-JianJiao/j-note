'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {  
    countriesContainer.insertAdjacentText('beforeend',msg);
    // countriesContainer.style.opacity = 1;
}
///////////////////////////////////////


// const getCountryData = function(country){
//     const request = new XMLHttpRequest();
//     // request.open('GET','https://restcountries.com/v3.1/all');
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     // request.open('GET','https://restcountries.com/v3.1/name/canada');
//     request.send();
//     request.addEventListener('load',function (e) {  
//         const countryData = JSON.parse(this.responseText);
//         console.log(countryData);
//         countryData.forEach(country => {
//             const languages = Object.entries(country.languages);
//             const languagesStr = languages.reduce((acc,curr)=> acc + curr[1] + " ",'');

//             const currencies = Object.entries(country.currencies);
//             const html = `
//                 <article class="country">
//                 <img class="country__img" src="${country.flags.svg}" />
//                 <div class="country__data">
//                 <h3 class="country__name">${country.name.official}</h3>
//                 <h4 class="country__region">${country.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+country.population / 1000000).toFixed(1)}m people</p>
//                 <p class="country__row"><span>🗣️</span>${languagesStr}</p>
//                 <p class="country__row"><span>💰</span>${currencies[0][1].name}</p>
//                 </div>
//             `;
//             countriesContainer.insertAdjacentHTML('beforeend',html);
//         });
//         countriesContainer.style.opacity = 1;
//     })
// }


// const renderCountry = function(countryData, className = ''){
//     countryData.forEach(country => {
//         const languages = Object.entries(country.languages);
//         const languagesStr = languages.reduce((acc,curr)=> acc + curr[1] + " ",'');
//         const currencies = Object.entries(country.currencies);
//         const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${country.flags.svg}" />
//             <div class="country__data">
//             <h3 class="country__name">${country.name.official}</h3>
//             <h4 class="country__region">${country.region}</h4>
//             <p class="country__row"><span>👫</span>${(+country.population / 1000000).toFixed(1)}m people</p>
//             <p class="country__row"><span>🗣️</span>${languagesStr}</p>
//             <p class="country__row"><span>💰</span>${currencies[0][1].name}</p>
//             </div>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend',html);
//     });
//     countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbour = function(country){

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     // request.open('GET','https://restcountries.com/v3.1/all');
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     // request.open('GET','https://restcountries.com/v3.1/name/canada');
//     request.send();
//     request.addEventListener('load',function () {  
//         const countryData = JSON.parse(this.responseText);
//         // console.log(countryData);
//         renderCountry(countryData);


//         //Get neighbour country 2
//         const [neighbour] = countryData[0].borders;
//         console.log(neighbour);
//         console.log(countryData[0]);
//         if(!neighbour) return;
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();
//         request2.addEventListener('load',function () {  
//             const countryData = JSON.parse(this.responseText);
//             renderCountry(countryData, 'neighbour');
//             //Get neighbour country 3
//             const neighbour = countryData[0].borders;
//             console.log(neighbour);
//             console.log(countryData[0]);
//             if(!neighbour) return;
//             const request3 = new XMLHttpRequest();
//             request3.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour[1]}`);
//             request3.send();
//             request3.addEventListener('load',function () {  
//                 const countryData = JSON.parse(this.responseText);
//                 renderCountry(countryData, 'neighbour');
//             })
//         })
        
//     })
// }


// getCountryAndNeighbour('canada');
// getCountryAndNeighbour('portugal');


// setTimeout(()=>{
//     console.log('1 second passed');
//     setTimeout(()=>{
//         console.log('2 second passed');
//         setTimeout(()=>{
//             console.log('3 second passed');
//             setTimeout(()=>{
//                 console.log('4 second passed');
//                 setTimeout(()=>{
//                     console.log('5 second passed');
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
// let i = 0;
// const timer = setInterval(() => {
//     i++;
//     console.log(`${i} second passed`);
//     if(i==11){
//         clearInterval(timer);
//     }
// }, 1000);


// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
// request.addEventListener('load',function (e) { request.responseText });


// const country = 'canada';
// const request = fetch(`https://restcountries.com/v3.1/name/${country}`);
// console.log(request);

// setInterval(() => {
//     console.log(request.PromiseState);
// }, 1000);

//...........................................................
//.....................Promise...............................

const renderCountry = function(countryData, className = ''){
    countryData.forEach(country => {
        const languages = Object.entries(country.languages);
        const languagesStr = languages.reduce((acc,curr)=> acc + curr[1] + " ",'');
        const currencies = Object.entries(country.currencies);
        const html = `
            <article class="country ${className}">
            <img class="country__img" src="${country.flags.svg}" />
            <div class="country__data">
            <h3 class="country__name">${country.name.official}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(+country.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languagesStr}</p>
            <p class="country__row"><span>💰</span>${currencies[0][1].name}</p>
            </div>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
    });
    // countriesContainer.style.opacity = 1;
}

// const getCountryData = function (country) {  
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {  
//         console.log(response);
//         return response.json();
//     }).then(function (data) {  
//         console.log(data);
//         renderCountry(data);
//     })
// };
// const getCountryData = function (country) {  
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then( 
//         response => {
//             console.log(response);

//             if(!response.ok)
//                 throw new Error(`Country not found ${response.status}`);

//             return response.json();
//         }
//         // ,
//         // err=>alert(err) //catch error
//     )
//     .then( data => { 
//         renderCountry(data)
//         const neighbour = data[0].borders[0];
//         if(!neighbour) return;

//         //counrty 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data,'neighbour'))
//     .catch(err => {
//         console.error(`${err} 💥💥💢💢`);
//         renderError(`Something went wrrong💥💥💢💢 ${err}. Try again!`);
//     })
//     .finally(()=>{
//         countriesContainer.style.opacity = 1;
//     });
// };
const getJSON = function (url, errorMsg='Something went wrong') {  
    return fetch(url).then(response => {
        if(!response.ok)
            throw new Error(`Country not found ${response.status}`);
        return response.json();
    });
}


const getCountryData = function (country) {  
    getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not find')
    .then( data => { 
        renderCountry(data)
        const borders = data[0].borders;
        // console.log(borders);
        if(!borders)
        throw new Error('No borders found!');
        const neighbour = borders[0];
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,'Country not find');
    })
    .then(data => renderCountry(data,'neighbour'))
    .catch(err => {
        console.error(`${err} 💥💥💢💢`);
        renderError(`Something went wrrong💥💥💢💢 ${err}. Try again!`);
    })
    .finally(()=>{
        countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {  
    getCountryData('Canada');
})

// getCountryData('australia');


///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀

https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${53.5230764}&longitude=${-113.700553}&localityLanguage=en

https://geocode.xyz/api
53.5230764 -113.700553
*/