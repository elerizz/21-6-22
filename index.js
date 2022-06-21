// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:

// ```js
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']
// ```

// //per ripassare le function normali vs. arrow function
// const funzioneSemplice = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(funzioneSemplice(2, 3));

// //per ripassare le arrow function
// const arrowFunction = (num1, num2) => num1 + "," + num2;
// console.log(arrowFunction(4, 6));

// const arrayOne = ["alfa", "beta", "gamma", "delta", "epsilon", "zeta"];

// const arrayTwo = ["ein", "zwei", "drei", "viar", "funf"];

// console.log(arrowFunction(arrayOne, arrayTwo));

// esercizio 1

const arrayNames = ["Gabriele", "Giada", "Marco", "Lucia", "Fatima"];
const arrayNamesPlusIndex = arrayNames.map(
  (element, index, _) => index + "-" + element
);

console.log(arrayNamesPlusIndex);

// Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:

// ```js
// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];

const arrayNamesReverseIndex = arrayNames.map(
  (_, index, array) => array.lenght - 1 - index
);

console.log(arrayNamesReverseIndex);

// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:

// ```js
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];
// ```

const arrayNamesReverse = arrayNames.map(
  (element, index, array) => element array.lenght - 1 - index
);

console.log(arrayNamesReverse);
