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
  