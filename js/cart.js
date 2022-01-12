/*global alert, confirm, console, Debug, opera, prompt, WSH, let */   
//deleget and ignore error comments// Register user
let cartProductsDom= document.querySelector(".product");
let noProduct= document.querySelector(".noProduct");
let linkToHome= document.querySelector(".nav-to-home");
let RemoveBtn = document.querySelector(".RemoveFromCart")
function drawCartProducts(allProducts = []){
    
if(JSON.parse(localStorage.getItem("cartProducts")).length !==0){
console.log(JSON.parse(localStorage.getItem("cartProducts")).length);
    let product = JSON.parse(localStorage.getItem("cartProducts")) || allProducts ;
    let cartProductsUI = product.map((item) => {
            return `
             <div class="product-item">
                <img src=${item.imageURL}
                        alt="image" >
                <div class="product-desc">
    <a onclick='saveItemDataToDB(${item.id})'>${item.title} </a>
            <p>${item.desc}</p>
            <span class="font-bold">Size: ${item.size}</span><br>
            <span class="font-bold">Quantity: ${item.qty}</span>
                </div>
                 <div class="product-actions">
                    <button class="RemoveFromCart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
                    
                     <i class="fa fa-heart "> </i>
                 </div> 
            </div>
            `
            
        });
 cartProductsDom.innerHTML = cartProductsUI.join("");       
}
    

    
    else {
        cartProductsDom.style.display = "none";
        noProduct.innerHTML = "<p>There's No Items In the Card, please add items.. </p>";
        linkToHome.style.display= "block";
 
    }
    
    
    }

        drawCartProducts();

/*Add Item info Into Local Storage To display the correct item details*/
function saveItemDataToDB(id) { 
        localStorage.setItem("productID",id);
        window.location = "productDetails.html";

}

/* Remove Item From Cart Dom and LocalStorage*/
function removeItemFromCart(id){
    let cartProducts = localStorage.getItem("cartProducts");
    if(cartProducts){
        let items = JSON.parse(cartProducts);
        /*filter - retrieve the rest in Array */
        let filteredItems = items.filter((item) => item.id !== id ) ; 
        localStorage.setItem("cartProducts" , JSON.stringify(filteredItems));
        drawCartProducts(filteredItems);

    }
}