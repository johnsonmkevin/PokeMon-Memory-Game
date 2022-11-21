// stopwatch
const startButton = document.getElementById(""); //link to whatever is in the HTML
const stopButton = document.getElementById(""); //link to whatever is in the HTML
// const stopwatch = document.getElementById(""); //link to whatever is in the HTML

let timerStart;
let timer;

const updateStopwatch = () => {
  const time = Date.now() - timerStart;
  const seconds = Math.floor(time / 1000) % 60;
  const centiSeconds = Math.floor(time / 10) % 100;
  const minutes = Math.floor(time / 1000 / 60) % 60;

  stopwatch.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${centiSeconds.toString().padStart(2, "0")}`;
};

startButton.onclick = () => {
  timerStart = Date.now();

  updateStopwatch();
  timer = setInterval(() => {
    updateStopwatch();
  }, 10);
};

stopButton.onclick = () => {
  clearInterval(timer);
};

/*resetButton.onclick = function () {
  clearInterval(timer);
  stopwatch.innerHTML =  `${0}:${0}<span class="clock-cs">${"00"}</span>`;
}*/
