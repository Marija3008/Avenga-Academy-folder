let bookTitle = prompt("Enter the title of the book: ");
let bookAutor = prompt("Enter book autor: ");
let statusInput;

while (true) {
  //true condition creates infinit loop untill break is called (the loop does not depend on user input to start or to stop, stopping is handled inside the loop)
  //keep asking the user until they enter only yes or no, we do not know in advance how many wrong answers the user might give
  // we say loop forever, but we have a way to break out of the loop when the user gives valid input
  statusInput = prompt("Have you read this book? (yes / no)").toLowerCase();

  if (statusInput === "yes" || statusInput === "no") {
    break; //break immediately exits the loop, and execution continues after the loop
  } else {
    alert("Please enter only 'yes' or 'no'.");
  }
}

let readingStatus = statusInput.toLowerCase() === "yes";

let book = {
  title: bookTitle,
  autor: bookAutor,
  readingStatus: readingStatus,

  getReadingInfo: function () {
    if (this.readingStatus) {
      console.log(`You have already read "${this.title}" by ${this.autor}.`);
      alert(`You have already read "${this.title}" by ${this.autor}.`);
    } else {
      console.log(`You still need to read "${this.title}" by ${this.autor}.`);
      alert(`You still need to read "${this.title}" by ${this.autor}.`);
    }
  },
};

book.getReadingInfo();
