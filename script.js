//Hamburger menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//For rearranging html elements with media query
const mobile = "(max-width: 768px)";
function setFirstChild() {
  const matched = window.matchMedia(mobile).matches;

  const topElement = matched
    ? document.getElementById("element-b")
    : document.getElementById("element-a");

  const parent = topElement.parentNode;
  parent.insertBefore(topElement, parent.firstChild);
}
window.onload = setFirstChild;
window.matchMedia(mobile).addEventListener("change", setFirstChild);

//subscribe button on footer on every page 
document.getElementById("subscribe-btn").addEventListener("click", function() {
    alert("Thank you for subscribing.");
});

//alert message for buttons on gallery page
function addToCart() {
    alert("Item added to the cart.");
}

function clearCart() {
    alert("Cart cleared.");
}

function processOrder() {
    alert("Thank you for your order.");
}

// contact form alert message
document.getElementById("form").addEventListener("submit", function() {
    alert("Thank you for your message.");
});