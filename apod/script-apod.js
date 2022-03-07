//Collapse header navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}); 
//Reponsive header navbar
function navResponse(){
  var nav_menu = document.getElementById('nav-menu');
    if (nav_menu.className === "nav-menu") {
      nav_menu.className += " active";
    } else {
      nav_menu.className = "nav-menu";
    }
};