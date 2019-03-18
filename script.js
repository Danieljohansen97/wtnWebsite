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


/* Eventlistener that checks if email has the right syntax */
var mail;
window.onload=function(){
    mail = document.getElementById("mail");
    mail.addEventListener("input", validateEmail);
}
function validateEmail(){
    mail = document.getElementById("mail").value;
    if(mail.includes("@" && ".")){
        document.getElementById("mail").style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    }else{
        document.getElementById("mail").style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }
}