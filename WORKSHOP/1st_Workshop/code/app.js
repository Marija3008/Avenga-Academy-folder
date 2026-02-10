const API_KEY = "7e8467a80f4bb096ea5cfc7725190ddc";

let weatherData = null;

//get the elements from the html
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const app = document.getElementById("app");

const navStatistics = document.getElementById("navStatistics");
const navHourly = document.getElementById("navHourly");
const navAbout = document.getElementById("navAbout");

//we need to add event listener and fetch the data on click on the btton
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();//trim removes the spaces from the beggining and the end of the string
  if (!city){
    app.innerHTML = "<p class ='error'>Please enter a city name</p>";
    return;
  }

  fetchWeather(city);
});

//fetch function
function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`) 
    .then((response) => response.json())
    .then(data => {
      console.log(data);

      if(data.cod !== "200") { // API returns cod 200 if ok
        app.innerHTML = "<p class='error'>City not found!</p>";
        return;
      }

      weatherData = data; // assign to global variable
      showStatistics();   // call after data is ready
    })
    .catch(error => {
      console.log(error);
      app.innerHTML = "<p class='error'>City not find!</p>";
    });
}


//function to show the statistics of the weather
function showStatistics() {
  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    app.innerHTML = "<p class='error'>No data available</p>";
    return;
  }

  let temps = [];
  let humidity = [];
  let wind = [];

  // Using simple for loop (no map or forEach)
  for (let i = 0; i < weatherData.list.length; i++) {
    temps.push(weatherData.list[i].main.temp);
    humidity.push(weatherData.list[i].main.humidity);
    wind.push(weatherData.list[i].wind.speed);
  }
  
  //to select and write on multiple lines of code we can use ctrl + alt + down/up arrow 
  let maxTemp = temps[0];
  let minTemp = temps[0];
  let sumTemp = 0;
  let sumHum = 0;
  let sumWind = 0;

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > maxTemp) maxTemp = temps[i];
    if (temps[i] < minTemp) minTemp = temps[i];
    sumTemp += temps[i];
    sumHum += humidity[i];
    sumWind += wind[i];
  }

  let avgTemp = (sumTemp / temps.length).toFixed(1);
  let avgHum = (sumHum / humidity.length).toFixed(1);
  let avgWind = (sumWind / wind.length).toFixed(1);

  // Render HTML
  app.innerHTML = "<h2>Weather Statistics</h2>" +
                  "<p><strong>City:</strong> " + weatherData.city.name + "</p>" +
                  "<p>🌡 Highest Temp: " + maxTemp + "°C</p>" +
                  "<p>🌡 Lowest Temp: " + minTemp + "°C</p>" +
                  "<p>🌡 Average Temp: " + avgTemp + "°C</p>" +
                  "<p>💧 Average Humidity: " + avgHum + "%</p>" +
                  "<p>💨 Average Wind Speed: " + avgWind + " m/s</p>";
}


//hourly view function
function showHourly() {
  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    app.innerHTML = "<p class='error'>No data available</p>";
    return;
  }

  let tableRows = "";

  for (let i = 0; i < weatherData.list.length; i++) {
    let item = weatherData.list[i];
    tableRows += "<tr>" +
                 "<td><img src='http://openweathermap.org/img/w/" + item.weather[0].icon + ".png'></td>" +
                 "<td>" + item.weather[0].description + "</td>" +
                 "<td>" + item.dt_txt + "</td>" +
                 "<td>" + item.main.temp + "°C</td>" +
                 "<td>" + item.main.humidity + "%</td>" +
                 "<td>" + item.wind.speed + " m/s</td>" +
                 "</tr>";
  }

   app.innerHTML = "<h2>Hourly Weather</h2>" +
                  "<table class='table table-bordered'>" +
                  "<thead><tr><th>Icon</th><th>Description</th><th>Date & Time</th><th>Temp</th><th>Humidity</th><th>Wind</th></tr></thead>" +
                  "<tbody>" + tableRows + "</tbody></table>";


}

//function showAbout()
function showAbout(){
  app.innerHTML = "<h2>About WeatherAlert</h2>" +
                  "<p>This app shows upcoming weather data using OpenWeatherMap API.</p>" +
                  "<p><strong>Creator:</strong> Your Name</p>" +
                  "<p><strong>Contact:</strong> your@email.com</p>";
}

//navigation
navStatistics.addEventListener("click", showStatistics);
navHourly.addEventListener("click", showHourly);
navAbout.addEventListener("click", showAbout);