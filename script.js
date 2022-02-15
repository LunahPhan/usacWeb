//Collapse header navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}); 
//Reponsive header navbar
$(document).ready(function(){
  $('#btn-nav').click(function(){
    $('#nav-menu').toggleClass('active');
  })
})






