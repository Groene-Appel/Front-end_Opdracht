
console.log('Aantal gekozen producten');

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





//aangeven hoeveelheid producten
var aantalMinder = document.querySelector('#aantalMinder');
var aantalMeer = document.querySelector('#aantalMeer');
var aantalProducten = document.querySelector('#aantal');

// begin toestand 
var aantal = 1 ; // het aantal begint op 1

// aantalProducten update functie
function updateScore(erbij = 1) {
    console.log('update score:' + erbij )
    aantal = aantal + erbij ;
    aantalProducten.textContent = aantal;
}

// eventHandler functies
function aantalErbij() {
	console.log('doe er een punt bij');

    updateScore( +1 );
}

function aantalEraf() {
	console.log('doe er een punt af');

    updateScore( -1 );
}

// eventListeners op de knoppen
aantalMeer.addEventListener('click', aantalErbij );
aantalMinder.addEventListener('click', aantalEraf );







/// uitklapmenu product-pagina ///
// code van: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate
var uitklapMenu = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < uitklapMenu.length; i++) {
  uitklapMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 

  });
}