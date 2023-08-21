//cart
let cartIcon =document.querySelector('#cart_icon');
let cart = document.querySelector(".cart");
let CloseCart = document.querySelector("#close-cart");
let AddcartIcon = document.getElementById('add-cart');
//for open cart
// jQuery(document).ready(function(){
//     jQuery(".cart").addClass("active");
// });

// jQuery("#close-cart").click(function(){
//     jQuery(".cart").removeClass("active");
// });
// for open cart
// for open cart
jQuery(document).ready(function(){
    jQuery("#cart_icon").click(function(){
        jQuery(".cart").addClass("active");
    });
});

// close cart
jQuery(document).ready(function(){
    jQuery("#close-cart").click(function(){
        jQuery(".cart").removeClass("active");
    });
});

//Cart Working JS

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready); 
}
else{
    ready();
}

// Making function
function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for(var i=0; i<removeCartButtons.length; i++){
        var button= removeCartButtons[i];
        button.addEventListener("click",removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged)
    }

    //Add to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i=0; i<quantityInputs.length; i++){
        var button = addCart[i];
        button.addEventListener("click",addCartClicked)
    }

    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click",buyButtonClicked);

 }
// function ready() {
//     var removeCartButtons = document.getElementsByClassName("cart-item-remove");
//     for (var i = 0; i < removeCartButtons.length; i++) {
//         var button = removeCartButtons[i];
//         button.addEventListener("click", removeCartItem);
//     }

//     document
//         .querySelector('#cart_icon')
//         .addEventListener("click", function() {
//             cart.classList.add("active");
//         });

//     document
//         .querySelector("#close-cart")
//         .addEventListener("click", function() {
//             cart.classList.remove("active");
//         });

//     document
//         .querySelector(".btn-buy")
//         .addEventListener("click", buyButtonClicked);
// }

//Buy Button
function buyButtonClicked(){
    alert("Your Order is Placed")
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//Remove Item from Cart

// function removeCartItem(event){
//     var buttonClicked = event.remove();
//     buttonClicked.parentElement.remove();
//     updatetotal();
    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updatetotal();
}

//Quantity CHanged 

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value)|| input.value<=0)
    {
        input.value=1;
    }
    updatetotal();
}
AddcartIcon.addEventListener('click', addToCart);
//Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts= button.parentElement;
    console.log("Clicked");
    var shopProducts = event.target.parentElement;
    var title = shopProducts.getElementsByClassName("product-tit")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg =shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg)
{
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0; i<cartItemNames.length; i++){
        
        if(cartItemNames[i].innerText==title){
            alert("You already added to the cart. Increase the Quantity");
            return
        }
    }
    
    var cartBoxContent =`<img src=${productImg} class= "cart-img">
                            <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                            </div><i class="fa-solid fa-trash cart-remove"></i>`;
                            
                            
    cartShopBox.innerHTML=cartBoxContent;
    cartItems.append(cartShopBox);
    updatetotal();

    cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click",removeCartItem);
    cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change",removeCartItem);
    cartShopBox.getElementsByClassName("cart-price")[0]
    .addEventListener("change",removeCartItem);

}

//Update total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box")[0];
    var total = 0;
    for (var i=0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("R ",""));
        var quantity = quantityElement.value;
        total = total+price*quantity;
    }
    //If price contains cents
    total = math.round(total*100)/100;
    document.getElementsByClassName("total-price")[0].innerText= "R"+total;

}

cartIcon.addEventListener("click", function() {
    cart.classList.add("active");
});
function addToCart(title, price, productImg) {
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    var itemContent = `
        <img src="${productImg}" class="cart-item-image">
        <div class="cart-item-details">
            <span class="cart-item-title">${title}</span>
            <span class="cart-item-price">${price}</span>
        </div>
        <button class="cart-item-remove">Remove</button>
    `;

    cartItem.innerHTML = itemContent;
    cartContent.appendChild(cartItem);

    // Add event listener to remove button
    var removeButton = cartItem.getElementsByClassName("cart-item-remove")[0];
    removeButton.addEventListener("click", removeCartItem);

    // Update total
    updatetotal();
}