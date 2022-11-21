"use strict";

const apiURL = "https://pokeapi.co/api/v2/pokemon/";

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
