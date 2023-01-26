// JavaScript Document
console.log("hi");

/// Navigatie menu open ///

//check
var menuButton = document.querySelector ("header > button");
console.log(menuButton);

//check
var menuNav = document.querySelector ("header nav:nth-of-type(1)");
console.log(menuNav);

//check
menuButton.addEventListener("click", openMenu);

//check
function openMenu() {
    menuNav.classList.add("actief");

    console.log("menu is open");
}


/// Navigatie menu sluiten ///

//check
var menuSluitButton = document.querySelector ("header nav:nth-of-type(1) button");
console.log(menuSluitButton);

//check
menuSluitButton.addEventListener("click", sluitMenu);

//check
function sluitMenu() {
    menuNav.classList.remove("actief")

    console.log("menu is gesloten");
}


