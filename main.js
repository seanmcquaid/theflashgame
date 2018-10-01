// declare variable for name that is undefined
let name;

// add on click listener that will save name from input then generate alert

document.querySelector('#name-button').addEventListener("click", function(){
  name = document.querySelector('.player').value;
  alert("Run " + name + " RUN!!!");
}); 
