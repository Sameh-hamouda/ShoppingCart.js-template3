/*variables*/
/*Define product*/

let favoriteDom = document.querySelector(".favortie");
let fitlerBySize = document.getElementById("size-filter")
let products = productsDB;
             
///*open cart menu*/
//cartProductsIcon.addEventListener("click", openCartMenu); 
///*Open Cart Menu*/
//function openCartMenu(){
//    if(cartProductsDivDom.innerHTML !== ""){
//        if( cartProductsMenu.style.display == "block" ){
//        cartProductsMenu.style.display = "none";    
//    }
//    else
//        cartProductsMenu.style.display = "block";
//}
//}
/**********************/
/*check if there's item in local storage*/
/*
let addedItem= localStorage.getItem("cartProducts") 
? JSON.parse(localStorage.getItem("cartProducts")) : [] ;
 Check if there's item added to cart, Then retrieve # of added items
if(addedItem)
    { addedItem.map((item) => {
        cartProductsDivDom.innerHTML +=`<div class="item-content"><p> ${item.title}</p> <span> ${item.qty} </span> </div>` });
        cartBadge.style.display = "block";
        cartBadge.innerHTML += addedItem.length;
    }
*/


/*Diplay Products - Invoke/immediately Function with parameter*/
let DrawProductsUI;
( DrawProductsUI= function(products = []){
        let productsUI = products.map((item)=>{
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
            <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
${
            item.isMe === "Y" && 
"<button class='edit-product-btn' onclick = 'editProduct(" +item.id+ ")'> Edit Product </button>" 
            } 

        <a> <i class="favorite fa fa-heart " onclick= "addToFavorite(${item.id})" 
            style= "color: ${item.liked == true ? "coral" : "" }" > </i> </a>
         </div> 
    </div>
        `
        });
   
        productsList.innerHTML = productsUI.join("");
    })(JSON.parse(localStorage.getItem("products")) || products);
/**********************/


/* function Get Unique array and filter it by ID*/
 function getUniqueArrToDom( cartItemsArr , fitlerByID){
 let uniqueArr = cartItemsArr
 .map((item) => item[fitlerByID]) /*click 2 add 2 times [1,1]*/
 .map((item, index, finalArr) => finalArr.indexOf(item) === index &&index)
 .filter((item) => cartItemsArr[item]) // [{0}] delete false or true boolean fnq
 .map((item) => cartItemsArr[item]); 
     
 return uniqueArr;
     
 };
/**********************/



/*ADD To Cart*/
function addedToCart(id)   {
 if(localStorage.getItem("username"))
   {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let product = products.find((item) => item.id === id);
    let  IsProductInCart = addedItem.some((i) => i.id === product.id );      
       if(IsProductInCart){
           addedItem = addedItem.map((p) => {
             if(p.id === product.id) p.qty +=1;  
           return p;
             });
           } else{
           addedItem.push(product);
            }
    // Ui
    cartProductsDivDom.innerHTML = "";
    /*dont dupilcate items in cart menu UI*/
    addedItem.forEach((item) => {
    cartProductsDivDom.innerHTML +=`<div class="item-content"> 
        <p> ${item.title} <span> ${item.qty}</span>  </p> 
        </div>   `  ;
    });
    /*
        addedItem = [...addedItem , product];
       let uniqueProducts = getUniqueArrToDom(addedItem , "id");
    */
       
    
       
       
// Save Data
   localStorage.setItem("cartProducts", JSON.stringify(addedItem));
       
// add counter of items to cart icon
   let selectedItemsCount = document.querySelectorAll(".cart-products div p");
    cartBadge.style.display = "block";
    cartBadge.innerHTML = selectedItemsCount.length; } 
    
    else{
        window.location = "login.html"    
        }
}
/**********************/

/*Add Item info Into Local Storage To display the correct item details*/
function saveItemDataToDB(id) { 
        localStorage.setItem("productID",id);
        window.location = "productDetails.html";
}
/**********************/


/*Search By Name*/
/**********************/
let input = document.getElementById("searchProduct");
let myProductsArr = JSON.parse(localStorage.getItem("products"));
input.addEventListener("keyup", function(e){
   
       search(e.target.value, myProductsArr);
 
    if (e.target.value.trim === ""){
        DrawProductsUI(JSON.parse(localStorage.getItem('products')));
    }
    
});
function search(title, myArr) {
    let SearchedItem = myArr.filter( (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
        DrawProductsUI(SearchedItem); // array object of products
}
/******************/

/*filter Products by size */
fitlerBySize.addEventListener("change", getFilterBySize)
function getFilterBySize(e){
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let val = e.target.value ; 
if(val === 'all') { DrawProductsUI(products); }
else
 {
     products = products.filter((item) => item.size === val);
     DrawProductsUI(products);
 }

}
/**********************/


// ADD To Favorite
/**********************/
let favoriteItems = 
    localStorage.getItem("productsFavorite") 
    ? JSON.parse(localStorage.getItem("productsFavorite")) : productsDB;
let favoriteAllItems = [];
function addToFavorite(id) {
    if(localStorage.getItem("username")){ 
    let products = JSON.parse(localStorage.getItem("products")) || products;

   let choosenItem = products.find((item) => item.id === id ); //object  
    choosenItem.liked = true;
    favoriteItems = [...favoriteItems, choosenItem ];
    let uniqueFavorite =  getUniqueArrToFavorite(favoriteItems,"id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueFavorite)); 
    products.map((item) => {
        if(item.id === choosenItem.id){
            item.liked = true; 
        }
      
    });
        localStorage.setItem("products", JSON.stringify(products));
        DrawProductsUI(products);
    }
    else
        window.location = "login.html";
}

/* function Get Unique array and filter it by ID*/
 function getUniqueArrToFavorite( favoriteItems , favoriteID){
 let uniqueArr = favoriteItems
 .map((item) => item[favoriteID]) /*click 2 add 2 times [0,1]*/
 .map((item, i, finalArray) => finalArray.indexOf(item) === i &&i)
 .filter((item) => favoriteItems[item]) // [{0,1}] delete false or true boolean fnq
 .map((item) => favoriteItems[item]); 
 return uniqueArr;
 
 };

/**********************/

// Edit Product 
function  editProduct(i) {
    localStorage.setItem("editProduct", i ) ;
    window.location = "editProduct.html";
    
}
