/*global alert, confirm, console, Debug, opera, prompt, WSH, let */   
//deleget and ignore error comments// Register user
let userInfo = document.querySelector("#user-info");
let username = document.querySelector("#usernameDB");
let links = document.querySelector("#links");
let navToLoginPage = document.querySelector("#nav-to-LogInPage");
let username_DB= localStorage.getItem("username");

if(username_DB){
    links.remove();
    userInfo.style.display="flex";
    username.innerHTML = username_DB;
}
else
    navToLoginPage.addEventListener("click", function(e){
    e.preventDefault;
    localStorage.clear();
    setTimeout(()=>{
               window.location="login.html"
       }, 1500);
});
