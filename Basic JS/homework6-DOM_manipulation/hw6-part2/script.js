let numbers = [];

let numberInput = document.getElementById("numberInput");
let addNumBtn = document.getElementById("addNumberBtn");
let numberList = document.getElementById("numberList");
let sumResult = document.getElementById("sumResult");

let sum = 0;
addNumBtn.addEventListener("click", function () {
  let num = parseFloat(numberInput.value);
  if (isNaN(num) || numberInput.value === "") {
    alert("Please enter a valid number!");
    return;
  }
  //else is unnecessary because we already use return in the if block
  numbers.push(num);

  let listItem = document.createElement("li");
  listItem.textContent = num;
  numberList.appendChild(listItem);

  sum += num;
  sumResult.textContent = "Sum: " + sum;

  numberInput.value = "";
});
