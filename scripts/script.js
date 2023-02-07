// JavaScript Document
console.log("hi");


/// Navigatie menu open ///
var menuButton = document.querySelector ("header > button");
console.log(menuButton);


var menuNav = document.querySelector ("header nav:nth-of-type(1)");
console.log(menuNav);


menuButton.addEventListener("click", openMenu);


function openMenu() {
    menuNav.classList.add("actief");

    console.log("menu is open");
}


/// Navigatie menu sluiten ///
var menuSluitButton = document.querySelector ("header nav:nth-of-type(1) button");
console.log(menuSluitButton);


menuSluitButton.addEventListener("click", sluitMenu);


function sluitMenu() {
    menuNav.classList.remove("actief")

    console.log("menu is gesloten");
}



/// Naamverandering pot | BambooPalm ///
var radioButton = document.querySelectorAll('section:nth-of-type(3) input[name="BambooPalm"]');
var pTekst = document.querySelector('section:nth-of-type(3) li:nth-of-type(1) p:nth-of-type(3)');

radioButton.forEach(radioButton => {
	radioButton.addEventListener("change", wijzigTekst);
});

function wijzigTekst(event) {
	pTekst.innerHTML = event.target.value;
}