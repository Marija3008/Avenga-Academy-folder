function maxMinAndTheirSum(array) {
  if (array.length === 0) {
    console.log("The array Is empty!");
    return;
  }

  let onlyNumbersArray = []; //here we will store only numbers from the array that we are looping through

  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && typeof array[i] === "number") {
      onlyNumbersArray.push(array[i]);
    }
  }

  if (onlyNumbersArray.length === 0) {
    console.log("There are no numbers in the array!");
    return;
  }

  let max = onlyNumbersArray[0];
  let min = onlyNumbersArray[0];

  for (let i = 0; i < onlyNumbersArray.length; i++) {
    //i=0 will compare the value to itself, i=1 will skip comparison with itself
    if (max < onlyNumbersArray[i]) {
      max = onlyNumbersArray[i];
    }
    // console.log("max: " + max);

    if (min > onlyNumbersArray[i]) {
      min = onlyNumbersArray[i];
    }
    // console.log("min: " + min);
  }

  let sum = min + max;

  console.log("Max: ", max);
  console.log("Min: ", min);
  console.log("sum: ", sum);

  return { max, min, sum };
}

let array1 = [1, -2, 3, 5, 77];
maxMinAndTheirSum(array1);

let array2 = [];
maxMinAndTheirSum(array2);

let array3 = [1, -115, 3, 0, 7, 22, 110];
maxMinAndTheirSum(array3);

let array4 = [1, "Andrej", 3, 0, 7, 22, "110"];
maxMinAndTheirSum(array4);
