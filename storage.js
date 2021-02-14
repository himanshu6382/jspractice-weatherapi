class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL';
    }

    getLocationData() {
        //set the city for which weather is required based on what's stored in local storage by user
        if (localStorage.getItem('city') === null) { //if nothing is stored in local storage, set city to default city
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        //above loop for state
        if (localStorage.getItem('state') === null) {
            this.state = this.defaultState;
        } else {
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}