/*variables*/
/*Define product*/
let productsList = document.querySelector(".product");
let cartProductsDivDom = document.querySelector(".cart-products .cart-products-content");

let cartProductsMenu = document.querySelector(".cart-products");
let cartProductsIcon = document.querySelector(".shoppingCart i");
let cartBadge = document.querySelector(".badge");

/*open cart menu*/
cartProductsIcon.addEventListener("click", openCartMenu); 
/*Open Cart Menu*/
function openCartMenu(){
    if(cartProductsDivDom.innerHTML !== "")
    {
        if( cartProductsMenu.style.display == "block" )
        {
        cartProductsMenu.style.display = "none";    
        }
        else
        cartProductsMenu.style.display = "block";
    }
}
/**********************/
/*check if there's item in local storage*/
let addedItem= localStorage.getItem("cartProducts") 
? JSON.parse(localStorage.getItem("cartProducts"))
:[] ;
/* Check if there's item added to cart, Then retrieve # of added items*/
if(addedItem)
    { addedItem.map((item) => {
        cartProductsDivDom.innerHTML += `
        <div class="item-content"><p> ${item.title}</p> <span> ${item.qty} </span> </div>
    ` });
        cartBadge.style.display = "block";
        cartBadge.innerHTML += addedItem.length;
    }

