/* Animação Menu */
function myFunctionNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

/* Animação Sandwich */
function myFunctionBars(x) {
  x.classList.toggle("change");
}

/* Card-Portfolio-Clicks */
function yourMovie(){
  window.open('https://github.com/PFreire98/Your-Movies', '_blank');
}

function parisLuxury(){
  window.open('https://github.com/PFreire98/ParysLuxury', '_blank');
}