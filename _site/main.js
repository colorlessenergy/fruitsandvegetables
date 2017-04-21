var menuNav = document.getElementById("menu-nav");
var menu = document.getElementById("menu");
var responsiveNav = document.getElementById("responsive-nav");

menu.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.height = "100%";
  responsiveNav.style.display = "block";
});

menuNav.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].style.overflow = "";
  document.getElementsByTagName("body")[0].style.height = "";
  responsiveNav.style.display = "none";
})
