/*global alert, confirm, console, Debug, opera, prompt, WSH, let */   
//deleget and ignore error comments// Register user
let productsFavoriteDom= document.querySelector(".favorite");
let noProduct= document.querySelector(".noProduct");
let linkToHome= document.querySelector(".nav-to-home");
let favoriteIcon= document.querySelector(".favorite");
let favoriteList = document.querySelector(".favorite");
let RemoveBtn = document.querySelector(".RemoveFromCart")


function drawFavoriteProductsUi(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsFavorite")).length ===0){
        favoriteList.style.display = "none";
        noProduct.innerHTML = "There's No Items In the Card, please add items.. ";
        linkToHome.style.display= "block";
    }
    

let product = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts ;
    let productsFavoriteUI = product.map((item) => {
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
                    <button class="RemoveFromFavorite" onclick="removeItemFromFavorite(${item.id})">Remove From favorite</button>
                    
                     <i class=" favorite fa fa-heart "
                    style = "display :none"> </i>
                 </div> 
            </div>
            `
        });
        productsFavoriteDom.innerHTML = productsFavoriteUI;

    }

       
drawFavoriteProductsUi();
/* Remove Item From Cart Dom and LocalStorage*/
function removeItemFromFavorite(id){
    let productsFavorite = localStorage.getItem("productsFavorite");
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);
        /*filter - retrieve the rest in Array */
        let filteredItems = items.filter((item) => item.id !== id ) ; 
        
        localStorage.setItem("productsFavorite" , JSON.stringify(filteredItems));
        
        drawFavoriteProductsUi(filteredItems);
    }
}
/*Add Item info Into Local Storage To display the correct item details*/
function saveItemDataToDB(id) { 
        localStorage.setItem("productID",id);
        window.location = "productDetails.html";

}
