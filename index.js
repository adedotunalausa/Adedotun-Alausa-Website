
function myFunction() {

  var myLinks = document.getElementById("my-links");
  var myName = document.getElementById("my-name");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
    myName.innerHTML = "Adedotun";
  } else {
    myLinks.style.display = "block";
    myName.innerHTML = "Adedotun <br> Alausa";
  }
}
