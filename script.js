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

function processOrder() {
    alert("Thank you for your order.");
}

function submitForm()
{
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            const subject = document.getElementById("subject").value;

            const customerInfo = {
                    fname, lname, subject
            };
	
            const keyValue = fname;
            //save customer information to localStorage
            localStorage.setItem(keyValue, JSON.stringify(customerInfo));
                
            //access and parse local data back out of localStorage. 
            const who = JSON.parse( localStorage.getItem(fname) );
            alert("Thank you for your message, "+ who.fname +"!");
}