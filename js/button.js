var mynav = document.getElementById("nav");
var realheight = mynav.getBoundingClientRect().top;
document.body.onscroll = function() {
    if (window.scrollY >= realheight) {
        mynav.classList.add("fixed-nav");
    } else {
        mynav.classList.remove("fixed-nav");
    }
};