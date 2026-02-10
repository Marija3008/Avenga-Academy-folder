/*
Task 2 – Pagination: NEXT / PREVIOUS 10 Planets
After the user clicks the button to get the first 10 planets, a button should appear below the table labeled NEXT 10. When clicked:

Make another API call to get the next 10 planets.
Replace the table contents with the next 10 planets.
After the NEXT 10 planets are shown:

The NEXT 10 button should disappear.
A new PREVIOUS 10 button should appear.
Clicking PREVIOUS 10 should return the first 10 planets in the table.
The buttons should toggle visibility accordingly.
API URL: https://swapi.py4e.com/api/planets/?page=2

AI Assistance Tips:

Ask AI how to implement buttons that toggle and update table data.
AI can help suggest functions for handling pagination, but check the logic for correctness.
Test all scenarios: clicking NEXT, then PREVIOUS, and ensure the table updates correctly.
*/

// const apiUrl = `https://swapi.py4e.com/api/planets/?page=1`;

let getBtn = document.getElementById("getPlanets");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let tableBody = document.getElementById("tableBody");

let currentPage = 1; // Tracking the current page

//function for fetching the data from the API and handling the response
function fetchPlanets(page){
  fetch(`https://swapi.py4e.com/api/planets/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      //the functions bellow will be defined later on
      printPlanets(data.results);
      toggleButtons(page);
    }).catch((error) => {
      console.error("Error fetching planet data:", error);
      tableBody.innerHTML = "<tr><td colspan='4'>Error fetching data</td></tr>";
    });
}


//function for printing the planets into the table
function printPlanets(planets) {
  
  tableBody.innerHTML = ""; // Clear previous data

  let count = 0;

  for (let planet of planets) {
    if(count >= 10) break; // stops after printing 10 plants
    //the api already returns only 10 planets per page, but this is a safety check in case the API changes in the future
    
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
}

//function to show/hide buttons
function toggleButtons(page){
  if(page === 1){
    nextBtn.style.display = "inline-block";
    prevBtn.style.display = "none";
  } else{
    nextBtn.style.display = "none";
    prevBtn.style.display = "inline-block";
  }
}


//buttons eventd
getBtn.addEventListener("click", () => {
  currentPage = 1; // reset the 1st page when clicking the get page button to alow fetching the 1st 10 planets again (there only 10 planets on each page)
  fetchPlanets(currentPage);
});

nextBtn.addEventListener("click", () => {
  currentPage = 2; // next 10 planets on the 2nd page 
  fetchPlanets(currentPage);
});

prevBtn.addEventListener("click", () => {
  currentPage = 1; // back to the 1st page to show the 1st 10 planets again
  fetchPlanets(currentPage);
});
















































// const planets = [];

// // Function to fetch data from the API
// getBtn.addEventListener("click", () => {
//   fetch(apiUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       for (let planet of data.results) {
//     planets.push(planet);
//   }
//       // planets.push(...data.results); // Add results to planets array
//       printPlanets(planets);
//     })
//     .catch(function (error) {
//       console.error("Error fetching user data:", error);
//     });
// });

// // Function for printing the planets into the table
// const printPlanets = (planets) => {
//   const tableBody = document.getElementById("tableBody");
//   tableBody.innerHTML = ""; // Clear previous data

//   let count = 0;

//   for (let planet of planets) {
//     if(count >= 10) break; // stops after printing 10 plants
//     const row = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.textContent = planet.name ? planet.name : "Unknown";

//     const populationCell = document.createElement("td");
//     populationCell.textContent = planet.population
//       ? planet.population
//       : "Unknown";

//     const climateCell = document.createElement("td");
//     climateCell.textContent = planet.climate ? planet.climate : "Unknown";

//     const gravityCell = document.createElement("td");
//     gravityCell.textContent = planet.gravity ? planet.gravity : "Unknown";

//     row.appendChild(nameCell);
//     row.appendChild(populationCell);
//     row.appendChild(climateCell);
//     row.appendChild(gravityCell);

//     tableBody.appendChild(row);
//   }
// };
