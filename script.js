// Spieler einfügen
let spieler = document.querySelector(".player");
let spieler2 = document.querySelector(".player2");

spieler2.style.left = "510px";
spieler2.style.top = "400px";

spieler.style.left = "60px";
spieler.style.top = "400px";
// Spieler einfügen fertig

// Hintergrund bewegen
let spielfeld = document.querySelector(".playground");
let backgroundPosition = 0;
// Hintergrund bewegen fertig

// Punkteanzeige
let punkteAnzeige = document.querySelector(".punkte");
let score = 0;

// Seite neu laden wenn man auf neustart Knopf drückt

const welcomeDiv = document.getElementById("welcomediv");
const btn = document.getElementById("welcomebutton");
const refreshButton = document.querySelector(".restartimg");
const SeiteNeuLaden = () => {
  location.reload();
};
refreshButton.addEventListener("click", SeiteNeuLaden);
// Seite neu laden wenn man auf neustart Knopf drückt

let timer = new Timer(80);

btn.onclick = function () {
  if (welcomeDiv.style.display !== "none") {
    welcomeDiv.style.display = "none";
    window.requestAnimationFrame(loop);
  } else {
    welcomeDiv.style.display = "flex";
  }
};

function loop() {
  // Hintergrund bewegen
  backgroundPosition = backgroundPosition + 10;
  spielfeld.style.backgroundPosition = `0 ${backgroundPosition}px`;

  // Spieler Blau nach rechts
  if (keyboard(68) && parseInt(spieler.style.left) < 557) {
    spieler.style.left = parseInt(spieler.style.left) + 8 + "px";
  }

  // Spieler Blau nach links
  if (keyboard(65) && parseInt(spieler.style.left) > 22) {
    spieler.style.left = parseInt(spieler.style.left) - 8 + "px";
  }

  // Spieler Blau nach oben
  if (keyboard(87) && parseInt(spieler.style.top) > 0) {
    spieler.style.top = parseInt(spieler.style.top) - 6 + "px";
  }

  // Spieler Blau nach unten
  if (keyboard(83) && parseInt(spieler.style.top) < 530) {
    spieler.style.top = parseInt(spieler.style.top) + 6 + "px";
  }

  // Spieler Gelb nach links
  if (keyboard(39) && parseInt(spieler2.style.left) < 557) {
    spieler2.style.left = parseInt(spieler2.style.left) + 8 + "px";
  }

  // Spieler Gelb nach rechts
  if (keyboard(37) && parseInt(spieler2.style.left) > 22) {
    spieler2.style.left = parseInt(spieler2.style.left) - 8 + "px";
  }

  // Spieler Gelb nach oben
  if (keyboard(38) && parseInt(spieler2.style.top) > 0) {
    spieler2.style.top = parseInt(spieler2.style.top) - 6 + "px";
  }

  // Spieler Gelb nach unten
  if (keyboard(40) && parseInt(spieler2.style.top) < 530) {
    spieler2.style.top = parseInt(spieler2.style.top) + 6 + "px";
  }

  // Hindernisse:

  let allegegner = document.querySelectorAll(".gegner");

  let crashdiv1 = document.getElementById("player1crashdiv");
  let restarttext1 = document.querySelector(".restarttext");
  let restarttext2 = document.querySelector(".restarttext2");

  if (anyCollision(spieler, allegegner)) {
    crashdiv1.style.display = "flex";
    restarttext1.style.display = "block";
    return;
  }

  if (anyCollision(spieler2, allegegner)) {
    crashdiv1.style.display = "flex";
    restarttext2.style.display = "block";
    return;
  }

  if (timer.ready()) {
    let h = document.createElement("div");
    // Zufällige Platzierung auf x Achse Hindernisse:
    let position = Math.floor(Math.random() * 557);

    h.classList.add("gegner");

    h.style.top = "-200px";

    h.style.left = position + "px";

    spielfeld.appendChild(h);
  }

  for (let gegner of allegegner) {
    gegner.style.top = parseInt(gegner.style.top) + 8 + "px";

    if (parseInt(gegner.style.top) > 1300) {
      gegner.parentNode.removeChild(gegner);
    }

    // Punkteanzeige
    if (parseInt(spieler.style.left) > 0) {
      score = score + 2;
      punkteAnzeige.textContent = score;
    }
  }
  window.requestAnimationFrame(loop);
}
