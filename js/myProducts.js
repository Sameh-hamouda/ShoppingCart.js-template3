/*global alert, confirm, console, Debug, opera, prompt, WSH, let */
let myProductsList = document.querySelector(".product");
let myProducts = JSON.parse(localStorage.getItem("products")) || productsDB ;
//DOM
let noProduct= document.querySelector(".noProduct");
let linkToHome= document.querySelector(".nav-to-home");
console.log(myProducts);

let createdProducts =[];
/*find => return one obj*/
/*filter => return array of obj*/
let drawAddedUi;
(drawAddedUi = function (products = []) {
  
 createdProducts = products.filter((i) => i.isMe === "Y");
 if(createdProducts != 0)
 {
     let productsUI = createdProducts.map((item)=> {    
          return `
<div class="product-item" style = "border : ${item.isMe === "Y" ? "2px solid green" : "" }">
        <img src=${item.imageURL}
                alt="image" >
        <div class="product-desc">
        <a onclick='saveItemDataToDB(${item.id})'> ${item.title} </a>    
        <p>${item.desc}</p>
            <span class="font-bold">Size: ${item.size}</span>

        </div>
         <div class="product-actions">

${
            item.isMe === "Y" && 
"<button class='edit-product-btn' onclick = 'editProduct(" +item.id+ ")'> Edit Product </button>" 
            } 
 <button class="RemoveFromCart" onclick="removeItemFromProducts(${item.id})">Remove From Products</button>

            
         </div> 
    </div>
            `
     });
            myProductsList.innerHTML = productsUI.join("");
            
 }
    else 
        {
        myProductsList.style.display = "none";
        noProduct.innerHTML = "There's No Items In the Products List, please add items..";
        linkToHome.style.display= "block";
        }
        
        
 
 })(JSON.parse(localStorage.getItem("products")) || productsDB );


//  edit product
function editProduct(id) {
    localStorage.setItem("editProduct" , id); 
    window.location = "editProduct.html";
}
/* Delete / Remove product Dom and LocalStorage*/
function removeItemFromProducts(id){
  let myProducts = JSON.parse(localStorage.getItem("products"));  
    
    
    console.log(myProducts);
    if(myProducts){
        /*filter - retrieve the rest in Array */
        let filteredItems = myProducts.filter((item) => item.id !== id ) ; 
        drawAddedUi(filteredItems);
 localStorage.setItem("products" , JSON.stringify(filteredItems));
    }
}

 /*cart badge and functionality*/






//
//
////deleget and ignore error comments// Register user
//let cartProductsDom= document.querySelector(".product");
//let noProduct= document.querySelector(".noProduct");
//let linkToHome= document.querySelector(".nav-to-home");
//let updatedProductID = JSON.parse(localStorage.getItem("editProduct"));
//let getUpdatedProduct = products.find((i) => i.id === updatedProductID );
//function drawCartProducts(allProducts = []){
//   
//    let newProducts = allProducts.find((item) => item.) 
//    
//    
//if(JSON.parse(localStorage.getItem("cartProducts")).length ===0){
//        cartProductsDom.style.display = "none";
//        noProduct.innerHTML = "<p>There's No Items In the Card, please add items.. </p>";
//        linkToHome.style.display= "block";
//    }
//    
//let product = JSON.parse(localStorage.getItem("cartProducts")) || allProducts ;
//    let cartProductsUI = product.map((item) => {
//            return `
//             <div class="product-item">
//                <img src=${item.imageURL}
//                        alt="image" >
//                <div class="product-desc">
//    <a onclick='saveItemDataToDB(${item.id})'>${item.title} </a>
//            <p>${item.desc}</p>
//            <span class="font-bold">Size: ${item.size}</span><br>
//            <span class="font-bold">Quantity: ${item.qty}</span>
//                </div>
//                 <div class="product-actions">
//                    <button class="RemoveFromCart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
//                    
//                     <i class="fa fa-heart "> </i>
//                 </div> 
//            </div>
//            `
//        });
//        cartProductsDom.innerHTML = cartProductsUI;
//    
//    }
//
//        drawCartProducts();
//
///*Add Item info Into Local Storage To display the correct item details*/
//// when i click on anchor, getting product details 
//function saveItemDataToDB(id) { 
//        localStorage.setItem("productID",id);
//        window.location = "productDetails.html";
//
//}
//}
