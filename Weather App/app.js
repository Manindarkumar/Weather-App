

const apiKey = "aaf1070ee94ef0ba9eeec26fffd48aca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humudity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";

        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else {
            weatherIcon.src = "images/default.png";
        }
    } catch (error) {
        console.error(error);
        alert("City not found. Please try again.");
    }
}
searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkWeather(city);
});
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const city = searchBox.value;
        checkWeather(city);
    }
});



