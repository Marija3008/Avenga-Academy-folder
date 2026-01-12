let animalName = prompt("Enter the name of the animal:");
let animalKind = prompt("Enter the kind of the animal:");
let speaks = prompt("What does the animal say?");

let animal = {
  name: animalName,
  kind: animalKind,
  speak: function(text) {
    console.log(`The ${this.kind} named ${this.name} says: ${text}`);
    alert(`The ${this.kind} named ${this.name} says: ${text}`);
  }
};

animal.speak(speaks);

