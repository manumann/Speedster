var spieler = document.querySelector(".player");
var spieler2 = document.querySelector(".player2");

const targetDiv = document.getElementById("welcomediv");
const btn = document.getElementById("welcometoggle");

spieler2.style.left = "510px";
spieler2.style.top = "400px";

spieler.style.left = "60px";
spieler.style.top = "400px";

var spielfeld = document.querySelector(".playground");
var backgroundPosition = 0;

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

var timer = new Timer(200);

function loop() {
  backgroundPosition = backgroundPosition + 10;
  spielfeld.style.backgroundPosition = `0 ${backgroundPosition}px`;

  if (keyboard(68) && parseInt(spieler.style.left) < 550) {
    spieler.style.left = parseInt(spieler.style.left) + 8 + "px";
  }

  if (keyboard(65) && parseInt(spieler.style.left) > 15) {
    spieler.style.left = parseInt(spieler.style.left) - 8 + "px";
  }

  if (keyboard(39) && parseInt(spieler2.style.left) < 546) {
    spieler2.style.left = parseInt(spieler2.style.left) + 8 + "px";
  }

  if (keyboard(37) && parseInt(spieler2.style.left) > 15) {
    spieler2.style.left = parseInt(spieler2.style.left) - 8 + "px";
  }

  if (keyboard(87)) {
    spieler.style.top = parseInt(spieler.style.top) - 6 + "px";
  }

  if (keyboard(83)) {
    spieler.style.top = parseInt(spieler.style.top) + 6 + "px";
  }

  if (keyboard(38)) {
    spieler2.style.top = parseInt(spieler2.style.top) - 6 + "px";
  }

  if (keyboard(40)) {
    spieler2.style.top = parseInt(spieler2.style.top) + 6 + "px";
  }

  var steine = document.querySelectorAll(".stein");

  if (anyCollision(spieler, steine)) {
    alert("Game over! Player 1 crashed");

    return;
  }

  if (anyCollision(spieler2, steine)) {
    alert("Game over! Player 2 crashed");

    return;
  }

  /*Hindernisse*/

  if (timer.ready()) {
    var h = document.createElement("div");

    h.classList.add("stein");

    h.style.top = "-200px";

    h.style.left = "300px";

    spielfeld.appendChild(h);
  }

  for (var stein of steine) {
    stein.style.top = parseInt(stein.style.top) + 8 + "px";

    if (parseInt(stein.style.top) > 800) {
      stein.parentNode.removeChild(stein);
    }
  }

  /**/

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
