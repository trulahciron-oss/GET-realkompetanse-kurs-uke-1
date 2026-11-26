// VIEW
const emptySquare = `<div class="square"></div>`;
const playerSquare = `<div class="square player">🧭</div>`;

updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
     <main>
      <h1>Skattejakt</h1>
      <p>Finn den skjulte skatten ved å bevege deg rundt på brettet!</p>
      <div>${generateInformation()}</div>
      <div class="dpad">
        <button onclick="moveUp()">↑</button>
        <div class="dpad-middle">
          <button onclick="moveLeft()">←</button>
          <button onclick="moveDown()">↓</button>
          <button onclick="moveRight()">→</button>
        </div>
      </div>
      <button class="restart" onclick="startGame()">Nytt spill</button>
    </main>
  `;
}

function generateInformation() {
  return /*HTML*/ `
    <p>Antall trekk: 0</p>
    <div class="board">${showBoard()}</div>
    <div class="status">Finn skatten!</div>
  `;
}

// Brettet er foreløpig hardkodet: spilleren står alltid i første rute.
// Endre funksjonen slik at den bruker playerIndex og boardSize.
function showBoard() {
  return drawPattern(0) + playerSquare + drawPattern(24);
  
}

// Ferdig hjelpefunksjon. repeat() gjentar en tekst et gitt antall ganger.
// Eksempel: drawPattern(3) returnerer HTML for tre tomme ruter.
function drawPattern(amount) {
  return emptySquare.repeat(amount);
}

// TODO: Lag en funksjon med returverdi som gir en passende statusmelding.
