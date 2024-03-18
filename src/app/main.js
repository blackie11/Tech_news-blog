// const toggleBtn=document.getElementById('menu-toggle');

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("menu-toggle");
    const primaryNav = document.querySelector(".primary-navigation");

    if (navToggle && primaryNav) {
        function toggleNavbar() {
            const visibility = primaryNav.getAttribute("data-visible");
            const main = document.querySelector(".overlay");
            if (visibility === "false") {
                primaryNav.setAttribute("data-visible", "true");
                navToggle.setAttribute("aria-expanded", "true");
                primaryNav.classList.toggle("show");
                navToggle.innerHTML = `<img
                src="./src/assets/images/icon-menu-close.svg"
                alt="toggle-button"
                class="close_menu"
            />`;
                main.style.display = "block";
            } else if (visibility === "true") {
                primaryNav.setAttribute("data-visible", "false");
                navToggle.setAttribute("aria-expanded", "false");
                primaryNav.classList.remove("show");
                navToggle.innerHTML = `<img
                src="./src/assets/images/icon-menu.svg"
                alt="toggle-button"
            />`;
                main.style.display = "none";
            }
        }

        navToggle.addEventListener("click", toggleNavbar);
    } else {
        console.error("Could not find either navToggle or primaryNav element.");
    }
});

// toggleBtn.addEventListener("click", navToggle);
