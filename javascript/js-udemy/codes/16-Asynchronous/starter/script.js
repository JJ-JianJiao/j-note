'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {  
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity = 1;
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
    countriesContainer.style.opacity = 1;
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

// btn.addEventListener('click', function () {  
//     getCountryData('Canada');
// })

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

const whereAmI = function (lat, lng) {  
    console.log(lat,lng);
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
    fetch(url).then(response=>{
        console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
        const city  = data.city;
        const continent = data.continent;
        const countryName = data.countryName;
        console.log(`Your are located in ${city}, ${countryName}, ${continent}`);
        // getCountryData(countryName);
        return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    }).then(response=> response.json())
    .then(data=>{
        console.log(data);
        renderCountry(data);
    })
    .catch(error=>{
        console.log(`Oops, there is something wrong, ${error}`);
    })    
    .finally(()=>{
        countriesContainer.style.opacity = 1;
    });;
}

// whereAmI();
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(()=>{
//     console.log(`0 sec timer`,0);
// });
// Promise.resolve('resolved promise 2').then(res => {
//     for(let i = 0; i < 10000; i++)
//         console.log(res, i);
// })
// Promise.resolve('Resolved promise 1').then(res =>{
//     console.log(res);
//     // let index = 1;
//     // setInterval(() => {
//     //     console.log(`pass ${index++}`);
//     // }, 1000);
    
// });


// console.log('test end');


// const lotteryPromise = new Promise(function (resolve, reject) {  
//     const randomNum = Math.random();
//     console.log(`Logger draw is happening, I am the god and I know the result ${randomNum}`);
//     setTimeout(() => {
//         if(randomNum> 0.5){
//             resolve(`You Win 💘, result=${randomNum}`);
//         }else{
//             reject(new Error(`You Lost your money, result=${randomNum} 💨`));
//         }
//     }, 2000);
// })

// lotteryPromise.then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.error(error);
// }).finally(()=>{
//     console.log('simulator lottery game!');
// });

//promisifying setTimeout
// const waitP = function (seconds) {  
//     console.log(seconds);
//     return new Promise(function (resolve){

//         setTimeout(()=>{
//             console.log(seconds);
//             resolve(seconds);
//         }, seconds * 1000);
//         // setTimeout(resolve, seconds * 1000);
//     });
// };

// const seconds = 7;
// waitP(seconds).then((r)=>{
//     console.log(`I waited for ${r} seconds`);
//     return waitP(5);
// }).then(data=>{
//     console.log(`I wait for ${data} seconds`);
// });


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

// waitP(1).then(r=>{
//     console.log('1 second passed');
//     return waitP(1);
// }).then(r=>{
//     console.log('2 second passed');
//     return waitP(1);
// }).then(r=>{
//     console.log('3 second passed');
//     return waitP(1);
// }).then(r=>{
//     console.log('4 second passed');
//     return waitP(1);
// }).then(r=>{
//     console.log('5 second passed');
//     return waitP(1);
// }).then(r=>{
//     console.log('6 second passed');
//     return waitP(1);
// });

// Promise.resolve(`abc`).then(x=>console.log(x));
// Promise.reject(`def`).catch(x=>console.log(x));


// navigator.geolocation.getCurrentPosition(position=>{
//     console.log(position);
// }, error =>{
//     console.log(error);
// });
// console.log('Getting position');

// const getPositon = new Promise(function (resolve,reject) {  
//     // navigator.geolocation.getCurrentPosition(position=>{
//     //     return resolve(position);
//     // },
//     // error=>{
//     //     return reject(error);
//     // });
//     navigator.geolocation.getCurrentPosition(resolve,reject);

// });

// getPositon.then(data=>console.log(data))
// .catch(erro=>console.log(erro));

// const whereAmI2 = function () {
//     getPositon.then(pos=>{
//         const {latitude: lat, longitude:lng} = pos.coords;
//         // const {latitude, longitude} = pos.coords;
//         const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
//         console.log(url);
//         return fetch(url);
//     }).then(response=>{
//         console.log(response);
//         return response.json();
//     }).then(data=>{
//         console.log(data);
//         const city  = data.city;
//         const continent = data.continent;
//         const countryName = data.countryName;
//         console.log(`Your are located in ${city}, ${countryName}, ${continent}`);
//         // getCountryData(countryName);
//         return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     }).then(response=> response.json())
//     .then(data=>{
//         console.log(data);
//         renderCountry(data);
//     })
//     .catch(error=>{
//         console.log(`Oops, there is something wrong, ${error}`);
//     })    
//     .finally(()=>{
//         countriesContainer.style.opacity = 1;
//     });;
// }

// btn.addEventListener('click', whereAmI2);


///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
let img;
const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
    console.log(`wait ${seconds} seconds`);  
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
}

const createImage = function (imgPath) {  
    img = document.createElement('img');
    img.src = imgPath;
    // img.addEventListener('load',()=>{
    //     document.querySelector('.images').append(img);
    //     return Promise.resolve(img);
    // });
    // img.addEventListener('error',()=>{
    //     console.log('Can not read');
    //     return Promise.reject('Load image error');
    // });
    return new Promise(function (resolve,reject) {  
            img.addEventListener('load',()=>{
                imgContainer.append(img);
                // return Promise.resolve(img);
                return resolve(img);
            });
            img.addEventListener('error',()=>{
                // console.log('Can not read');
                return reject(new Error('Load image error 💥💢💢'));
            });
    });
}

const img1Path = `./img/img-1.jpg`; 
const img2Path = `./img/img-2.jpg`; 
const img3Path = `./img/img-3.jpg`; 

// createImage(img1Path)
// .then(()=>{
//     console.log(`display image 1 in 5 seconds`);
//     return wait(5);
// })
// .then(()=>{
//     console.log(`hide image 1, and start loading image 2`);
//     img.style.display='none';
//     return createImage(img2Path);
// })
// .then(()=>{
//     console.log(`display image 2 in 5 seconds`);
//     return wait(5);
// })
// .then(()=>{
//     console.log(`hide image 2, and start loading image 3`);
//     img.style.display='none';
//     return createImage(img3Path);
// })
// .then(()=>{
//     console.log(`display image 3 in 5 seconds`);
//     return wait(5);
// })
// .then(()=>{
//     console.log(`hide image 3, and done`);
//     img.style.display='none';
//     return Promise.resolve();
// })
// .catch(e=>{
//     console.log(e);
// });
// createImage(img1Path).then(v=>console.log(v))
// .catch(e=>{
//     console.log('error');
//     console.log(e);
// });
const getPositon = function () {
    return new Promise(function (resolve,reject) {  
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
}

const whereAmIAsync = async function () {  

    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(response=>console.log(response));
    try{
        const pos = await getPositon();
        const {latitude: lat, longitude:lng} = pos.coords;
        const geoResp = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);

        if(!geoResp.ok)
            throw new Error('Problem getting location data');
        // console.log(geoResp);

        const geoData = await geoResp.json();
        // console.log(geoData);
        const contryName = geoData.countryName;
        const res = await fetch(`https://restcountries.com/v3.1/name/${contryName}`);
        if(!res.ok)
        throw new Error('Problem getting location data');
        const data = await res.json();
        // console.log(data);
        renderCountry(data);
        return `You are in ${geoData.city}, ${geoData.countryName} `;
    }catch(err){
        console.error(err);
        renderError(`something is wrong ❌❌❌: ${err.message}`);

        //reject rpomise returend from async funtion;
        throw err;
    }
};

// console.log('1. will get location');
// const city = whereAmIAsync();
// console.log(city);//Promise {<pending>}

/*
mix async and then
*/
// whereAmIAsync()
// .then(city => console.log(`2. ${city}`))
// .catch(err=>console.log(`2. ${err.message}`))
// .finally(()=>console.log(`3. finished getting location`));


/*
only have async
*/
// (async function () {  
//     try{
//         const stringProm = await whereAmIAsync();
//         console.log(`2. ${stringProm}`);
//     }catch(err){
//         console.log(`2. error: ${err.message}`);
//     };
//     console.log(`3. finished getting location`);
// })();


// try{
//     let y = 1;
//     const x = 2;
//     y = 3;
// }catch(err){
//     console.log(err);
//     console.log(err.message);
// }

const getThreeCountries = async function (c1,c2,c3,c4) {  
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
        // const [data4] = await getJSON(`https://restcountries.com/v3.1/name/${c4}`);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
            getJSON(`https://restcountries.com/v3.1/name/${c4}`),
        ])
        const capitals = data.map(d=>d[0].capital[0]);
        console.log(...capitals);
        // console.log(data1);

    }catch(error){
        console.log(error);
    }
};

// getThreeCountries('portugal','canada','tanzania','china');

//Promse.race
// (async function () {  
//     const res = await Promise.race([
//         getJSON('https://restcountries.com/v3.1/name/italy'),
//         getJSON('https://restcountries.com/v3.1/name/egypt'),
//         getJSON('https://restcountries.com/v3.1/name/mexico'),
//     ]);
//     console.log(res[0]);
// })();

// const timeout = function (sec) {  
//     return new Promise(function (_, reject) {  
//         setTimeout(function () {  
//             reject(new Error('Request took too long!'));
//         }, sec * 1000)
//     })
// };

// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//     timeout(1),
// ]).then(res => console.log(res[0]))
// .catch(err => console.log(err));


// //Promise.allSettled
// Promise.allSettled([
//     Promise.resolve('Success'),
//     // Promise.resolve('Success'),
//     Promise.reject('error'),
//     // Promise.resolve('Success'),
//     Promise.resolve('another Success'),
// ]).then(res=> console.log(res));

// Promise.all([
//     Promise.resolve('Success'),
//     // Promise.resolve('Success'),
//     Promise.reject('error'),
//     // Promise.resolve('Success'),
//     Promise.resolve('another Success'),
// ]).then(res=> console.log(res)).catch(err=>console.log(err));


// //Promise.any [es2021]
// Promise.any([
//     Promise.resolve('Success'),
//     // Promise.resolve('Success'),
//     Promise.reject('error'),
//     // Promise.resolve('Success'),
//     Promise.resolve('another Success'),
// ]).then(res=> console.log(res)).catch(err=>console.log(err));


///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/


const loadNPause = async function (imgPath) {  
    try{
        let imgAsync; 
        imgAsync = await createImage(imgPath);
        console.log('image 1, will dispear after 5 seconds and load image 2');
        await wait(5);
        imgAsync.style.display = 'none';
        imgAsync = await createImage(img2Path);
        console.log('image 2, will dispear after 5 seconds and load image 2');
        await wait(5);
        imgAsync.style.display = 'none';
        imgAsync = await createImage(img3Path);
        console.log('image 3, will dispear after 5 seconds and load image 2');
        await wait(5);
        imgAsync.style.display = 'none';
    }catch(err){
        console.log(`Error: ${err.message}`);
    }
};

// loadNPause(img1Path);
const createImage2 = function (imgPath) {  
    const img = document.createElement('img');
    img.src = imgPath;
    return new Promise(function (resolve,reject) {  
            img.addEventListener('load',()=>{
                imgContainer.append(img);
                // return Promise.resolve(img);
                return resolve(img);
            });
            img.addEventListener('error',()=>{
                // console.log('Can not read');
                return reject(new Error('Load image error 💥💢💢'));
            });
    });
}
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
// const loadAll = async function (imgArr) {  
//     try{
//         console.log(imgArr);
//         const imgs = imgArr.map( async function (iPath) {  
//             console.log(iPath);
//             return await createImage2(iPath);
//         });
//         console.log(imgs);
//         const imgsEl = await Promise.all(imgs);
//         console.log(imgsEl);
//         imgsEl.forEach(img=>img.classList.add(`parallel`));
//     }
//     catch(err){
//         console.log(`erro ${err}`);
//     }
// }

const loadAll = async function (imgArr) {  
    try{
        const imgs = await Promise.all(imgArr.map(img=>createImage2(img)));
        console.log(imgs);
        imgs.forEach(img=>img.classList.add('parallel'));
        
    }
    catch(err){
        console.log(`erro ${err}`);
    }
}
loadAll(imgArr);

// const imgs = Promise.allSettled(loadAll(imgArr));
// console.log(imgs);