// dark mode button
const btn         = document.getElementById('toggle_btn');

btn.addEventListener('click', function handleClick() {
  if (document.body.className == "dark") {
    document.body.className = "light";
    btn.querySelector('ion-icon').setAttribute('name', 'moon-outline');
  } else {
    document.body.className = "dark";
    btn.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
  }
});

function jump001(field, autoMove) {
  if(field.value.length >= field.maxLength) {
    console.log(this);
    field.nextElementSibling.focus();
    //document.getElementById("").focus();
  }
}

// rest of code
var myInputs = document.querySelectorAll(".grid");
var wordleWord = "smart";
var letterCount = 0;
var rowCount = 0;

console.log(myInputs);
loop();

function loop() {
  for (var i=0; i<5; i++) { 
    myInputs[i].addEventListener("change", checkLetter);
  }
}

function checkLetter(e) {
  var myGuess="";
  var input = e.target;
  var row = input.parentNode;
  var inputs = row.querySelectorAll("input");
  for (var i=0; i<inputs.length; i++) {
    myGuess+=inputs[i].value;
  }

  if (myGuess.length==5) {
    compareToAnswer(myGuess);
    loop();
  }
}

// conversion from java begins here
function  compareToAnswer(myGuess) {
  
}