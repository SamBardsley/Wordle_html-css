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
    field.nextElementSibling.focus();
    //document.getElementById("").focus();
  }
}

// rest of code
const answers = ["women", "death", "cabin", "words", "among", "ready", "truth", "false", "ashes","sonic"
,"react","wrath","fifty","reach","chose","chase","slash","faked","snake","sammy","lyric","zebra","gavel"
,"break","broke","brave","quest","crack","bulky","cents","night","girly","awake","manly","corps","audio"
,"catch","clout","sword","irony","raise","venom","hired","drawn","oddly","extra","under","greet","dweeb"
,"fewer","paris","amaze","glass","cited","bleak","north","south","notes","needs","forum","power","wrong"];
var wordleWord = answers[Math.floor(Math.random()*63)];
alert("word=" + wordleWord);


var myInputs = document.querySelectorAll(".grid");
var letterCount = 0;
var rowCount = 0;
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
    compareToAnswer(myGuess, row);
    loop();
  }
}

// conversion from java begins here
function  compareToAnswer(myGuess, row) {
  var array = [0, 0, 0, 0, 0, 0];
  for(var i = 0; i < wordleWord.length; i++) {
    if(myGuess.charAt(i) == wordleWord.charAt(i)) {
      array[i] = 2;
    } else {
      for(var j = 0; j < wordleWord.length; j++) {
        if(myGuess.charAt(i) == wordleWord.charAt(j)) {
          array[i] = 1;
        }
      }
    }
  }
  rowCount++;
  darkColor(array, row);
}

function darkColor(array, row) {
  const children = row.children;
  for (var i=0; i<array.length; i++) {
    if(array[i]==0) {
      children[i].style.backgroundColor = 'grey' ;
    } else if (array[i]==1) {
      children[i].style.backgroundColor = '#ff8c00' ;
    } else {
      children[i].style.backgroundColor = 'green' ;
    }
  }
}