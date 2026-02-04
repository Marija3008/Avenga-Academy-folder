/*
Create a button
When the button is clicked, call the https://jsonplaceholder.typicode.com/users/1.
Get the details for the first user using FETCH API.
Print the person stats in a table.
*/

let button = document.getElementById("getUserDetailsBtn");

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      //tuka upotrebiv AI za generiranje na tabela, pri sto imashe inline style i kodot beshe nepregleden pa staviv i css file
      //dali ova e pravilen i upotrebuvan nacin na dinamicko generiranje na html elementi vo praksa?
      const tableHTML = `<table class="user-table">
        <tr><th>ID</th><td>${user.id}</td></tr>
        <tr><th>Name</th><td>${user.name}</td></tr>
        <tr><th>Username</th><td>${user.username}</td></tr>
        <th>Email</th><td>${user.email}</td></tr>
        <tr><th>Phone</th><td>${user.phone}</td></tr>
        <tr><th>Website</th><td>${user.website}</td></tr>
        <tr><th>Company</th><td>${user.company.name}</td></tr>
        <tr><th>Address</th><td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
        </td></tr>
        </table>`;

      document.getElementById("userTable").innerHTML = tableHTML;
    })
    .catch(function (error) {
      console.error("Error fetching user data:", error);
    });
});
