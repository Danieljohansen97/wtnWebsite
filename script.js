/* Function that animates the burgerMenu */
function burgerMenu(x){
    x.classList.toggle("change");
}

/* Function that displays the navigation menu */
function showNav() {
  var x = document.getElementById("nav");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}