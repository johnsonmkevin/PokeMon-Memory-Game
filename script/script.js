// stopwatch
const startButton = document.getElementById("startGameButton"); //link to whatever is in the HTML
const stopButton = document.getElementById("stopButton"); //link to whatever is in the HTML
const stopwatch = document.getElementById("timer"); //link to whatever is in the HTML
const scoreboard = document.getElementById("scoreboard");

let timerStart;
let timer;

let scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];

const setScoreboard = () => {
  let i = 0;
  scoreArray.forEach(() => {
    console.log(localStorage.getItem("scoreArray"));
    console.log(JSON.parse(localStorage.getItem("scoreArray")));
    scoreboardElement = document.createElement("li");
    scoreboardElement.innerHTML =
      JSON.parse(localStorage.getItem("scoreArray"))[i].player +
      ": " +
      JSON.parse(localStorage.getItem("scoreArray"))[i].score;
    scoreboard.append(scoreboardElement);
    console.log(scoreboardElement);
    i++;
  });
};
setScoreboard();

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

const storeScore = (currentScore) => {
  let name = "Ester";
  let playerScore = { player: name, score: currentScore };
  scoreArray.push(playerScore);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
  console.log(scoreArray);
  console.log(JSON.parse(localStorage.getItem("scoreArray")));
  return scoreArray;
};

stopButton.onclick = () => {
  storeScore(stopwatch.innerText);
  clearInterval(timer);
};

/*resetButton.onclick = function () {
  clearInterval(timer);
  stopwatch.innerHTML =  `${0}:${0}<span class="clock-cs">${"00"}</span>`;
}*/
