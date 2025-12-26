// this function will accepts two arrays as input parameters
function createFullNames(firstNames, lastNames) {
  let fullNames = []; //empty array to store the combinedfull names

  for (let i = 0; i < firstNames.length; i++) {
    //we are looping only in firstNames array, and for each index of firstNames array we are getting the corresponding lastName element from the lastNames array
    let currentFirst = firstNames[i];
    let currentLast = lastNames[i];
    let fullName = currentFirst + " " + currentLast;
    let numberedFullName = i + 1 + ". " + fullName;

    fullNames.push(numberedFullName);
  }

  return fullNames;
}

let firstNames1 = ["Marta", "Andrej", "Kosta", "Filip"];
let lastNames1 = ["Georgieva", "Koceski", "Dishlioski", "Trifunovski"];

let fullNames1 = createFullNames(firstNames1, lastNames1);
console.log(fullNames1);

let firstNames2 = ["Luka", "Darja", "Robert"];
let lastNames2 = ["Kostov", "Karova", "Mladenovski"];

let fullNames2 = createFullNames(firstNames2, lastNames2);
console.log(fullNames2);
