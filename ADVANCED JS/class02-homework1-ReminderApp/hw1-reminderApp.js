/*
Tasks:

Create inputs for title, priority, color, description
Create buttons to add and show reminders
Store reminders in an array
Display reminders in a table
Title color should match the reminder color
🤖 AI Assistance:

Ask AI how to structure objects
Ask AI how to generate tables dynamically
✅ Validation:

Are reminders stored correctly?
Does the table render properly?
Are colors applied as expected?
*/

let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");


let addReminderBtn = document.getElementById("addBtn");
let showReminderBtn = document.getElementById("showBtn");
let tableBody = document.querySelector("#reminderTable tbody");

let reminders = [];

addReminderBtn.addEventListener("click", addReminder);
showReminderBtn.addEventListener("click", showReminders);

function addReminder(){
  let reminder = {
    title: titleInput.value,
    priority: priorityInput.value,
    color: colorInput.value,
    description: descriptionInput.value
  };
  
  reminders.push(reminder);
}

function showReminders(){
  tableBody.innerHTML = "";
  for (let reminder of reminders){
    let row = document.createElement("tr");

    let titleTd = document.createElement("td");
    titleTd.textContent = reminder.title;
    titleTd.style.color = reminder.color;

    let priorityTd = document.createElement("td");
    priorityTd.textContent = reminder.priority;

    let descriptionTd = document.createElement("td");
    descriptionTd.textContent = reminder.description;


    row.appendChild(titleTd);
    row.appendChild(priorityTd);
    row.appendChild(descriptionTd);
    

    tableBody.appendChild(row);
  }
}
