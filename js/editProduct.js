// variables ;
let productName = document.getElementById("prodcutName");
let prodcutDesc = document.getElementById("prodcutDesc");
let productSizeSelect = document.getElementById("pickSize");
let updateForm = document.getElementById("update-form");
let uploadImage = document.getElementById("upload-img-file");
let alertSuccess = document.getElementById("alert-success");
let alertDanger = document.getElementById("alert-danger");
let submitBtn = document.getElementById("submitBtn-create");
let products= JSON.parse(localStorage.getItem("products")) || productsDB
let updatedProductID = JSON.parse(localStorage.getItem("editProduct"));
let getUpdatedProduct = products.find((i) => i.id === updatedProductID );
let productSizeValue; 
let productImg; 

// Reset data variables 
    productName.value = getUpdatedProduct.title;
    prodcutDesc.value = getUpdatedProduct.desc;
    productSizeSelect.value = getUpdatedProduct.size;
    productImg = getUpdatedProduct.imageURL;


// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);

uploadImage.addEventListener("change", uploadImageFun);
// Functions
function getProductSizeValue(e) {
     productSizeValue = e.target.value;   
}

// Update or Edit Product data 
function updateProductFun(e){
    e.preventDefault();
    if(productName.value !== "" &&
       prodcutDesc.value !== "" &&
        productSizeSelect.value !== "" &&
        productImg !== "")
    { 
    getUpdatedProduct.title = productName.value ; 
    getUpdatedProduct.desc = prodcutDesc.value;
    getUpdatedProduct.size = productSizeSelect.value;
    getUpdatedProduct.imageURL= productImg;
   
    localStorage.setItem("products",JSON.stringify(products));
    
    setTimeout(() => {
        
    alertSuccess.style.display = "block" }, 100);
    setTimeout(() => { window.location = "index.html"}, 1500);
    
    }else
        {
        /*AlertDanger => should fill data*/
    setTimeout(() => { alertDanger.style.display = "block"}, 500);
    setTimeout(() => { window.location = "editProduct.html"}, 2200);  
        }
    
    
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





