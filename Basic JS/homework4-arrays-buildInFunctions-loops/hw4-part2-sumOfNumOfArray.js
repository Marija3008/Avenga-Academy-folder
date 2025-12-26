function sumOfNumbers(array) {
  if (array.length !== 5) {
    alert("You must enter exactly 5 numbers!");
    return;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || typeof array[i] !== "number") {
      console.log(`Please enter all numbers!`);
      return; // stops the function immidiately after finding non numeric element
    }
    sum += array[i];
  }
  let result = (`The sum of this array of numbers is: ${sum}.`);
  console.log(result);
  alert(result);

  return sum;
}

// let array1 = [1, 1, "vera", 2, 6];
// sumOfNumbers(array1);

// let array2 = [1, 9, 6, "zoran", 0];
// sumOfNumbers(array2);

// let array3 = [1, 9, 6, 9, 25, 33];
// sumOfNumbers(array3); // the message "You must enter exactly 5 numbers!" will apear here


//USER INPUT
let numbers = [];

for (let i = 0; i < 5; i++) {
  let input = prompt(`Enter number ${i + 1}:`);
  let num = Number(input); // convert input to number

  if (isNaN(num)) {
    alert("Invalid input! Please enter only numeric values.");
    break; // here we will terminate the enterence of values
  }

  numbers.push(num);

}

sumOfNumbers(numbers);
