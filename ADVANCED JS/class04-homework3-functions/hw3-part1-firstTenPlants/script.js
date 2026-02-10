/*
Task 1 – First 10 Planets

Create an HTML page with a table and a button. When the button is clicked, show results for the first 10 planets from the Star Wars API. The information in the table should include:

Planet Name
Population
Climate
Gravity
Requirements:

There should be a function that makes the call to the API (the URL should be passed as a parameter).
There should be a function that prints planets into the table.
API URL: https://swapi.py4e.com/api/planets/?page=1
*/

const apiUrl = "https://swapi.py4e.com/api/planets/?page=1";
let button = document.getElementById("getPlanets");
const planets = [];
// Function to fetch data from the API
button.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let planet of data.results) {
    planets.push(planet);
  }
      // planets.push(...data.results); // Add results to planets array
      printPlanets(planets);
    })
    .catch(function (error) {
      console.error("Error fetching user data:", error);
    });
});

// Function for printing the planets into the table
const printPlanets = (planets) => {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear previous data

  let count = 0;

  for (let planet of planets) {
    if(count >= 10) break; // stops after printing 10 plants
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = planet.name ? planet.name : "Unknown";

    const populationCell = document.createElement("td");
    populationCell.textContent = planet.population
      ? planet.population
      : "Unknown";

    const climateCell = document.createElement("td");
    climateCell.textContent = planet.climate ? planet.climate : "Unknown";

    const gravityCell = document.createElement("td");
    gravityCell.textContent = planet.gravity ? planet.gravity : "Unknown";

    row.appendChild(nameCell);
    row.appendChild(populationCell);
    row.appendChild(climateCell);
    row.appendChild(gravityCell);

    tableBody.appendChild(row);
  }
};
