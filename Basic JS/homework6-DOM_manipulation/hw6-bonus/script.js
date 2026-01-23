let ingredients = [];

let recipeNameInput = document.getElementById("recipeName");
let ingredientInput = document.getElementById("ingredientInput");
let addIngredienteBtn = document.getElementById("addIngredientBtn");
let finishRecipeBtn = document.getElementById("finishRecipeBtn");
let recipeResult = document.getElementById("recipeResult");

addIngredienteBtn.addEventListener("click", function(){
  let ingredient = ingredientInput.value;

  if(ingredient === ""){
    alert("Please enter an ingrediente!");
    return;
  }

  ingredients.push(ingredient);
  ingredientInput.value = "";
});

finishRecipeBtn.addEventListener("click", function(){
  let recipeName = recipeNameInput.value;

  if(recipeName === ""){
    alert("Please enter a recipe name!");
    return;
  }

  if(ingredients.length === 0){
    alert("Please add at least one engrediente!");
  }

  recipeResult.innerHTML = ""; //clears previous result

  let title = document.createElement("h1");
  title.textContent = recipeName;
  recipeResult.appendChild(title);

  //creating ingredient list
  let list = document.createElement("ul");

  for(let i = 0; i < ingredients.length; i++){
    let listItem = document.createElement("li");
    listItem.textContent = ingredients[i];
    list.appendChild(listItem);
  }

  recipeResult.appendChild(list);
});


