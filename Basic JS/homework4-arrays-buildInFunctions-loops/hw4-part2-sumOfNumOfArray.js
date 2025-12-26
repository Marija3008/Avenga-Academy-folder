function validateNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return false;
  }
  return true;
}

function sumOfNumbers(array) {
  if (array.length !== 5) {
    alert("You must enter exactly 5 numbers!");
    return;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!validateNumber(array[i])) {
      console.log(`Please enter all numbers!`);
      alert("Please enter all numbers!");
      return; // stops the function immidiately after finding non numeric element
    }
    sum += array[i];
  }

  let result = `The sum of this array of numbers is: ${sum}.`;
  console.log(result);
  alert(result);

  return sum;
}

//USER INPUT
let numbers = [];
let isValidInput = true;

for (let i = 0; i < 5; i++) {
  let input = prompt(`Enter number ${i + 1}:`);
  let num = Number(input); // convert input to number

  if (!validateNumber(num)) {
    alert("Invalid input! Please enter only numeric values.");
    isValidInput = false; // we are swtting the flag to false if invalid input is detected
    break; // here we will terminate the enterence of values after detecting invalid input
  }

  numbers.push(num);
}
//we are calling the sum function iff all the inputs are valide
if (isValidInput) {
  sumOfNumbers(numbers);
}

// let array1 = [1, 1, "vera", 2, 6];
// sumOfNumbers(array1);

// let array2 = [1, 9, 6, "zoran", 0];
// sumOfNumbers(array2);

// let array3 = [1, 9, 6, 9, 25, 33];
// sumOfNumbers(array3); // the message "You must enter exactly 5 numbers!" will apear here
