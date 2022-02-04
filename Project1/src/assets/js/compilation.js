function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Get the button

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
  var rootElement = document.documentElement
  window.onscroll = function () { scrollFunction() };
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  
  if ((rootElement.scrollTop / scrollTotal) > 0.50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}