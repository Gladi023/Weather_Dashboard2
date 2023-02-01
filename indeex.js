const API_KEY = "2ccf4e002e3b58010e13fc9303258cd3";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q={{city}}&units=metric&appid=${API_KEY}`;

const weather = {
    fetchWeather(city) {
      fetch(WEATHER_API_URL.replace("{{city}}", city))
        .then(response => {
          if (!response.ok) {
            console.error("Not found.");
            throw new Error("Weather not found.");
          }
          return response.json();
        })
    }}
