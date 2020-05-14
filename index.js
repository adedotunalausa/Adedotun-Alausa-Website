
function myFunction() {

  const myLinks = document.getElementById("my-links");
  const myName = document.getElementById("my-name");
  const menuIcon = document.getElementById("menu-icon");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
    myName.innerHTML = "Adedotun";
  } else {
    myLinks.style.display = "block";
    myName.innerHTML = "Adedotun <br> Alausa";
  }

  function iconClick() {
    menuIcon.classList.add("pressed");

    setTimeout(function() {
    menuIcon.classList.remove("pressed");
  }, 200);
  }

  menuIcon.addEventListener("click", iconClick);
}
