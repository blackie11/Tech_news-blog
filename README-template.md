# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/assets/images/Screen%20Shot%202024-03-15%20at%2015.38.55.png)
![](./src/assets/images/Screen%20Shot%202024-03-15%20at%2015.38.07.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Vanilla JavaScript
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

-   responsive design
    -applying modifier classes using javaScript
    -application of grid auto flow

To see how you can add code snippets, see below:

```html
<nav class="primary-navigation center-items" data-visible="false">
    <ul class="nav-list">
        <!-- Navigation items -->
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">News</a></li>
        <li class="nav-item"><a href="#">Popular</a></li>
        <li class="nav-item"><a href="#">Trending</a></li>
        <li class="nav-item"><a href="#">Categories</a></li>
    </ul>
</nav>

<!-- Toggle button for mobile menu -->
<div class="menu-container hidden">
    <button
        id="menu-toggle"
        aria-expanded="false"
        aria-controls="primary-navigation"
    ></button>
</div>
```

```css
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.315);
    z-index: 1;
}
```

```js
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
}
```

### Continued development

Understanding more the fundamentals of Javascript even as i make use of it daily while trying to advance in my use of tailwind css in styling projects.
Also grow in making my project more accessible to screen readers and keyboard users.

### Useful resources

-   [ resource 1](https://www.youtube.com) - This helped me to understand and vistualize how the functionality of the project would lok like.
-   [resource 2](https://www.w3school.com) - This is an amazing website help me to understand more some of the properties and methods in use while also teaching me best way to use them.
-   [resource 3](https://www.stackoverflow.com) - this helped me when i encounter some bug on my code, also good for finding solution to common issues

## Author

-   Website - [Ahiakwo Great](https://blackie-portfolio.vercel.app/)
-   Frontend Mentor - [@blackie](https://www.frontendmentor.io/profile/blackie)
-   Twitter - [@GreatAhiakwo](https://www.twitter.com/@GreatAhiakwo)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
