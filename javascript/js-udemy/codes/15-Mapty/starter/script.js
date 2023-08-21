'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


//using Geolocation API: Geolocation: getCurrentPosition() method
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// console.log(Geolocation.getCurrentPosition());
const getDate = function () {
    const options = {
        day: 'numeric',
        month: 'long',
    };
    const dateStr = new Intl.DateTimeFormat(navigator.language, options).format(new Date());
    return dateStr;
}
if (navigator.geolocation) {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    const success = function (pos) {
        const { latitude } = pos.coords;
        const { longitude } = pos.coords;
        const map = L.map('map').setView([latitude, longitude], 13);
        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // L.marker([latitude, longitude]).addTo(map)
        //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //     .openPopup();
        map.on('click', function (e) {
            if (form.classList.contains('hidden')) {
                const { lat, lng } = e.latlng;
                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(L.popup({
                        maxWidth: 250,
                        minWidth: 100,
                        autoClose: false,
                        closeOnClick: false,
                        className: 'running-popup'
                    }))
                    .setPopupContent(`Running on ${getDate()}`)
                    .openPopup();
                form.classList.remove('hidden');
            }
        });
    }
    const error = function (err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log(navigator);
}

const initFormFields = function () {
    inputDistance.value = "";
    inputDuration.value = "";
    inputCadence.value = "";
    inputElevation.value = "";
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('submit form');
    let typeValue = '1';
    let typeIcon = '🚴‍♀️';
    if (inputType.value === 'running') {
        typeValue = 'Running';
        typeIcon = '🏃‍♂️';
    }
    else if (inputType.value === 'cycling') {
        typeValue = 'Cycling';
        typeIcon = '🚴‍♀️';
    }
    containerWorkouts.insertAdjacentHTML('beforeend', `
    <li class="workout workout--cycling" data-id="9999999">
        <h2 class="workout__title">${typeValue} on ${getDate()}</h2>
        <div class="workout__details">
          <span class="workout__icon">${typeIcon}</span>
          <span class="workout__value">${inputDistance.value}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${inputDuration.value}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${inputCadence.value}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${inputDistance.value * inputDuration.value * inputCadence.value}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
    `)
    this.classList.add('hidden');
    initFormFields();
})


