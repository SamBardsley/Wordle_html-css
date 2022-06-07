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

var myInputs = document.querySelectorAll(".grid");
var wordleWord = "smart";

console.log(myInputs);

for (var i=0; i<myInputs.length; i++) {
  myInputs[i].addEventListener("change", checkLetter);
}

function checkLetter(e) {
  alert("this changed");
  console.log(e);
  console.log(this);
  alert(this.value);
}