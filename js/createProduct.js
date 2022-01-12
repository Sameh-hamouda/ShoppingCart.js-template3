// variables ;
let productName = document.getElementById("productName");
let prodcutDesc = document.getElementById("productDesc");
let productSizeSelect = document.getElementById("pickSize");
let createForm = document.getElementById("create-form");
let uploadImage = document.getElementById("upload-img-file");
let alertSuccess = document.getElementById("alert-success");
let alertDanger = document.getElementById("alert-danger");
let submitBtn = document.getElementById("submitBtn-create");

let productSizeValue; 
let productImg; 

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);

uploadImage.addEventListener("change", uploadImageFun);
// Functions
function getProductSizeValue(e) {
     productSizeValue = e.target.value;
    
}

function createProductFun(e){
    e.preventDefault();
    let allProducts= JSON.parse(localStorage.getItem("products")) || productsDB;

    let nameValue = productName.value;
    let descValue= prodcutDesc.value;
     
    if(nameValue !== "" &&
       descValue !== "" &&
        productSizeSelect.value !== "" )
    {
        let obj = {
        id: allProducts ? allProducts.length +1 : 1 ,
        qty: 1,
        imageURL: productImg,
        size: productSizeValue,
        title: nameValue,
        desc: descValue,
        isMe: 'Y',
        
    };
    
    
    let newProductList = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProductList));
        // Alert success => item added 
    setTimeout(() => { alertSuccess.style.display = "block"}, 100);
    setTimeout(() => { window.location = "index.html"}, 1500);
        
    }
    else {
        /*AlertDanger => should fill data*/
    setTimeout(() => { alertDanger.style.display = "block"}, 500);
    setTimeout(() => { window.location = "createProduct.html"}, 2200);
        
    }
    
    productName.value = "";
    prodcutDesc.value = "";
    productSizeSelect.value = "";
    
    
    /*fade out js*/
   
    
    
}
let filesType=["image/jpeg","image/jpg","image/png"];
function uploadImageFun(){
    let image= this.files[0];
    /*calling for gettin URl of img after convert blob to url */
     getUrlBase64(image);
    console.log(image);
    if (filesType.indexOf(image.type) == -1){
        alert("Image Type Not Supported");
        return;
    }
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
    productImg = reader.result;
    };
    reader.onerror = function (){
        alert("Error !!");
    };
}





