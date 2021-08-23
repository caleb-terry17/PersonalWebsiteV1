///////////////////
// small nav menu
///////////////////

// getting id of nav links menu
var navLinks = document.getElementById("navLinks");

// function to hide menu
function hideMenu() {
    navLinks.style.top = "-100vh";
}

// function to show menu
function showMenu() {
    navLinks.style.top = "0";
}

///////////////////
// scrolling
///////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navMenu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}