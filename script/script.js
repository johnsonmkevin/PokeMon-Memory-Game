const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// HTML Elements
const startButton = document.getElementById("startGameButton");
const gameBoard = document.getElementById("gameBoard");
const gameBoardContainer = document.querySelector(".game__board");
const loader = document.getElementById("loader");
const stopwatch = document.getElementById("timer");
const scoreboardWrapper = document.getElementById("scoreboard");

let firstPick;
let isPaused = true;
let matches = 0;

let scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];

// hidden elements by default
gameBoardContainer.classList.add("hidden");
loader.classList.add("hidden");

// * Fetch api function
const loadCardsFromApi = async () => {
  loader.classList.remove("hidden");
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
  loader.classList.add("hidden");
  return pokemonData;
};

// * Rendering images in the gameboard
const displayPokemonCards = (pokemonIdsArray) => {
  pokemonIdsArray.sort((_) => Math.random() - 0.5);
  const pokemonCardHTML = pokemonIdsArray
    .map((card) => {
      const pokemonImgData = card.sprites.front_default;
      const pokemonNameData = card.name;
      return `
        <div class="card" onclick="flipCard(event)" data-pokename="${pokemonNameData}">
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
  let name = prompt("UserName?");
  let scoreDate = new Date();
  let playerScore = {
    date: scoreDate.toLocaleDateString(),
    player: name,
    score: currentScore,
  };
  scoreArray.push(playerScore);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
  // console.log(scoreArray);
  // console.log(JSON.parse(localStorage.getItem("scoreArray")));
  return scoreArray;
};

// * create a list element when a score exists
const createListElement = (i) => {
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
  startButton.disabled = false;
};

// * FLipping card functionality
const flipCard = (e) => {
  const pokemonCard = e.currentTarget;
  const [front, back] = getFrontAndBack(pokemonCard);
  if (front.classList.contains("rotated") || isPaused) {
    return;
  }
  isPaused = true;
  rotateElements([front, back]);
  if (!firstPick) {
    firstPick = pokemonCard;
    isPaused = false;
  } else {
    const secondPokemonName = pokemonCard.dataset.pokename;
    const firstPokemonName = firstPick.dataset.pokename;
    if (firstPokemonName !== secondPokemonName) {
      const [firstFront, firstBack] = getFrontAndBack(firstPick);
      setTimeout(() => {
        rotateElements([front, back, firstFront, firstBack]);
        firstPick = null;
        isPaused = false;
      }, 500);
    } else {
      matches++;
      if (matches === 8) {
        stopTimer();
        console.log("WINNER");
      }
      firstPick = null;
      isPaused = false;
    }
  }
};

const getFrontAndBack = (card) => {
  const front = card.querySelector(".front");
  const back = card.querySelector(".back");
  return [front, back];
};

const rotateElements = (elements) => {
  if (typeof elements !== "object" || !elements.length) return;
  elements.forEach((element) => element.classList.toggle("rotated"));
};

// * Start new Game
const createNewGame = async () => {
  isPaused = true;
  firstPick = null;
  matches = 0;
  gameBoardContainer.classList.remove("hidden");
  setTimeout(async () => {
    const gameCardsDataArray = await loadCardsFromApi();
    displayPokemonCards([...gameCardsDataArray, ...gameCardsDataArray]);
    isPaused = false;
  }, 200);

  startTimer();
  startButton.disabled = true; // disables the new game button while a game is already playing
};

//* event listeners
startButton.addEventListener("click", createNewGame);

window.addEventListener("load", () => {
  setScoreboard();
});
