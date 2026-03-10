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
  const modelInput = document.getElementById("modelFilter").value.toLowerCase();
  const doorsInput = document.getElementById("doorsFilter").value;
  const gasInput = document.getElementById("gasFilter").value;
  const colorInput = document.getElementById("colorFilter").value.toLowerCase();
  const hpInput = document.getElementById("hpFilter").value;

  const radios = document.getElementsByName("condition");
  let conditionInput = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      conditionInput = radios[i];
      break; // stop after finding the checked one
    }
  }

  let filtered = cars.filter((car) => {
    if (selectedType && car.type !== selectedType) return false;

    if (selectedBrand && car.brand !== selectedBrand) return false;

    if (modelInput && !car.model.toLowerCase().includes(modelInput))
      return false;

    if (doorsInput && car.doors != doorsInput) return false;

    if (gasInput && car.gasType !== gasInput) return false;

    if (colorInput && !car.color.toLowerCase().includes(colorInput))
      return false;

    if (hpInput && car.horsepower < hpInput) return false;

    if (conditionInput && car.isNew.toString() !== conditionInput.value)
      return false;

    return true; //if user selected All or nothing
  });

  displayCars(filtered);
}

document.getElementById("searchBtn").addEventListener("click", filterCars);

fetchCars();
