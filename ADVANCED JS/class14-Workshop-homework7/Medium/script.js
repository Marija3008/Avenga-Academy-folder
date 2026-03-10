let cars = [];

async function fetchCars() {
  try {
    const response = await fetch("cars.json");
    const data = await response.json();
    cars = data;

    //console log cars data
    //console.log(cars);
    logCars(cars);
    displayCars(cars);
  } catch (error) {
    console.log("Error fetching cars: ", error);
  }
}

//func for console log each car
function logCars(cars) {
  cars.forEach((car) => {
    console.log(car);
  });
}

//func to display the cars in the table
function displayCars(cars) {
  const tableBody = document.querySelector("#carsTable tbody");
  tableBody.innerHTML = ""; //to clear the old rows

  cars.forEach((car) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.type}</td>
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.doors}</td>
      <td>${car.gasType}</td>
      <td>${car.color}</td>
      <td>${car.isNew}</td>
      <td>${car.horsepower}</td>
       `;
    tableBody.appendChild(row);
  });
}

function filterCars() {
  const selectedType = document.getElementById("typeFilter").value;
  const selectedBrand = document.getElementById("brandFilter").value;

  let filtered = cars.filter((car) => {
    if (selectedType && car.type !== selectedType) return false;
    if (selectedBrand && car.brand !== selectedBrand) return false;

    return true; //if user selected All or nothing
  });

  displayCars(filtered);
}

document.getElementById("searchBtn").addEventListener("click", filterCars);

fetchCars();
