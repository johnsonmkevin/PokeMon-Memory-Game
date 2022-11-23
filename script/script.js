const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// HTML Elements
const startButton = document.getElementById("startGameButton"); //link to whatever is in the HTML
const gameBoard = document.getElementById("gameBoard");

const gameBoardContainer = document.querySelector(".game__board");
gameBoardContainer.classList.add("hidden");

// loader
const loader = document.getElementById("loader");

// timer
const stopwatch = document.getElementById("timer");
const stopButton = document.getElementById("stopButton");

//Scoreboard
const scoreboardWrapper = document.getElementById("scoreboard");

let scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];

// * Display loader
// const displayLoader = () => {
//   loader.classList.toggle("hidden");
// };

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
  return pokemonData;
};
console.log(loadCardsFromApi());

// Rendering images in the gameboard
const createNewGame = async () => {
  gameBoardContainer.classList.remove("hidden");
  const gameCardsDataArray = await loadCardsFromApi();
  displayPokemonCards([...gameCardsDataArray, ...gameCardsDataArray]);
  startTimer();
};

const displayPokemonCards = (pokemonIdsArray) => {
  pokemonIdsArray.sort((_) => Math.random() - 0.5);
  console.log(pokemonIdsArray);

  const pokemonCardHTML = pokemonIdsArray
    .map((card) => {
      const pokemonImgData = card.sprites.front_default;
      const pokemonNameData = card.name;
      return `
    <div class="card" data-pokename="${pokemonNameData}">
    <div class="front"></div>
    <div class="back rotated">
    <img src="${pokemonImgData}" alt="${pokemonNameData}"  />
    <h2>${pokemonNameData}</h2>
    </div>
    </div>
    `;
    })
    .join("");
  gameBoard.innerHTML = pokemonCardHTML;
};

// * Scoreboard function
const storeScore = (currentScore) => {
  let name = "Ester";
  let scoreDate = new Date();
  let playerScore = {
    date: scoreDate.toLocaleDateString(),
    player: name,
    score: currentScore,
  };
  scoreArray.push(playerScore);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
  console.log(scoreArray);
  console.log(JSON.parse(localStorage.getItem("scoreArray")));
  return scoreArray;
};

const createListElement = (i) => {
  console.log(localStorage.getItem("scoreArray"));
  console.log(JSON.parse(localStorage.getItem("scoreArray")));
  let scoreboardElement = document.createElement("li");

  scoreboardElement.innerHTML =
    JSON.parse(localStorage.getItem("scoreArray"))[i].date +
    " " +
    JSON.parse(localStorage.getItem("scoreArray"))[i].player +
    ": " +
    JSON.parse(localStorage.getItem("scoreArray"))[i].score;
  scoreboardWrapper.prepend(scoreboardElement);
  console.log(scoreboardElement);
};

const setScoreboard = () => {
  let i = 0;
  scoreArray.forEach(() => {
    createListElement(i);
    i++;
  });
};
setScoreboard();

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
  createListElement(scoreArray.length - 1);
  clearInterval(timer);
  console.log(scoreArray);
};

// ! List of helper functions
// loadCardsFromApi()
// stopTimer()
// startTimer()
// setScoreboard()

// event listeners
startButton.addEventListener("click", createNewGame);
stopButton.addEventListener("click", stopTimer);
