$(document).ready(function(){ //waiting for the page to load

  $("#greetBtn").click(function(){
    let name = $("#nameInput").val();

    if(name === ""){
      alert("Please enter a name!");
      return;
    }

    $("#greetingMessage").text(`Hello there ${name}!`);
  });

});

