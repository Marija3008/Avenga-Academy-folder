/*
Use the Dog API https://dog.ceo/dog-api/documentation/breed
Call the following url: https://dog.ceo/api/breed/hound/images
Display (show on UI) each image returned in the response.
Use Fetch or JQuery AJAX by your choice
*/

let button = document.getElementById("displayImgBtn");

button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const container = document.getElementById("imagesContainer");

      // clear previous images
      container.innerHTML = "";

      // for...of loop
      for (let imageUrl of data.message) {
        let img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Hound Dog";
        img.style.width = "200px";
        img.style.margin = "10px";
        img.className = "dog-image";
        container.appendChild(img);
      }
    })
    .catch(function (error) {
      console.error("Error fetching dog images:", error);
    });
});
