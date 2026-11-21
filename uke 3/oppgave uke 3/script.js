//Model globale variabler(let,)
let isDarkMode = true;

let pizza1 = "bilder/pizza1.jpg";
let pris1 = 149;

let taco2 = "bilder/taco2.jpg";
let pris2 = 169;

let pasta3 = "bilder/pasta3.jpg";
let pris3 = 139;

let gryte4 = "bilder/gryte4.jpg";
let pris4 = 159;

let totalPris = 0;
let antallIKurv = 0;
let visKurv = false;
let kurvInnhold = "";
let harRabatt = false;
let sistKlikketId = "";







//View funskjeoner som genererer HTML
function updateView() {
  const app = document.getElementById("app");
  const knappTekst = oppdaterTemaOgKnappTekst();
  const kurvDetaljerHtml = hentKurvDetaljerHtml();
  const sumÅBetale = beregnBetaling();


function oppdaterTemaOgKnappTekst() {
  document.body.classList.toggle("darkMode", isDarkMode);
  return isDarkMode ? "Bytt til Lightmode" : "Bytt til Darkmode";
  }

  function hentKurvDetaljerHtml() {
  if (!visKurv) {
    return "";
  }

  if (kurvInnhold === "") {
    return `<div class="cart-details"><p>Kurven er tom.</p>
    </div>`;
  }

  return `
    <div class="cart-details">
      <ul>${kurvInnhold}</ul>
      <p class="cart-total">TotalPris i kurv: ${totalPris} kr</p>
    </div>
  `;
}
  
  //document.body.classList.toggle("darkMode", isDarkMode);
  //const knappTekst = isDarkMode ? "Bytt til Lightmode" : "Bytt til Darkmode";

  app.innerHTML = `
      <button onclick="handleToggleMode()">${knappTekst}</button>
      <button class="cart-btn" onclick="handleToggleKurv()">Kurv: ${antallIKurv} stk | Total: ${totalPris} kr (trykk for å se)</button>${kurvDetaljerHtml}
       <p class="pay-info">Å betale: ${sumÅBetale} kr</p>
  <div class="discount-box">
       <input id="rabattInput" type="text" placeholder="Skriv rabattkode">
       <button onclick="handleBrukRabatt(document.querySelector('#rabattInput').value)">Bruk rabatt</button>
  </div>
    <div class="menu-grid">
      <div class="menu-box">
        <img src="${pizza1}" alt="Pizza">
        <p class="price">${pris1} kr</p>
        <button onclick="handleLeggTil('Pizza', ${pris1})">Legg til (${pris1} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${taco2}" alt="Taco">
        <p class="price">${pris2} kr</p>
        <button onclick="handleLeggTil('Taco', ${pris2})">Legg til (${pris2} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${pasta3}" alt="Pasta">
        <p class="price">${pris3} kr</p>
        <button onclick="handleLeggTil('Pasta', ${pris3})">Legg til (${pris3} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${gryte4}" alt="Gryte">
        <p class="price">${pris4} kr</p>
        <button onclick="handleLeggTil('Gryte', ${pris4})">Legg til (${pris4} kr)</button>
      </div>
    </div>
  `;

  
}


//controller - funksjoner som gjør Bakrunssarbeid
// endrer variabler og gjør ting som ikke aktivt synes på skjermen.


function handleToggleMode() {
  isDarkMode = !isDarkMode;
  updateView();
}
function handleToggleKurv() {
  visKurv = !visKurv;
  updateView();
}

function handleLeggTil(navn, pris, knapp) {
  totalPris = totalPris + pris;
  antallIKurv = antallIKurv + 1;
  kurvInnhold = kurvInnhold + "<li>" + navn + " – " + pris + " kr</li>";
  if (knapp) {
    registrerKnappMedThis.call(knapp);
  }
  updateView();
}

function beregnBetaling() {
  if (harRabatt) {
    return totalPris * 0.7;
  } else {
    return totalPris;
  }
}
function registrerKnappMedThis() {
  if (this) {
    sistKlikketId = this.id;
  }
}
function handleBrukRabatt(kode) {
  if (kode.trim().toLowerCase() === "sulten") {
    harRabatt = true;
  } else {
    harRabatt = false;
  }
  updateView();
}

updateView();