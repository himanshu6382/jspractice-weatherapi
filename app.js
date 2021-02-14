//init storage
const storage = new Storage();

//get stored locationd data
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init UI

const ui = new UI();
//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location
document.getElementById("change-location").addEventListener('click', (e) => {
    const cityChange = document.getElementById("city").value;
    const stateChange = document.getElementById("state").value;
    weather.changeLocation(cityChange, stateChange); //change the location for which weather is required. This is defined in weather.js
    getWeather(); //call getWeather for getting the weather for the new location. This will also update the UI
    $('#locModal').modal('hide'); //jQuery to hide modal
    //set location in local storage
    storage.setLocationData(cityChange, stateChange);

})


function getWeather() {
weather.getWeather() //this will return a promise
    .then(results => {
        //console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log("error while getting weather: ", err)); // you don't need curly braces when arrow function is a single line
}

