const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// HTML Elements
const startButton = document.getElementById("startGameButton"); //link to whatever is in the HTML
const scoreboard = document.getElementById("scoreboard");
const gameBoard = document.querySelector("game_board");
const loader = document.getElementById("loader");

let scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];

// * Display loader
const displayLoader = () => {
  loader.classList.toggle("hidden");
};

// * Fetch api function
const loadCardsFromApi = async () => {
  const randomPokemonIds = new Set();

  while (randomPokemonIds.size < 8) {
    const randomNumber = Math.ceil(Math.random() * 150);
    randomPokemonIds.add(randomNumber);
  }

  const promisesArray = [...randomPokemonIds].map((randomPokemonId) =>
    fetch(apiURL + randomPokemonId)
  );
  const responseFromApi = await Promise.all(promisesArray);
  const pokemonData = await Promise.all(
    responseFromApi.map((item) => item.json())
  );

  console.log(pokemonData);
  displayLoader();
  return pokemonData;
};
console.log(loadCardsFromApi());

// * Scoreboard function
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

const storeScore = (currentScore) => {
  let name = "Ester";
  let playerScore = { player: name, score: currentScore };
  scoreArray.push(playerScore);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
  console.log(scoreArray);
  console.log(JSON.parse(localStorage.getItem("scoreArray")));
  return scoreArray;
};

// * start timer fucntionality
const updateStopwatch = () => {
  const time = Date.now() - timerStart;
  const seconds = Math.floor(time / 1000) % 60;
  const centiSeconds = Math.floor(time / 10) % 100;
  const minutes = Math.floor(time / 1000 / 60) % 60;

  stopwatch.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${centiSeconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
  timerStart = Date.now();
  updateStopwatch();
  timer = setInterval(() => {
    updateStopwatch();
  }, 10);
};

// * stop timer functionality
const stopTimer = () => {
  storeScore(stopwatch.innerText);
  clearInterval(timer);
};

// ! List of helper functions
// loadCardsFromApi()
// stopTimer()
// startTimer()
// setScoreboard()
