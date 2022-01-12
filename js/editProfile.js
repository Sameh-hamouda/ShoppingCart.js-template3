// get data from local storage 
let avatarName= localStorage.getItem("username");
let avatarUserImageUrl= localStorage.getItem("userImg");
let avatarEmail= localStorage.getItem("email");
let avatarPassword= localStorage.getItem("password");
console.log(avatarUserImageUrl);

// get variables from input Dom
let uploadAvatarImg= document.getElementById("upload-img-file");
let avatarImg= document.getElementById("avatarImg");
let get_name= document.getElementById("avatarName");
let get_email= document.getElementById("avatarEmail");
let get_password= document.getElementById("avatarPassword");
let updateForm = document.getElementById("update-form");
let alertSuccess = document.getElementById("alert-success");
let alertDanger = document.getElementById("alert-danger");
let UpdateBtn = document.getElementById("submitBtn-create");
let products= JSON.parse(localStorage.getItem("products")) || productsDB;
let userImage;
// ------- 

console.log(userImage);
get_name.value = avatarName;
get_email.value = avatarEmail;
get_password.value = avatarPassword;
userImage = avatarUserImageUrl;
updateForm.addEventListener("submit", updateProfileForm);
uploadAvatarImg.addEventListener("change", uploadAvatarImgFun);

function updateProfileForm(e) {
     e.preventDefault();
   
    if(get_name.value !== "" &&
       get_email.value !== "" &&
        get_password.value !== "" &&
        userImage !== "")
    {
        console.log(userImage);
         
        
    localStorage.setItem("username" , get_name.value);
    localStorage.setItem("email" , get_email.value);
    localStorage.setItem("password" , get_password.value);
    localStorage.setItem("userImg" , userImage);
    
    
        // Alert success => item added 
    setTimeout(() => { alertSuccess.style.display = "block"}, 100);
    setTimeout(() => { window.location = "profile.html"}, 1500);
        
    }
    else {
        /*AlertDanger => should fill data*/
    setTimeout(() => { alertDanger.style.display = "block"}, 500);
    setTimeout(() => { window.location = "editProfile.html"}, 2200);
        
    }
    
    get_name.value = "";
    get_email.value = "";
    get_password.value ="";
    userImage = "";
    
}

/*Upload Image*/
let filesType=["image/jpeg","image/jpg","image/png"];
function uploadAvatarImgFun(){
    let image= this.files[0];
    /*calling for gettin URl of img after convert blob to url */
     getUrlBase64(image);
    console.log(image);
    /*check img type*/
    if (filesType.indexOf(image.type) == -1){
        alert("Image Type Not Supported");
        return;
    }
    /*check img size*/
   if(image.size > 2 * 1024 * 1024){
        alert("Image Size Not Exceed 2MB");
       return;
   }
}
// convert blob url to Base64 and set it for productImg (source)
function getUrlBase64(image) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    
    reader.onload= function () {
 //create URL for the Input file image
    userImage = reader.result;
    };
    reader.onerror = function (){
        alert("Error !!");
    };
}
