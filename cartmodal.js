//Get the cart items from sessionStorage, or initialize as an empty array.
var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

// Simple wrapper function for system messages
function showMessage(message) {
  alert(message);
}

//function to add an item to the cart.
function addToCart(itemName)
{
    cartItems.push(itemName);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    showMessage("Item added to the cart: " + itemName);
}

//event listener for the "clear cart" button.
var clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function () {
    cartItems = [];
    sessionStorage.removeItem("cartItems");
    displayCartItems();
    showMessage("Cart cleared");
    closeCartModal();
})


//function to populate the shopping cart modal with items. 
function displayCartItems()
{
    var cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    if (cartItems && cartItems.length > 0)
    {
        for (var i = 0; i < cartItems.length; i++)
        {
            var listItem = document.createElement("li");
            listItem.textContent = cartItems[i];
            cartList.appendChild(listItem);
        }
    }
}

var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var itemName = this.getAttribute("data-item");
    addToCart(itemName);
  });
});

function addToCart(itemName) {
  cartItems.push(itemName);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  showMessage("Item added to the cart: " + itemName);
}

var viewCartButton = document.getElementById("view-cart-button");
var cartModal = document.getElementById("cart-modal");

viewCartButton.addEventListener("click", function() {
  openCartModal();
  displayCartItems();
});

function openCartModal() {
  cartModal.style.display = "block";
}

function displayCartItems() {
  var cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  if (cartItems && cartItems.length > 0) {
    for (var i = 0; i < cartItems.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = cartItems[i];
      cartList.appendChild(listItem);
    }
  }
}

//Get the handle.
var closeCartButton = document.getElementById("close-cart-modal");

//Function to close the modal by changing CSS property.
function closeCartModal() {
  cartModal.style.display = "none";
}

//Attach event listener to trigger closeCartModal().
closeCartButton.onclick = function() {
  closeCartModal();
}