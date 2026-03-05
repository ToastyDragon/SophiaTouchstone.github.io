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