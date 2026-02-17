/*
Homework 4
Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

Find all products with price greater than 20.
Get the names of all products of Category Food, that are on discount.
Get the price of all products that are on discount.
Find the name and price of all products with name starting with a vowel, that are not on discount.
*/

let productBtn = document.getElementById("showProducts");
let priceAbove20Btn = document.getElementById("priceAbove20");
let foodOnDiscountBtn = document.getElementById("foodOnDiscount");
let priceOnDiscountBtn = document.getElementById("allOnDiscount");
let namePriceVowelBtn = document.getElementById("vowelWithoutDiscount");
let output = document.getElementById("output");

function Product (name, category, hasDiscount, price){
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}

let products = [
  new Product("Bread", "Food", true, 10),
  new Product("Milk", "Food", false, 20),
  new Product("Shampoo", "Beauty", true, 100),
  new Product("Soap", "Beauty", true, 10),
  new Product("T-shirt", "Cloathing", false, 510),
  new Product("Pants", "Cloathing", true, 400),
  new Product("Boots", "Cloathing", true, 990),
  new Product("Eggs", "Food", true, 90),
  new Product("Oil", "Food", false, 86),
  new Product("Plate", "Kitchen", true, 120),
  new Product("Knife", "Kitchen", true, 82),
  new Product("Blanket", "Bedding", false, 730),
  new Product("Shelf", "Furniture", false, 350),
  new Product("Wase", "Furniture", true, 320),
  new Product("Lamp", "Furniture", false, 780)
]

//print all products
products.forEach(p => console.log(p));

productBtn.addEventListener("click", () => {
  output.innerHTML = "";//clear the output before printing the new results
  products.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.name} - ${p.price} - ${p.category} - ${p.hasDiscount}`;
    output.appendChild(li);
  })
})



// 1. all products with price > 20
let priceGratherThan20 = products
.filter(p => p.price > 20)
.map(p => p.name);

priceAbove20Btn.addEventListener("click", () => {
  output.innerHTML = "";//clear the output before printing the new results
  priceGratherThan20.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    output.appendChild(li);
  })
})



//2. all the products with category food that are on discount
let foodOnDiscount = products
.filter(p => p.category ==="Food" && p.hasDiscount === true)
.map(p => `${p.name} - ${p.price}`); //we show the name of the product along with its price

foodOnDiscountBtn.addEventListener("click", () => {
  output.innerHTML = "";//clear the output before printing the new results
  foodOnDiscount.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    output.appendChild(li);
  })
})


//3. the price of all products that are on discount 
let priceOnDiscount = products
.filter(p => p.hasDiscount === true)
.map(p => p.price);
//.map(p => `${p.name} => ${p.price}`);

priceOnDiscountBtn.addEventListener("click", () => {
  output.innerHTML = "";
  priceOnDiscount.forEach((p, index) => {
    let li = document.createElement("li");
    li.textContent = `${products[index].name} - ${p}`; //whows the name of the product along with its price, we use index because we want to show the name of the product too, in the current array we have strings of the prices, so we need to get the name of the product from the original product array using the index of the price 
    output.appendChild(li); 
  })
})

 
//4. the name and the price of all products with name starting with a vawel, that are not on discount
let prodVowelNoDiscount = products
.filter(p => {
  let firstLetter = p.name[0].toLowerCase();
  return ((firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") && p.hasDiscount === false);
})
.map(p => `${p.name} - ${p.price}`);

namePriceVowelBtn.addEventListener("click", () => {
  output.innerHTML = "";
  prodVowelNoDiscount.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    output.appendChild(li);
  })
})
