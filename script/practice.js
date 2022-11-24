// Destructuring 101
// A way to retrieve individual elements from objects or arrays

// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const a = data.a;
// const b = data.b;
// const c = data.c;
// const { a, b, c } = data;

// const arr = [100, 200, 300];

// const arrItem0 = arr[0];
// const arrItem1 = arr[1];
// const arrItem2 = arr[2];
// const [arrItem0, arrItem1, arrItem2] = arr;

// Spread operator 101
// A way to get or pass data from arrays or objects without having to type everything.

// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const data2 = {
//   x: 1,
//   y: 2,
//   z: 3,
// };

// const combinedData = { ...data, ...data2, g: 4 };

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArrays = [...array1, ...array2, 7] > [1, 2, 3, 4, 5, 6, 7];

// setTimeout(() => {
//   if (!matches.includes(firstPokemonName))
//   rotateElements([front, back, firstCardFront, firstCardBack]);
//   if (!matches.includes(secondPokemonName))
//   rotateElements([front, back, firstCardFront, firstCardBack]);
// }, 500);

// const flipCard = (event) => {
//   const pokemonCard = event.currentTarget;
//   console.log(pokemonCard);
//   const [front, back] = getBackAndFront(pokemonCard);
//   if (front.classList.contains("rotated") && isPaused) {
//     console.log("Hello");
//     return;
//   }
//   isPaused = true;
//   rotateElements([front, back]);
//   if (!firstPick) {
//     firstPick = pokemonCard;
//     isPaused = false;
//   } else {
//     const secondPokemonName = pokemonCard.dataset.pokename;
//     const firstPokemonName = firstPick.dataset.pokename;
//     if (firstPokemonName !== secondPokemonName) {
//       const [firstFront, firstBack] = getBackAndFront(firstPick);
//       setTimeout(() => {
//         rotateElements([front, back, firstFront, firstBack]);
//         firstPick = null;
//         isPaused = false;
//       }, 500);
//     } else {
//       matches++;
//       if (matches === 8) {
//         stopTimer();
//         console.log("WINNER");
//       }
//       firstPick = null;
//       isPaused = false;
//     }
//   }
// };

// const getBackAndFront = (card) => {
//   const front = card.querySelector(".front");
//   const back = card.querySelector(".back");
//   return [front, back];
// };

// const rotateElements = (elements) => {
//   if (typeof elements !== "object" || !elements.length) return;
//   elements.forEach((element) => element.classList.toggle("rotated"));
// };
