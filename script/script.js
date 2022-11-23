"use strict";
const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// HTML Elements
const gameBoard = document.querySelector("game_board");
const loader = document.getElementById("loader");

// Display loader
const displayLoader = () => {
  loader.classList.toggle("hidden");
};

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
