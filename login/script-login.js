
//Reponsive header navbar
function navResponse(){
  var nav_menu = document.getElementById('nav-menu');
    if (nav_menu.className === "nav-menu") {
      nav_menu.className += " active";
    } else {
      nav_menu.className = "nav-menu";
    }
}
//Show hidden password 
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
