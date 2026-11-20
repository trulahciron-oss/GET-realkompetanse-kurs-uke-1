//Model globale variabler(let,)
let isDarkMode = false;

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

function leggTilPrisKurv(pris) {
    totalPris = totalPris + pris;
    antallIKurv = antallIKurv + 1;
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
}









//View funskjeoner som genererer HTML
function updateView() {
  const app = document.getElementById("app");

  document.body.classList.toggle("darkMode", isDarkMode);
  const knappTekst = isDarkMode ? "Bytt til Lightmode" : "Bytt til Darkmode";

  app.innerHTML = `
    <button onclick="handleToggleMode()">${knappTekst}</button>
    <p class="cart-info">Kurv:${antallIKurv} stk | total: ${totalPris} kr</p>
    <div class="menu-grid">
      <div class="menu-box">
        <img src="${pizza1}" alt="Pizza">
        <p class="price">${pris1} kr</p>
        <button onclick="handleLeggTil(${pris1})">Legg til (${pris1} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${taco2}" alt="Taco">
        <p class="price">${pris2} kr</p>
        <button onclick="handleLeggTil(${pris2})">Legg til (${pris2} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${pasta3}" alt="Pasta">
        <p class="price">${pris3} kr</p>
        <button onclick="handleLeggTil(${pris3})">Legg til (${pris3} kr)</button>
      </div>
      <div class="menu-box">
        <img src="${gryte4}" alt="Gryte">
        <p class="price">${pris4} kr</p>
        <button onclick="handleLeggTil(${pris4})">Legg til (${pris4} kr)</button>
      </div>
    </div>
  `;

  
}


//controller - funksjoner som gjør Bakrunssarbeid
// endrer variabler og gjør ting som ikke aktivt synes på skjermen.


function handleToggleMode() {
  toggleDarkMode();
  updateView();
}

function handleLeggTil(pris) {
  leggTilPrisKurv(pris);
  updateView();
}

updateView();