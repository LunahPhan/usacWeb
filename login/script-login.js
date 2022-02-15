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
//show hidden password 
function showPw(){
  const loginPw = document.getElementById('loginPassword');
  const eye = document.getElementById('iconEye');
  const eyeClose = document.getElementById('iconEye-close');
  if (loginPw.type === 'password'){
    loginPw.type = 'text';
    eye.style.display = 'none';
    eyeClose.style.display = 'block';
  } else {
    loginPw.type = 'password';
    eye.style.display = 'block';
    eyeClose.style.display = 'none';
  }
}
