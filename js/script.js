/*
Ciao Ragazzi,
Esercizio di oggi : JS Hamburger menu
nome repo: js-hamburger

Hamburger menu:
mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Partite come base del vostro esercizio scaricando questa repo:
https://bitbucket.org/teachersboolean/ex-hamburger-menu-base/downloads/
Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS

Consiglio del giorno:
Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!

P.S.: l'url del logo che trovate nell'html non è più raggiungibile, potete sostituirlo con questo: 
*/

/*
- bersaglio il pulsane di apertura e lo memorizzo in una variabile
- bersaglio hamburger-menu e lo memorizzo in una variabile
- bersaglio l'elemento di chiusura della nav e lo memorizzo in una variabile

- aggiungo l'eventListener del click al pulsante di apertura
  ° ad ogni click cambiamo la proprietà display in block dell'elemento hamburger-menu
- aggiungo all'elemento di chiusura nav un eventListener del click
  ° ad ogni click cambiamo la proprietà display in none dell'elemento hamburger-menu
*/


// - bersaglio il pulsane e lo memorizzo in una variabile
let openMenuEl = document.getElementById("menu-toggle");
let hamburgerMenuEl = document.querySelector(".hamburger-menu");
let closeMenuEl = document.querySelector(".hamburger-menu .close");


// - aggiungo l'eventListener del click al pulsante di apertura
openMenuEl.addEventListener("click", function() {
  // ad ogni click cambiamo la proprietà display in block dell'elemento hamburger-menu
  hamburgerMenuEl.style.display = "block";
});

closeMenuEl.addEventListener('click', function() {
  // ad ogni click cambiamo la proprietà display in none dell'elemento hamburger-menu
  hamburgerMenuEl.style.display = 'none';
});


// ___________________________________________________
// esempio
let bodyEl = document.querySelector("body");
bodyEl.addEventListener("copy", function() {
  console.log("Copiato qualcosa");
})

let imgEl = document.querySelector("img");
imgEl.addEventListener("click", function() {
  imgEl.style.transition = "all .3s";
  imgEl.style.transform = "scale(1.5) translateX(30px)";
});
