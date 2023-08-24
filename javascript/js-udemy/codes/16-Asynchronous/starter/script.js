'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const getCountryData = function(country){
    const request = new XMLHttpRequest();
    // request.open('GET','https://restcountries.com/v3.1/all');
    request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
    // request.open('GET','https://restcountries.com/v3.1/name/canada');
    request.send();
    request.addEventListener('load',function (e) {  
        const countryData = JSON.parse(this.responseText);
        console.log(countryData);
        countryData.forEach(country => {
            const languages = Object.entries(country.languages);
            const languagesStr = languages.reduce((acc,curr)=> acc + curr[1] + " ",'');

            const currencies = Object.entries(country.currencies);
            const html = `
                <article class="country">
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
    })
}

// getCountryData('china');
getCountryData('usa');
getCountryData('canada');
getCountryData('portugal');
