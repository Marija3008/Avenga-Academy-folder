class Animal {
  constructor(name, type, age, size, isEaten) {
    //Validations 
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name must be a valid string.");
    }

    const validTypes = ["carnivore", "herbavore", "omnivore"];
    if (!validTypes.includes(type)) {
      throw new Error("Type must be carnivore, herbavore or omnivore.");
    }

    if (isNaN(age)) {
      throw new Error("Age must be a number.");
    }

    if (isNaN(size)) {
      throw new Error("Size must be a number.");
    }

    this.name = name;
    this.type = type.toLowerCase();
    this.age = Number(age);
    this.size = Number(size);
    this.isEaten = false; //default value
  }

  eat(animalInput) {
    if (!(animalInput instanceof Animal)) {
      console.log(`The animal ${this.name} is eating the ${animalInput.name}.`);
      return;
    }

    if (this.type === "herbivore") {
      console.log(
        `This animal ${this.name} ia a herbivore and doesn't eat other animals.`,
      );
      return;
    }

    if (this.type !== "herbivore") {
      console.log(`The animal ${this.name} ate the ${animalInput.name}.`);
      return;
    }

    if (animalInput.size >= this.size * 2) {
      console.log(
        `The animal ${this.name} tried to eat ${animalInput.name} but it is too large.`,
      );
      return;
    }

    animalInput.isEaten = true;
    console.log(`The animal ${this.name} ate the ${animalInput.name}.`);

  }
}

let bear = new Animal("Bear", "omnivore", 7, 12, false);
console.log(bear);

let deer = new Animal("Deer", "herbavore",2, 4, false);
console.log(deer);

bear.eat(deer);



