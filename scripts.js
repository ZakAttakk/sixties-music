window.addEventListener("touchstart", alertTouch);
var html = document.querySelector("html");

function alertTouch(){
    // alert("touch");
    html.classList.add("noScroll");
}