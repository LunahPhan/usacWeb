const BASE_URL = "https://debug-eusac-pwrodowr7a-as.a.run.app/api/"
const LOGIN_URL = BASE_URL + "auth/login"
const inputBoxName = document.getElementById('loginUser');
const inputBoxPw = document.getElementById('loginPassword');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", getDataLocal);
submitBtn.addEventListener("click", requestLogin);

function getDataLocal(){
  let userNameValue = inputBoxName.value;
  let userPwValue = inputBoxPw.value;
  //getting sessionStorage
  var getSessionStorageName = sessionStorage.getItem("New Name");
  var getSessionStoragePw = sessionStorage.getItem("New Pw");

   // if localStorage is nulll 
  if(getSessionStorageName == null){
    //creating blank array 
    userName = ""; 
  }else{
  //JSON object 
    userName = JSON.parse(getSessionStorageName); 
  } 

  if(getSessionStoragePw == null){
    //creating blank array 
    userPw = ""; 
  }else{
  //JSON object 
    userPw = JSON.parse(getSessionStoragePw); 
  } 
  userName = userNameValue; 
  userPw = userPwValue; 
  //gan gia tri vao bien truy xuat vao gia tri truyen vao trong localStorage va tranform HSON object thanh JSON array
  sessionStorage.setItem("New Name", JSON.stringify(userName)); 
  sessionStorage.setItem("New Pw", JSON.stringify(userPw)); 
}

// POST request using fetch()
async function getLogin(){
    var responseLogin = await fetch(LOGIN_URL, {  
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
            username: userName,
            password: userPw,
        }),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    // Converting to JSON
    var jsonResponseLogin = await responseLogin.json()
    return jsonResponseLogin
}
// Make request
async function requestLogin (){
    getLogin().then((jsonResponseLogin) => {
        if(jsonResponseLogin.status === 1 ) {
            // Displaying results to console
          sessionStorage.setItem("New Token", JSON.stringify(jsonResponseLogin.data.token)); 
          window.location.href = "https://htmlpreview.github.io/?https://github.com/LunahPhan/webUsac/blob/main/profile/profile.html"
        }
        if(jsonResponseLogin.status !=1) {
          document.getElementById('sLogin').style.display = "none";
          document.getElementById('eLogin').style.display = "block";
          document.getElementById('cLogin').style.display = "none";
        }
    }).catch(err => {
      document.getElementById('sLogin').style.display = "none";
      document.getElementById('eLogin').style.display = "none";
      document.getElementById('cLogin').style.display = "block";
    })
}

  
