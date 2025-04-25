"use strict";

(function() {
    const menuButton = document.querySelector("button");
    const dropdown = document.querySelector(".dropdown");
    menuButton.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });

})();
