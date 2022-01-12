// get DATA from local storage \
let avatarName= localStorage.getItem("username");
let avatarImg= localStorage.getItem("userImg");
console.log(avatarImg);
let avatarEmail= localStorage.getItem("email");
let avatarPassword= localStorage.getItem("password");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.isMe === "Y")

// get variables 
let avatarUserImg= document.querySelector(".profile-img");
let avatarNameDom= document.getElementById("userNameAvatar");
let avatarEmailDom = document.getElementById("userEmailAvatar");
let avatarPassDom = document.getElementById("userPasswordAvatar");
let avatarProductLength = document.getElementById("productsLength")

// Set into DOM

avatarNameDom.innerHTML = '<span class="avatarInfo"> Avatar Name: </span> ' + avatarName;
avatarEmailDom.innerHTML = '<span class="avatarInfo"> Avatar Email: </span> ' + avatarEmail;
avatarPassDom.innerHTML = '<span class="avatarInfo"> Avatar Password: </span> ' + avatarPassword;

// check if there's products added by You or Not 
if(myProducts.length != 0){
avatarProductLength.innerHTML ='<span class="avatarInfo"> Number of Added Products: </span> ' + myProducts.length;
}else{
    avatarProductLength.innerHTML ='<span class="avatarInfo "> Number of Added Products: </span> ' +
     '<span class="dangerMsg"> No Product Added </span> ';
}

// set image into localstorage 
avatarUserImg.src = avatarImg;