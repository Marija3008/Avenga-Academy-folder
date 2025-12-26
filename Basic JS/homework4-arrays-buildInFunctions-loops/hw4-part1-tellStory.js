function tellStory(name, mood, activity) {
  let story = `This is ${name}.
${name} is a nice person.
Today, ${name} is feeling ${mood}.
${name} will ${activity} all day.
The end.`;

  alert(story);
  console.log(story);

  return story;
}

tellStory("Marija", "happy", "study");

let name1 = prompt("Enter your name: ");
let mood1 = prompt("Enter your current mood: ");
let activity1 = prompt("Enter your favourite activity");

let personStory2 = tellStory(name1, mood1, activity1);

//or geting the user input directly
let personStory3 = tellStory(
  prompt("Enter your name: "),
  prompt("Enter your current mood: "),
  prompt("Enter your favourite activity")
);

