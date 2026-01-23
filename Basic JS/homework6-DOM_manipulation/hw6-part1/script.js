let title = document.getElementById("myTitle");
title.textContent = "This title has ben changed using DOM manipulation!";

let paragraph = document.getElementsByTagName("p");
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].textContent = `This is paragraph number ${i + 1}`;
}

let text = document.getElementsByTagName("text");
let textContent = text[0].textContent;
function charactersCountInText(textContent) {
  let characterCount = 0;
  for (let i = 0; i < textContent.length; i++) {
    if (textContent[i] !== " " && textContent[i] !== "\n") {
      characterCount++;
    }
  }
  console.log("Number of characters in text:", characterCount);
  return characterCount;
}

charactersCountInText(textContent);
