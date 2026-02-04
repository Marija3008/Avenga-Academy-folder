/*
Create a button When the button is clicked, get the data from the https://pokeapi.co/api/v2/pokemon and print details for the first ten pokemons of the result.

Use JQuery AJAX call
*/

$(document).ready(function () {
  $("#getFirstTenPokemonsBtn").click(function () {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon?limit=10",
      success: function (data) {
        console.log("Pokemons Data:", data);
        for (let pokemon of data.results) {
          $("#pokemons").append(`<li>${pokemon.name}</li>`);
        }
      },
      error: function (error) {
        console.error("Error fetching pokemon name:", error);
      },
    });
  });
});
