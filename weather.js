class Weather {
    constructor(city, state) {
        this.apiKey = "f0a31564161864cf9c6605fb2fc77389",
        this.city = city,
        this.state = state
    }

    //fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},{this.state}&units=metric&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}