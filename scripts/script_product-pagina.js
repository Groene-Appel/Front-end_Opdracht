
console.log('Aantal gekozen producten');

// declaratie van DOM objecten
var aantalMinder = document.querySelector('#aantalMinder');
var aantalMeer = document.querySelector('#aantalMeer');
var aantalProducten = document.querySelector('#aantal');

// begin toestand 
var aantal = 1 ; // de score begint op 1

// aantalProducten update functie
function updateScore(erbij = 1) {
    console.log('update score:' + erbij )
    aantal = aantal + erbij ;
    aantalProducten.textContent = aantal;
}

// eventHandler functies
function puntErbij() {
	console.log('doe er een punt bij');

    // hier de aanroep van de functie om punten bij te houden
    updateScore( +1 );
}

function puntEraf() {
	console.log('doe er een punt af');

    // hier de aanroep van de functie om punten bij te houden
    updateScore( -1 );
}

// eventListeners op de knoppen
aantalMeer.addEventListener('click', puntErbij );
aantalMinder.addEventListener('click', puntEraf );




/// Navigatie menu sluiten ///
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