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

// rest of code
var myInputs = document.querySelectorAll(".grid");
var wordleWord = "smart";
var myGuess = "";
var letterCount = 0;

console.log(myInputs);

for (var i=0; i<myInputs.length; i++) {
  myInputs[i].addEventListener("change", checkLetter);
}

function checkLetter(e) {
  letterCount++;
  if(letterCount == 5) alert("I check");
  else alert("I wait");
  
  myGuess += this.value.charAt(0);
  console.log(this);
  alert(this.value);

  // check to see if all input boxes in row have a letter value
  // we will need to get each input box in the row
  // loop over, see if they are all filled, get word

  // splitting up the guess into individual letters, answer too
  // each guess letter against each answer letter 
  // will be two for loops
}