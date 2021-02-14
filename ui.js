class UI {
    constructor () {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("temp");
        this.feelsLike = document.getElementById("feels-like");
        this.humidity = document.getElementById("humidity");
        this.wind = document.getElementById("wind");
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.innerHTML = `${weather.main.temp}&deg; C`; //when you need to pass html entities, use innerHTML instead of textContent
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.temp.innerHTML = `Temperature: ${weather.main.temp}&deg C`; 
        this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like}&deg C`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}