/*
Student Name: Didar Orazgeldiyev
File Name: script.js
Date: 09/14/2023
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}