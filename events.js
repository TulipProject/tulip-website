// nar bar

var a = 1;
var r = 0;
var e = 0;
var c = 0;

function changeAboutColor() {
 a = 1;
 r = 0;
 e = 0;
 c = 0;
document.getElementById('pills-about-tab').style.color = "white";
document.getElementById('pills-resources-tab').style.color = "#FF7D7D";
document.getElementById('pills-events-tab').style.color = "#FF7D7D";
document.getElementById('pills-contact-tab').style.color = "#FF7D7D";
}


function changeResourcesColor() {
 a = 0;
 r = 1;
 e = 0;
 c = 0;
document.getElementById('pills-about-tab').style.color = "#FF7D7D";
document.getElementById('pills-resources-tab').style.color = "white";
document.getElementById('pills-events-tab').style.color = "#FF7D7D";
document.getElementById('pills-contact-tab').style.color = "#FF7D7D";
}

function changeEventsColor(){
 a = 0;
 r = 0;
 e = 1;
 c = 0;
document.getElementById('pills-about-tab').style.color = "#FF7D7D";
document.getElementById('pills-resources-tab').style.color = "#FF7D7D";
document.getElementById('pills-events-tab').style.color = "white";
document.getElementById('pills-contact-tab').style.color = "#FF7D7D";
}

function changeContactColor(){
 a = 0;
 r = 0;
 e = 0;
 c = 1;
document.getElementById('pills-about-tab').style.color = "#FF7D7D";
document.getElementById('pills-resources-tab').style.color = "#FF7D7D";
document.getElementById('pills-events-tab').style.color = "#FF7D7D";
document.getElementById('pills-contact-tab').style.color = "white";
}


$(document).click(function(){
if (a == 1){
    document.getElementById('pills-about-tab').style.backgroundColor = "#FF7D7D";
    document.getElementById('pills-resources-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-events-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-contact-tab').style.backgroundColor = "#FFCCCC";
}else if (r == 1){
    document.getElementById('pills-about-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-resources-tab').style.backgroundColor = "#FF7D7D";
    document.getElementById('pills-events-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-contact-tab').style.backgroundColor = "#FFCCCC";
}else if (e == 1){
    document.getElementById('pills-about-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-resources-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-events-tab').style.backgroundColor = "#FF7D7D";
    document.getElementById('pills-contact-tab').style.backgroundColor = "#FFCCCC";
}else {
    document.getElementById('pills-about-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-resources-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-events-tab').style.backgroundColor = "#FFCCCC";;
    document.getElementById('pills-contact-tab').style.backgroundColor = "#FF7D7D";
}
});

$(document).ready(function () {
    document.getElementById('pills-about-tab').style.color = "white";
    document.getElementById('pills-about-tab').style.backgroundColor = "#FF7D7D";
    document.getElementById('pills-resources-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-events-tab').style.backgroundColor = "#FFCCCC";
    document.getElementById('pills-contact-tab').style.backgroundColor = "#FFCCCC";
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

