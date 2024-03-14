"use strict";

// const toggleBtn=document.getElementById('menu-toggle');
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("menu-toggle");
  var primaryNav = document.querySelector(".primary-navigation");

  if (navToggle && primaryNav) {
    var toggleNavbar = function toggleNavbar() {
      var visibility = primaryNav.getAttribute("data-visible");

      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        primaryNav.classList.toggle("show");
        navToggle.innerHTML = "<img\n                src=\"./src/assets/images/icon-menu-close.svg\"\n                alt=\"toggle-button\"\n                class=\"close_menu\"\n            />";
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("show");
        navToggle.innerHTML = "<img\n                src=\"./src/assets/images/icon-menu.svg\"\n                alt=\"toggle-button\"\n            />";
      }
    };

    navToggle.addEventListener("click", toggleNavbar);
  } else {
    console.error("Could not find either navToggle or primaryNav element.");
  }
}); // toggleBtn.addEventListener("click", navToggle);