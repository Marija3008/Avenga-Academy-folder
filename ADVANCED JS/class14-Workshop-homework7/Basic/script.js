const url =
  "https://github.com/aa-codecademy/mkwd14-03-ajs-and-ai/blob/1eebef9617dda87a1fa2a78dbb73408ed3bfc246/G3/Homeworks/Workshop-homework/cars/cars.json";

async function fetchCars() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const cars = data.cars;

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
  tableBody = document.querySelector("#carsTabele tbody");

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
  });
}

fetchCars();
