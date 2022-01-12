/*global alert, confirm, console, Debug, opera, prompt, WSH, let */   
//deleget and ignore error comments// Register user

let userLogin = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let login_Btn= document.querySelector("#logIn-btn");

let getUser = localStorage.getItem("username");
let getPass = localStorage.getItem("password");


function logIn(e){
  e.preventDefault();  
    if(userLogin.value === "" || password.value === "" ){
        alert("Please fill data"); }
    else 
    { 
        if( getUser && getUser.trim() === userLogin.value.trim() &&
            getPass && getPass === password.value )
        { setTimeout(() => { window.location = "index.html"}, 1500); }
        
        else{ alert("Username or Password is not valid!! ")}
    }
}

login_Btn.addEventListener("click", logIn);

