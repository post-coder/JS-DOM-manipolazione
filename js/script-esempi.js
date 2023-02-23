

// prendere un elemento dal document attraverso l'id
let titleEl = document.getElementById("title");


// prendere un elemento tramite la query css
let secondStrongEl = document.querySelector("#second-strong");


// aggiungere una classe alla proprietà "classList"
secondStrongEl.classList.add("red");
secondStrongEl.classList.add("italic");

// rimuovere una classe dalla proprietà "classList"
secondStrongEl.classList.remove("grassetto");


console.log(secondStrongEl);




// _______________________________________________________________________
// aumenta la dimensione del testo se l'utente è over 65
let bodyEl = document.querySelector("body");

// prendo il campo di testo
let inputEl = document.getElementById('userAge');
let userAgeButton = document.getElementById('userAgeButton');

// sintassi per controllare quando un elemento è cliccato
// aggiungo un evento click
userAgeButton.addEventListener('click', function() {
  // tutto il codice che vogliamo eseguire all'occorrenza dell'evento
  console.log("OH MIO DIO HAI CLICCATO IL BUTTON");

  if(inputEl.value >= 65) {
    bodyEl.style.fontSize = "24px";
  } else {
    bodyEl.style.fontSize = "16px";
  }
});



// _______________________________________________________________________
// cambiamo il colore del secondo elemento


let buttonChangeElement2ColorEl = document.getElementById("changeElement2Color");

buttonChangeElement2ColorEl.addEventListener("click", function() {
  secondStrongEl.classList.toggle("italic");
  secondStrongEl.classList.toggle("red");
});


