'use strict';
//test for contribution in github 3
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
class Workout {
    _id;
    _date;
    _clicks = 0;
    constructor(distance, duration, coords) {
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
        this._date = this.#getDate();
        this._id = this.#getId();
    }

    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
    set clicks(clicks) {
        this._clicks = clicks;
    }

    #getDate() {
        const options = {
            day: 'numeric',
            month: 'long',
        };
        const dateStr = new Intl.DateTimeFormat(navigator.language, options).format(new Date());
        return dateStr;
    }

    #getId() {
        return Date.now();
    }

    click(){
        ++this._clicks;
    }

    // stringify(){
    //     return JSON.stringify({['#id']: this.#id,['#date']: this.#date,,['#clicks']: this.#clicks});
    // }
}

class Running extends Workout {
    #name = 'Running';
    #type = ['🏃‍♂️','🦶🏼'];
    constructor(distance, duration, coords, cadence) {
        super(distance, duration, coords);
        this.cadence = cadence;
    }

    get name() {
        return this.#name;
    }
    // set name(name) {
    //     this.#name = name;
    // }
    get typeIcon() {
        return this.#type[0];
    }

    get cadenceElevationIcon(){
        return this.#type[1];
    }
    // set types(types){
    //     this.#type = types;
    // }
    get cadenceElevation() {
        return this.cadence;
    }
    get speed() {
        return (this.duration / this.distance).toFixed(1);
    }
}
class Cycling extends Workout {
    #name = 'Cycling';
    #type = ['🚴‍♀️','⛰'];
    constructor(distance, duration, coords, elevation) {
        super(distance, duration, coords);
        this.elevation = elevation;
    }
    get name() {
        return this.#name;
    }

    // set name(name) {
    //     this.#name = name;
    // }

    get typeIcon() {
        return this.#type[0];
    }
    get cadenceElevationIcon(){
        return this.#type[1];
    }
    // set types(types){
    //     this.#type = types;
    // }
    get cadenceElevation() {
        return this.elevation;
    }

    get speed() {
        return (this.distance / (this.duration / 60)).toFixed(1);
    }
}

////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
    //fields
    #workouts = [];
    #map;
    #mapEvent;
    #formNotReady = false;
    #mapZoom = 13;
    constructor() {

        this._geLocalWorkouts();

        this._getCurrentPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleEvevationField);
        window.addEventListener('keydown', this._cancelForm.bind(this));
        containerWorkouts.addEventListener('click',this._moveToMarker.bind(this));
    }

    _geLocalWorkouts(){
        // localStorage.clear();
        const preWorkouts = localStorage.getItem('WOS');
        if(preWorkouts){
            const localWorkouts = JSON.parse(preWorkouts);
            // console.log(localWorkouts);
            localWorkouts.forEach(this._renderLocalStorageWorkoutForm.bind(this));
        }
    }

    _renderLocalStorageWorkoutForm(workout){
        let workOutObj = "";
        if(workout.hasOwnProperty('cadence')){
            workOutObj = new Running(workout.distance,workout.duration,workout.coords,workout.cadence);
        }
        if(workout.hasOwnProperty('elevation')){
            workOutObj = new Cycling(workout.distance,workout.duration,workout.coords,workout.elevation);
        }
        workOutObj.id = workout._id;
        workOutObj.date = workout._date;
        workOutObj.clicks = workout._clicks;
        this.#workouts.push(workOutObj);
        this._renderWorkout(workOutObj);
    }

    _renderLocalStorageWorkoutMarker(){
        this.#workouts.forEach(this._renderWorkoutMarker.bind(this));
    }

    _initFormFields() {
        inputDistance.value = "";
        inputDuration.value = "";
        inputCadence.value = "";
        inputElevation.value = "";
    }
    _getCurrentPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your current position :(')
            });
        }
    }
    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        this.#map = L.map('map').setView([latitude, longitude], this.#mapZoom);
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        if(this.#workouts.length !== 0){

            this._renderLocalStorageWorkoutMarker();
        }

        this.#map.on('click', this._showForm.bind(this));
    }
    _showForm(e) {
        if(this.#formNotReady) return;
        this.#mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _cancelForm(e) {
        if (e.code === 'Escape' && !form.classList.contains('hidden')) {
            this._hideForm();
        }
    }
    _hideForm(cancle = true) {
        if(!cancle) {
            form.style.display = 'none';
            this.#formNotReady = true;
        }
        form.classList.add('hidden');
        this._initFormFields();

        if(!cancle) {
            setTimeout(() => {
                this.#formNotReady = false;
                form.style.display = 'grid';
            }, 600);
        }
    }
    _toggleEvevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputDistance.focus();
    }
    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(inp=>Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp=>inp>0);
        e.preventDefault();
        //get data from from
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let activity;

        if (type === 'running') {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (!validInputs(distance,duration,cadence)|| !allPositive(distance,duration,cadence)){
                return alert('Inputs have to be positive numbers!');
            }
            activity = new Running(distance, duration, [lat, lng], cadence);
        }

        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if (!validInputs(distance,duration,elevation) || !allPositive(distance,duration)){
                return alert('Inputs have to be positive numbers!');
            }
            activity = new Cycling(distance, duration, [lat, lng], elevation);
        }
        this.#workouts.push(activity);
        this._renderWorkout(activity);
        this._hideForm(false);
        this._renderWorkoutMarker(activity);
        this._setLocalStorage();
    }

    _setLocalStorage(){
        localStorage.setItem("WOS",JSON.stringify( this.#workouts));
    }

    _renderWorkout(activity) {
        const isRunning = activity.name === 'Running';
        form.insertAdjacentHTML('afterend', `
        <li class="workout workout--${activity.name.toLowerCase()}" data-id="${activity.id}">
            <h2 class="workout__title">${activity.name} on ${activity.date}</h2>
            <div class="workout__details">
              <span class="workout__icon">${activity.typeIcon}</span>
              <span class="workout__value">${activity.distance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${activity.duration}</span>
              <span class="workout__unit">min</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${activity.speed}</span>
              <span class="workout__unit">${isRunning ? 'MIN/KM':'KM/H'}</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">${activity.cadenceElevationIcon}</span>
              <span class="workout__value">${activity.cadenceElevation}</span>
              <span class="workout__unit">${isRunning ? 'SPM':'M'}</span>
            </div>
          </li>
        `)
    }

    _renderWorkoutMarker(activity) {
        const marker = L.marker(activity.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${activity.name.toLowerCase()}-popup`
            }))
            .setPopupContent(`${activity.typeIcon} ${activity.name} on ${activity.date}`)
            .openPopup();
        // marker.addEventListener('click',function (e) {  
        //     console.log('click marker', marker);
        // })
    }

    _moveToMarker(e){
        // e.preventDefault();
        const workout = e.target.closest('.workout');
        if(!workout) return;
        const markerId = workout.dataset.id;
        if(markerId){
            const targetMarker = this.#workouts.find(wk=>wk.id === (+markerId));
            if(targetMarker){
                // this.#map.flyTo(targetMarker.coords,13,{
                //     animate:true,
                //     // duration: 3,
                //     // easeLinearity: 1,
                //     // noMoveStart:true
                // });

                this.#map.setView(targetMarker.coords,this.#mapZoom,{
                    animate:true,
                    pan:{
                        duration:1
                    }
                });
                targetMarker.click();
                this._setLocalStorage();
                // console.log(targetMarker);
            }
        }
    }

    reset(){
        localStorage.removeItem('WOS');
        location.reload();
    }
}

const app = new App();
// const workouts = [];
// let map, mapE;
// const getDate = function () {
//     const options = {
//         day: 'numeric',
//         month: 'long',
//     };
//     const dateStr = new Intl.DateTimeFormat(navigator.language, options).format(new Date());
//     return dateStr;
// }
// const getId = function () {
//     return new Date().getTime();
// }
// const initFormFields = function () {
//     inputDistance.value = "";
//     inputDuration.value = "";
//     inputCadence.value = "";
//     inputElevation.value = "";
// }
// if (navigator.geolocation) {
//     const options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//     };
//     const success = function (pos) {
//         const { latitude } = pos.coords;
//         const { longitude } = pos.coords;
//         map = L.map('map').setView([latitude, longitude], 13);
//         // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         // }).addTo(map);
//         L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // L.marker([latitude, longitude]).addTo(map)
//         //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         //     .openPopup();
//         map.on('click', function (e) {

//             ///1.  display the marker when click the map before submit the form
//             // if (form.classList.contains('hidden')) {
//             //     const { lat, lng } = e.latlng;
//             //     const marker = L.marker([lat, lng])
//             //         .addTo(map)
//             //         .bindPopup(L.popup({
//             //             maxWidth: 250,
//             //             minWidth: 100,
//             //             autoClose: false,
//             //             closeOnClick: false,
//             //             className: 'running-popup'
//             //         }))
//             //         .setPopupContent(`Running on ${getDate()}`)
//             //         .openPopup();
//             //     // console.log(marker);
//             //     // this.on('popupclose', function (e) {
//             //     //     form.classList.add('hidden');
//             //     //     initFormFields();
//             //     //     this.removeLayer(marker);
//             //     // })
//             //     form.classList.remove('hidden');
//             //     inputDistance.focus();
//             // }

//             ////2. display the marker after submit the form
//             mapE = e;
//             form.classList.remove('hidden');
//             inputDistance.focus();
//         });
//     }
//     const error = function (err) {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
//     navigator.geolocation.getCurrentPosition(success, error, options);
//     console.log(navigator);
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // console.log('submit form');
//     // let typeValue = '1';
//     // let typeIcon = '🚴‍♀️';
//     // let cadenceElevation = inputCadence.value;
//     // let activity;
//     // if (inputType.value === 'running') {
//     //     // typeValue = 'Running';
//     //     // typeIcon = '🏃‍♂️';
//     //     // cadenceElevation = inputCadence.value;
//     //     activity = new Running(inputDistance.value, inputDuration.value, mapE.latlng, inputCadence.value);
//     // }
//     // else if (inputType.value === 'cycling') {
//     //     // typeValue = 'Cycling';
//     //     // typeIcon = '🚴‍♀️';
//     //     // cadenceElevation = inputElevation.value;
//     //     activity = new Cycling(inputDistance.value, inputDuration.value, mapE.latlng, inputElevation.value);
//     // }
//     form.insertAdjacentHTML('afterend', `
//     <li class="workout workout--${activity.name.toLowerCase()}" data-id="${activity.id}">
//         <h2 class="workout__title">${activity.name} on ${activity.date}</h2>
//         <div class="workout__details">
//           <span class="workout__icon">${activity.typeIcon}</span>
//           <span class="workout__value">${activity.distance}</span>
//           <span class="workout__unit">km</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⏱</span>
//           <span class="workout__value">${activity.duration}</span>
//           <span class="workout__unit">min</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${activity.value}</span>
//           <span class="workout__unit">km/h</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⛰</span>
//           <span class="workout__value">${activity.cadenceElevation}</span>
//           <span class="workout__unit">m</span>
//         </div>
//       </li>
//     `)
//     this.classList.add('hidden');
//     initFormFields();
//     const { lat, lng } = mapE.latlng;
//     L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(L.popup({
//             maxWidth: 250,
//             minWidth: 100,
//             autoClose: false,
//             closeOnClick: false,
//             className: `${activity.name.toLowerCase()}-popup`
//         }))
//         .setPopupContent(`${activity.typeIcon} Running on ${activity.date}`)
//         .openPopup();
//     console.log(activity);
//     workouts.push(activity);
//     console.log(workouts);
// })

// window.addEventListener('keydown', function (e) {
//     console.log(e);
//     if (e.code === 'Escape' && !form.classList.contains('hidden')) {
//         form.classList.add('hidden');
//         initFormFields();
//     }
// })
// inputType.addEventListener('change', function (e) {
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
// })

