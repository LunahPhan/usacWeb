// get API 
const USER_URL = "https://debug-eusac-pwrodowr7a-as.a.run.app/api/user-management/users/me"
const userName = sessionStorage.getItem("New Name");
const userPw = sessionStorage.getItem("New Pw");
const userToken = sessionStorage.getItem("New Token");
const Token = userToken.substring(1, userToken.length - 1);
var setRequest = "Bearer ".concat(Token);


// POST request using fetch()
async function getUser(){
    var responseUser = await fetch(USER_URL, {  
        // Adding headers to the request
        headers: {
            Authorization: setRequest,        
        }
    })
    // Converting to JSON
    var jsonResponseUser = await responseUser.json()
    return jsonResponseUser
}
// Make request
async function requestUser (){
    getUser().then((jsonResponseUser) => {
        if(jsonResponseUser.status === 1 ) {
            // Displaying results to console
            console.log(jsonResponseUser)
            document.getElementById('user-finalName').innerText = jsonResponseUser.data.lastName
            document.getElementById('user-firstName').innerText = jsonResponseUser.data.firstName
            document.getElementById('user-love').innerText = jsonResponseUser.data.point;
            document.getElementById('department').innerText = jsonResponseUser.data.department;
            document.getElementById('university').innerText = jsonResponseUser.data.school;
            var birthday = jsonResponseUser.data.birthday;
            document.getElementById('birthday').innerText = birthday.substring(0, birthday.length - 14);
            document.getElementById('phone').innerText = jsonResponseUser.data.phone;
            document.getElementById('address').innerText = jsonResponseUser.data.address;
        }
        if(jsonResponseUser.status !=1) {
          alert("Lỗi hệ thống")
        }
    }).catch(err => {
        alert("Kiểm tra lại kết nối mạng")
    })
}
window.onload = requestUser();

/* var userData = new XMLHttpRequest();
userData.open("GET", USER_URL);
var setRequest = "Bearer ".concat(Token);
userData.setRequestHeader("Accept", "application/json");
userData.setRequestHeader("Authorization", setRequest);

userData.onreadystatechange = function () {
   if (userData.readyState === 4) {
      console.log(userData.status);
      console.log(userData.responseText);

   }};
userData.send(); */
// //

