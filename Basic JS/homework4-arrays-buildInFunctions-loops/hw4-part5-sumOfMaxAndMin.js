function maxMinAndTheirSum(array){
  if(array.length === 0){
    console.log("The array Is empty!");
    return;
  }

  let max = array[0];
  let min = array[0];

  for(let i = 0; i < array.length; i++){ //i=0 will compare the value to itself, i=1 will skeep comparison with itself 
    if(max < array[i]){
      max = array[i];
    }
    // console.log("max: " + max);

    if(min > array[i]){
      min = array[i];
    }
    // console.log("min: " + min);
  }

  let sum = min + max;
  
  console.log("Max: ", max);
  console.log("Min: ", min);
  console.log("sum: ", sum);
  
  return {max, min, sum};
}


let array1 = [1, -2, 3, 5, 77];
maxMinAndTheirSum(array1);

let array2 = [];
maxMinAndTheirSum(array2);

let array3 = [1, -115, 3, 0, 7, 22, 110];
maxMinAndTheirSum(array3);