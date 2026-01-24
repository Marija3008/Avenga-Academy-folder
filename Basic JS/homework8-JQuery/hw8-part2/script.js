$(document).ready(function () {
  $("#generateBtn").click(function () {
    let text = $("#textInput").val();
    let color = $("#colorInput").val();

    $("#message").text("");

    if (text === "") {
      $("#message").text("Input required!");
      return;
    }

    // Create h1 element
    let newHeader = $("<h1></h1>");
    newHeader.text(text);
    newHeader.css("color", color);

    // Check if color is valid
    if (newHeader.css("color") === "rgb(0, 0, 0)" && color !== "black") {
      $("#message").text("Invalid color!");
      return;
    }

    $("#result").append(newHeader);

    $("#textInput").val("");
    $("#colorInput").val("");
  });
});
