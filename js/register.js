/*global alert, confirm, console, Debug, opera, prompt, WSH, let */   
//deleget and ignore error comments// Register user

let new_username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let Register_btn=document.querySelector("#register");

function Register(e){
        e.preventDefault(); /*cancel the refresh of the page itself */
        if (new_username.value === "" ||
            email.value === "" ||
            password.value === "")
        {      alert("Please Fill Data");      } 
    
    else {
            localStorage.setItem("username" , new_username.value);
            localStorage.setItem("email" , email.value);
            localStorage.setItem("password" , password.value);
        
            setTimeout(() => { window.location = "login.html" }, 1500);
        }
        
        
}
    Register_btn.addEventListener("click",Register);

