class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = Number(age);
    this.size = Number(size);
    this.isEaten = false;
  }

  eat(animalInput) {
    if (!(animalInput instanceof Animal)) {
      return `${this.name} is eating ${animalInput}`;
    }

    if (this.type === "herbivore") {
      return `${this.name} is herbivore and doesn't eat animals`;
    }

    if (animalInput.size >= this.size * 2) {
      return `${animalInput.name} is too large to be eaten.`;
    }

    animalInput.isEaten = true;
    return `${this.name} ate ${animalInput.name}`;
  }
}

const animals = [];

const form = document.getElementById("animalForm");
const tableBody = document.querySelector("#animalsTable tbody");

const select1 = document.getElementById("animal1");
const select2 = document.getElementById("animal2");

function renderAnimals() {
  tableBody.innerHTML = "";
  select1.innerHTML = "";
  select2.innerHTML = "";

  animals.forEach((animal, index) => {
    // table row
    const row = `
      <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
        <td>${animal.size}</td>
        <td>${animal.isEaten}</td>
      </tr>
    `;

    tableBody.innerHTML += row;

    // dropdown options
    const option1 = new Option(animal.name, index);
    const option2 = new Option(animal.name, index);

    select1.add(option1);
    select2.add(option2);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const age = document.getElementById("age").value;
  const size = document.getElementById("size").value;

  const animal = new Animal(name, type, age, size);

  animals.push(animal);

  renderAnimals();

  form.reset();
});

const resultDiv = document.getElementById("result");

document.getElementById("eatBtn").addEventListener("click", function () {
  const a1 = animals[select1.value];
  const a2 = animals[select2.value];

  const message = a1.eat(a2);

  resultDiv.textContent = message;

  renderAnimals();
});
