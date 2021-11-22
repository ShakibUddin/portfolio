const navbarMobileButton = document.getElementById("navbar-button");
const navbarItems = document.getElementById("navbar-items");
let navOpen = false;
navbarMobileButton.addEventListener("click", () => {
    navOpen = !navOpen;
    if (navOpen) {
        navbarItems.style.width = "70%";
        navbarItems.style.display = "flex";
        navbarItems.style.flexDirection = "column";
        navbarItems.style.backgroundColor = "white";
        navbarItems.style.position = "absolute";
        navbarItems.style.top = "50px";
        navbarItems.style.left = "25px";
        navbarItems.style.userSelect = "none";
    }
    else {
        navbarItems.style.display = "none";

    }
})