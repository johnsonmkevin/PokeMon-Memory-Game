const startButtonEl = document.getElementById("startGameButton");
const clockEl = document.getElementById("stopwatch");
const gameOverEl = document.getElementById("GameOver");
let timerStart;
let timer = 90;

startButtonEl.onclick = function () {
  interval = setInterval(() => {
    let seconds = Math.round(900 / 1000);
    timer -= seconds;
    clockEl.innerHTML = `${timer}:00`;
    localStorage.setItem("timer", timer);
  }, 1000);
};

