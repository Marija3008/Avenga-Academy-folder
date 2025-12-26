function sumOfStringElements(array) {
  let sum = "";//assigning the sum to an empty string
  for (let i = 0; i < array.length; i++) {
    sum += array[i] + " ";
  }
  console.log(sum);

  return sum;
}

let array1 = ["Marija", "se", "umori", "denes", "."];
sumOfStringElements(array1);

let array2 = ["2", "+", "3", "=", "5"]
sumOfStringElements(array2);