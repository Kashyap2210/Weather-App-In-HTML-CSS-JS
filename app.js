const apiKey = "17783ffe3a8e3eded7d37ba24bcc396d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar-main");
const searchBtn = document.querySelector(".button-main ");
const weatherImage = document.querySelector(".weather-image-main");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city-main").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-main").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind-speed-main").innerHTML =
      data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "images/clear.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherImage.src = "images/drizzle.png";
    } else if (data.weather[0].main == "mist") {
      weatherImage.src = "images/mist.png";
    } else if (data.weather[0].main == "rain") {
      weatherImage.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImage.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
}

searchBtn.addEventListener("click", () => {
  console.log("button was pressed");
  checkWeather(searchBox.value);
});
