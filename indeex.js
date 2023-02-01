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
        .then(data => this.displayWeather(data))
        .catch(error => console.error(error));
    },
    displayWeather({ name, weather, main }) {
      const [{ description }] = weather;
      const { temp, humidity } = main;
      document.querySelector(".city").innerText = `Weather in ${name}`;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = `${temp}°C`;
      document.querySelector(".humidity").innerText =
        `Humidity: ${humidity}%`;
      document.querySelector(".weather").classList.remove("loading");
    },
    search() {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  const searchButton = document.querySelector(".search button");
  searchButton.addEventListener("click", () => weather.search());
  
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("keyup", event => {
    if (event.key === "Enter") {
      weather.search();
    }
  });
  
  weather.fetchWeather("Stanford");
