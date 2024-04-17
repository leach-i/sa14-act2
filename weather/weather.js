const apiKey = '43e4cc30372b428fa24164419241704';
const form = document.getElementById('weather-form');
const cityNameInput = document.getElementById('city-name');
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast-days');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const cityName = cityNameInput.value;
    getWeatherData(cityName);
});

function getWeatherData(cityName) {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const currentWeatherData = data.current;
    const location = data.location;
    const currentTime = location.localtime;

    currentWeatherDiv.innerHTML = `
        <div>Time: ${currentTime}</div>
        <div>Temperature: ${currentWeatherData.temp_c}°C</div>
        <div>Condition: ${currentWeatherData.condition.text}</div>
        <div>Humidity: ${currentWeatherData.humidity}%</div>
    `;

    forecastDiv.innerHTML = '';
    data.forecast.forecastday.forEach(day => {
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.className = 'forecast-day';
        forecastDayDiv.innerHTML = `
            <div>Date: ${day.date}</div>
            <div>Condition: ${day.day.condition.text}</div>
            <div>Max Temp: ${day.day.maxtemp_c}°C</div>
            <div>Min Temp: ${day.day.mintemp_c}°C</div>
        `;
        forecastDiv.appendChild(forecastDayDiv);
    });
}
