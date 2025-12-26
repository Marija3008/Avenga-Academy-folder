let print = ""; //container string for numbers with spaces and new lines

for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    print += i + "\n";
  } else{
    print += i + " "; 
  }
}

console.log(print);
