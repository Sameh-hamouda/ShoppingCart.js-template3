let products = JSON.parse(localStorage.getItem("products"));
let productID =  localStorage.getItem("productID");
let itemBody = document.querySelector(".item-body");
let productDetails = products.find((item) => item.id == productID );

/*
let productDetailsDom = document.querySelector(".productDetails")
*/

/*Diplay Products - Invoke/immediately Function*/
itemBody.innerHTML = 
    `
    <div class= "item-details">
    <img src="${productDetails.imageURL}" alt ="image" />
    <h2> ${productDetails.title}</h2>
    <p> ${productDetails.desc}</p>
    <span class="font-bold"> Size: ${productDetails.size} </span><br>
    <span class="font-bold"> Quantity: ${productDetails.qty} </span>
    <button class="edit-product-btn"  onclick="editProduct(${productID})">Edit Product</button>
        ` ;

/**/

//  edit product
function editProduct(id) {
    localStorage.setItem("editProduct" , id); 
    window.location = "editProduct.html";
}