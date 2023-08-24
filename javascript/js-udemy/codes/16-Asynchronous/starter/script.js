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




const getCountryData = function (country) {  
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then( 
        response => response.json()
        // ,
        // err=>alert(err) //catch error
    )
    .then( data => { 
        renderCountry(data)
        const neighbour = data[0].borders[0];
        if(!neighbour) return;

        //counrty 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
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

getCountryData('Caaaaaaaaanada');
